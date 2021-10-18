import {
  authConstants,
  actionTypes,
  studentConstants,
  actionGlobals,
  companyConstants,
} from "./constants";
import axios from "../../helpers/axios";
import * as Notistack from "./notistack";
import io from "socket.io-client";

import { token, user, baseUri } from "../../urlConfig";
export const set_loading = (loading) => ({
  type: actionTypes.SET_LOADING_AUTH,
  loading,
});
export const set_loading_data = (loading) => ({
  type: actionGlobals.SET_DATA_LOADING,
  loading,
});
export const set_req_password = (loading) => ({
  type: actionGlobals.SET_REQUEST_PASSWORD_LOADING,
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
    if (user.type && user.type === "student") {
      Get_Student_Jobs();
      Get_User_Student();
      GetAllNotifications();
    } else if (user.type && user.type === "company") {
      dispatch(Get_Company_Jobs());
      GetAllNotifications();
    }
    dispatch({
      type: authConstants.LOGIN_SUCCESS,
      payload: {
        token,
        user: res.data.user,
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
    // console.log(err.response, "error");
    if (err.response) {
      dispatch(
        Notistack.enqueueSnackbar(
          Notistack.snackBar(err.response.data.message, "error")
        )
      );
    }
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
    return Promise.resolve(user);
  } else {
    dispatch(signout());
    dispatch(set_loading(false));

    return Promise.resolve();
  }
};

export const signout = () => async (dispatch) => {
  try {
    dispatch(set_loading(true));
    await axios.post(`/auth/logout`);
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    dispatch({ type: authConstants.LOGOUT_SUCCESS, loading: false });
    // dispatch({
    //   type: studentConstants.STUDENT_DATA_SUCCESS,
    //   payload: { loading: false, user: [] },
    // });
    dispatch({
      type: actionGlobals.GET_ALL_NOTIFICATIONS_SUCCESS,
      payload: { loading: false, notifications: [] },
    });
    dispatch({
      type: studentConstants.GET_STUDENT_JOBS,
      payload: { loading: false, jobs: [] },
    });
    dispatch({
      type: companyConstants.COMPANY_GET_JOBS_SUCCESS,
      payload: { loading: false, jobs: [] },
    });
    window.location("/");
  } catch (err) {
    dispatch(set_loading(false));
  }
};
// get info user type=student

export const Get_User_Student = () => async (dispatch) => {
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
  }
};

export const Request_ForgotPassword =
  (data, formik, props) => async (dispatch) => {
    try {
      dispatch(set_req_password(true));

      const res = await axios.post(`profile/request-forget-password`, data);
      dispatch({
        type: studentConstants.REQUEST_PASSWORD_SUCCESS,
        payload: { loading: true },
      });
      dispatch(
        Notistack.enqueueSnackbar(
          Notistack.snackBar(res.data.message, "success")
        )
      );
      props.handleModal("reqforgotPassword");
      formik.handleReset();
    } catch (error) {
      dispatch(set_req_password(false));
      if (error.response) {
        dispatch(
          Notistack.enqueueSnackbar(
            Notistack.snackBar(error.response.data.message, "error")
          )
        );
      }
    }
  };
export const Reset_ForgotPassword =
  (data, formik, props, history) => async (dispatch) => {
    try {
      dispatch(set_req_password(true));

      const res = await axios.post(
        `profile/reset-password/?passwordToken=${props.id}`,
        data
      );
      dispatch({
        type: studentConstants.RESET_PASSWORD_SUCCESS,
        payload: { loading: true },
      });
      dispatch(
        Notistack.enqueueSnackbar(
          Notistack.snackBar(res.data.message, "success")
        )
      );
      props.handleModal("resetPassword");
      formik.handleReset();
      history.push("/");
    } catch (error) {
      dispatch(set_req_password(false));
      if (error.response) {
        dispatch(
          Notistack.enqueueSnackbar(
            Notistack.snackBar(error.response.data.message, "error")
          )
        );
      }
    }
  };
// email verification

export const Verify_email =
  (token, formik, props, history) => async (dispatch) => {
    try {
      dispatch(set_loading(true));

      const res = await axios.post(`auth/verify-email/${token}`, {});
      dispatch({
        type: authConstants.EMAIL_VERIFY_SUCCESS,
        payload: { loading: true },
      });
      dispatch(
        Notistack.enqueueSnackbar(
          Notistack.snackBar(res.data.message, "success")
        )
      );
      props.handleModal("emailVerify");
      history.push("/");
      formik.handleReset();
    } catch (error) {
      dispatch(set_loading(false));
      if (error.response) {
        dispatch(
          Notistack.enqueueSnackbar(
            Notistack.snackBar(error.response.data.message, "error")
          )
        );
      }
    }
  };
// get student jobs
export const Get_Student_Jobs = () => async (dispatch) => {
  try {
    dispatch(set_loading_data(true));

    const res = await axios.post(`student/search-job`, {});
    dispatch({
      type: studentConstants.GET_STUDENT_JOBS,
      payload: { loading: false, jobs: res.data.jobs },
    });
  } catch (error) {
    dispatch(set_loading_data(false));
  }
};

//get compnay jobs

export const Get_Company_Jobs = () => async (dispatch) => {
  try {
    dispatch(set_loading_data(true));

    const res = await axios.get(`job/get-jobs`);
    dispatch({
      type: companyConstants.COMPANY_GET_JOBS_SUCCESS,
      payload: { loading: false, jobs: res.data.jobs },
    });
  } catch (error) {
    dispatch(set_loading_data(false));

    // dispatch(
    //   Notistack.enqueueSnackbar(
    //     Notistack.snackBar(error.response.data.message, "error")
    //   )
    // );
  }
};
//get all notifications

export const GetAllNotifications = () => async (dispatch) => {
  if (user && token) {
    try {
      dispatch(set_loading_data(true));

      const res = await axios.get(`profile/getAllNotifications`);
      // console.log(res.data.notifications, "resdata");
      let temp = res.data.notifications.sort((a, b) =>
        new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1
      );

      dispatch({
        type: actionGlobals.GET_ALL_NOTIFICATIONS_SUCCESS,
        payload: { loading: false, notifications: temp },
      });
      // dispatch(
      //   Notistack.enqueueSnackbar(
      //     Notistack.snackBar(res.data.message, "success")
      //   )
      // );
    } catch (error) {
      dispatch(set_loading_data(false));
      // if (error.response) {
      //   dispatch(
      //     Notistack.enqueueSnackbar(
      //       Notistack.snackBar(error.response.data.message, "error")
      //     )
      //   );
      // }
    }
  }
};
export const UpdateNotifications = (id) => async (dispatch) => {
  if (user && token) {
    try {
      dispatch(set_loading_data(true));

      const res = await axios.post(`profile/updateNotifications/${id}`, {});
      // console.log(res.data.notifications, "resdata");
      dispatch({
        type: actionGlobals.UPDATE_NOTIFICATION,
        payload: { loading: false, notifications: res.data.notifications },
      });
      // dispatch(
      //   Notistack.enqueueSnackbar(
      //     Notistack.snackBar(res.data.message, "success")
      //   )
      // );
    } catch (error) {
      dispatch(set_loading_data(false));

      // if (error.response) {
      //   dispatch(
      //     Notistack.enqueueSnackbar(
      //       Notistack.snackBar(error.response.data.message, "error")
      //     )
      //   );
      // }
    }
  }
};

export const SocketNotifications = () => async (dispatch) => {
  try {
    dispatch(set_loading_data(true));

    const socket = io(baseUri, {
      query: `userConnectionId=${user._id}`,
    });
    if (socket) {
      socket.on(`recieveNotification${user._id}`, (datas) => {
        // setdata([...notificationsData, datas]);
        console.log(datas, "datas");
      });
    }
  } catch (error) {
    console.log(error);
  }
};
