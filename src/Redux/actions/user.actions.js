import { actionTypes, studentConstants, companyConstants } from "./constants";
import axios from "../../helpers/axios";
import * as Notistack from "./notistack";
import { token, baseUrl } from "../../urlConfig";
export const set_loading = (loading) => ({
  type: actionTypes.SET_LOADING_USER,
  loading,
});
export const set_loading_school = (loading) => ({
  type: actionTypes.SET_LOADING_SCOOL,
  loading,
});

export const headers = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
export const Student_Signup = (user, formik) => async (dispatch) => {
  try {
    dispatch(set_loading(true));

    const res = await axios.post(`/auth/register`, {
      ...user,
    });
    let message = res.data.message;
    dispatch({
      type: studentConstants.STUDENT_REGISTER_SUCCESS,
      payload: { message, loading: false },
    });

    try {
      dispatch(set_loading(true));

      const res = await axios.post(`/auth/email-verfication`, {
        email: user.email,
      });
      dispatch({
        type: studentConstants.STUDENT_EMAIL_SENT_SUCCESS,
        payload: { message: res.data.message, loading: false },
      });
      dispatch(
        Notistack.enqueueSnackbar(
          Notistack.snackBar(res.data.message, "success")
        )
      );
      formik.setSubmitting(false);
      formik.handleReset();
      dispatch(set_loading(false));
    } catch (error) {
      dispatch(set_loading(false));

      dispatch({
        type: studentConstants.STUDENT_EMAIL_SENT_FAILURE,
        payload: { message: error.response.data.message },
      });
    }
  } catch (error) {
    dispatch(set_loading(false));
    dispatch(
      Notistack.enqueueSnackbar(
        Notistack.snackBar(error.response.data.message, "error")
      )
    );
  }
};

export const Add_info_Student = (user, formik) => async (dispatch) => {
  try {
    dispatch(set_loading_school(true));
    const res = await axios.put(
      `student/edit-info`,
      { ...user },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: studentConstants.STUDENT_SCHOOL_SUCCESS,
      payload: { loading: false, user: res.data.user },
    });
    dispatch(
      Notistack.enqueueSnackbar(Notistack.snackBar(res.data.message, "success"))
    );
    formik.setSubmitting(false);
  } catch (error) {
    // console.log(error, "error from school");
    dispatch(set_loading_school(false));

    dispatch(
      Notistack.enqueueSnackbar(
        Notistack.snackBar(error.response.data.message, "error")
      )
    );
  }
};
// update user image and video

export const Add_Image_info_Student = (user) => async (dispatch) => {
  try {
    dispatch(set_loading_school(true));
    let res = await axios({
      method: "put",
      url: `${baseUrl}/student/edit-info`,
      data: user,
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    dispatch({
      type: studentConstants.STUDENT_SCHOOL_SUCCESS,
      payload: { loading: false, user: res.data.user },
    });
    dispatch(
      Notistack.enqueueSnackbar(Notistack.snackBar(res.data.message, "success"))
    );
  } catch (error) {
    // console.log(error, "error from school");
    dispatch(set_loading_school(false));

    dispatch(
      Notistack.enqueueSnackbar(
        Notistack.snackBar(error.response.data.message, "error")
      )
    );
  }
};

//delete school
export const Delete_School_Info = (id) => async (dispatch) => {
  try {
    dispatch(set_loading_school(true));
    const res = await axios.delete(`student/delete-school/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: studentConstants.SCHOOL_DELETE_SUCCESS,
      payload: { loading: false, user: res.data.user },
    });
    dispatch(
      Notistack.enqueueSnackbar(Notistack.snackBar(res.data.message, "success"))
    );
  } catch (error) {
    // console.log(error, "error from school");
    dispatch(set_loading_school(false));

    dispatch(
      Notistack.enqueueSnackbar(
        Notistack.snackBar(error.response.data.message, "error")
      )
    );
  }
};

// delete professional informations

export const Delete_Professional_Info = (id) => async (dispatch) => {
  try {
    dispatch(set_loading_school(true));
    const res = await axios.delete(`student/delete-professional-info/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: studentConstants.PROFESSIONAL_INFO_DELETE_SUCCESS,
      payload: { loading: false, user: res.data.user },
    });
    dispatch(
      Notistack.enqueueSnackbar(Notistack.snackBar(res.data.message, "success"))
    );
  } catch (error) {
    // console.log(error, "error from school");
    dispatch(set_loading_school(false));

    dispatch(
      Notistack.enqueueSnackbar(
        Notistack.snackBar(error.response.data.message, "error")
      )
    );
  }
};
