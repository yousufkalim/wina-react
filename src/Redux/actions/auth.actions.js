import {
  authConstants,
  actionTypes,
  studentConstants,
  actionGlobals,
} from "./constants";
import axios from "../../helpers/axios";
import * as Notistack from "./notistack";
import { token, user } from "../../urlConfig";

export const set_loading = (loading) => ({
  type: actionTypes.SET_LOADING_AUTH,
  loading,
});
export const set_loading_data = (loading) => ({
  type: actionGlobals.SET_DATA_LOADING,
  loading,
});

export const login = (data, formik) => async (dispatch) => {
  try {
    dispatch(set_loading(true));
    const res = await axios.post(`/auth/login`, {
      ...data,
    });

    const { token, user } = res.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    Get_User_Student();
    dispatch({
      type: authConstants.LOGIN_SUCCESS,
      payload: {
        token,
        user,
        loading: false,
      },
    });
    dispatch({
      type: studentConstants.STUDENT_DATA_SUCCESS,
      payload: {
        user,
        loading: false,
      },
    });

    dispatch(
      Notistack.enqueueSnackbar(Notistack.snackBar(res.data.message, "success"))
    );
    formik.setSubmitting(false);
    formik.handleReset();
  } catch (err) {
    dispatch(set_loading(false));
    console.log(err.response, "error");
    dispatch(
      Notistack.enqueueSnackbar(
        Notistack.snackBar(err.response.data.message, "error")
      )
    );
  }
};

export const isUserLoggedIn = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch(set_loading(true));

  if (token) {
    const user = JSON.parse(localStorage.getItem("user"));

    dispatch({
      type: authConstants.LOGIN_SUCCESS,
      payload: {
        token,
        user,
        loading: false,
      },
    });
    return Promise.resolve();
  } else {
    dispatch(signout());
    dispatch(set_loading(false));

    return Promise.resolve();
  }
};

export const signout = () => async (dispatch) => {
  try {
    dispatch(set_loading(true));
    const res = await axios.post(`/auth/logout`);
    localStorage.clear();
    dispatch({ type: authConstants.LOGOUT_SUCCESS, loading: false });
  } catch (err) {
    dispatch(set_loading(false));
  }
};
// get info user type=student

export const Get_User_Student = () => async (dispatch) => {
  if (user && token) {
    try {
      dispatch(set_loading_data(true));

      const res = await axios.post(
        `student/get-info`,
        { type: user.type },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: studentConstants.STUDENT_DATA_SUCCESS,
        payload: { loading: false, user: res.data.user },
      });
    } catch (error) {
      dispatch(set_loading_data(false));
      dispatch(
        Notistack.enqueueSnackbar(
          Notistack.snackBar(error.response.data.message, "error")
        )
      );
    }
  }
};
