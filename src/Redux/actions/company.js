import { actionTypes, studentConstants, companyConstants } from "./constants";
import axios from "../../helpers/axios";
import * as Notistack from "./notistack";
import { token, baseUrl } from "../../urlConfig";
export const set_loading = (loading) => ({
  type: actionTypes.SET_LOADING_USER,
  loading,
});
export const Company_Signup = (user, formik) => async (dispatch) => {
  try {
    dispatch(set_loading(true));

    const res = await axios.post(`/company/register-company`, {
      ...user,
    });
    let message = res.data.message;
    dispatch({
      type: companyConstants.COMPANY_REGISTER_SUCCESS,
      payload: { message, loading: false },
    });

    try {
      dispatch(set_loading(true));

      const res = await axios.post(`/auth/email-verfication`, {
        email: user.contactPerson.email,
      });
      dispatch({
        type: companyConstants.COMPANY_EMAIL_SENT_SUCCESS,
        payload: { message: res.data.message, loading: false },
      });
      dispatch(
        Notistack.enqueueSnackbar(
          Notistack.snackBar(res.data.message, "success")
        )
      );
      formik.setSubmitting(false);
      formik.handleReset();
    } catch (error) {
      dispatch(set_loading(false));

      dispatch({
        type: studentConstants.STUDENT_EMAIL_SENT_FAILURE,
        payload: { message: error.response.data.message },
      });
      dispatch(
        Notistack.enqueueSnackbar(
          Notistack.snackBar(error.response.data.message, "error")
        )
      );
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
