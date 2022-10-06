import React, { useState, useEffect } from 'react';
import {
  useDispatch,
  // useSelector
} from 'react-redux';
import {
  isUserLoggedIn,
  Get_User_Student,
  Get_Student_Jobs,
  Get_Company_Jobs,
  GetAllNotifications,
  SocketNotifications,
} from '../Redux/actions';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Student from './Dashboard/Student';
import Company from './Dashboard/Company';
import Admin from './Dashboard/Admin';
import UnAuth from './unAuth';
import Loader from '../components/UI/Loader';
import { baseUrl, user } from '../urlConfig';
import axios from 'axios';
import {
  useHistory, Route,
  //  Redirect
} from 'react-router-dom';
import * as Notistack from '../Redux/actions/notistack';
import socket from '../helpers/socket';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const store = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const [User, setUser] = useState('');
  let Token = localStorage.getItem('token');
  //componentDidMount or componentDidUpdate

  useEffect(() => {
    getUrlToken();
  }, []);

  const getUrlToken = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const urlToken = queryParams.get('token');
    const reqFailed = queryParams.get('failed');

    if (urlToken) {
      localStorage.setItem('token', urlToken);
      var config = {
        method: 'get',
        url: baseUrl + `/auth/verify-user`,
        headers: {
          Authorization: 'Bearer ' + urlToken,
        },
      };
      await axios(config)
        .then(function (response) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
          if (response.data.user.type && response.data.user.type === 'student') {
            Get_Student_Jobs();
            Get_User_Student();
            GetAllNotifications();
          } else if (response.data.user.type && response.data.user.type === 'company') {
            dispatch(Get_Company_Jobs());
            GetAllNotifications();
          }
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: {
              urlToken,
              user: response.data.user,
              loading: false,
            },
          });
          dispatch(Notistack.enqueueSnackbar(Notistack.snackBar('Connexion réussie', 'success')));
          history.push('/');
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
          history.push('/');
        });
    } else if (reqFailed) {
      dispatch(Notistack.enqueueSnackbar(Notistack.snackBar('Utilisateur non trouvé', 'error')));
      history.push('/');
    }
  };

  useEffect(() => {
    dispatch(isUserLoggedIn()).then((response) => {
      setUser(response);
      if (response && response.type === 'student') {
        dispatch(Get_User_Student());
        dispatch(Get_Student_Jobs());
      } else if (response && response.type === 'company') {
        dispatch(Get_Company_Jobs());
      }
      dispatch(GetAllNotifications());
      setLoading(false);
    });
  }, [loading, Token]);
  useEffect(() => {
    dispatch(SocketNotifications());
    return () => socket.off(`recieveNotification${user?._id}`);
  }, [loading]);

  return (
    <>
      {User ? (
        User.type === 'student' ? (
          <Route exact path="/students/*" component={Student} />
        ) : User.type === 'company' ? (
          <Route exact path="/companies/*" component={Company} />
        ) : (
          User.type === 'admin' && <Route exact path="/admins/*" component={Admin} />
        )
      ) : (
        window.location.pathname === '/goolgeLogin' ||
        (window.location.pathname === '/linkedInLogin' && <Loader.CenterProgress />)
      )}

      <Route exact path="/*" component={UnAuth} />
    </>
  );
}

export default App;
