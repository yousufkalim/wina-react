import {
  actionTypes,
  studentConstants,
  companyConstants,
  actionGlobals,
} from "./constants";
import { token, user, baseUrl } from "../../urlConfig";

import axios from "../../helpers/axios";
import * as Notistack from "./notistack";
export const set_loading = (loading) => ({
  type: actionTypes.SET_LOADING_USER,
  loading,
});
export const set_loading_data = (loading) => ({
  type: actionGlobals.SET_DATA_LOADING,
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

// jobs

export const Create_Job = (user) => async (dispatch) => {
  if (user && token) {
    try {
      dispatch(set_loading(true));

      let res = await axios({
        method: "post",
        url: `${baseUrl}/job/create-job`,
        data: user,
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      dispatch({
        type: companyConstants.COMPANY_CREATE_JOB_SUCCESS,
        payload: { loading: false, message: res.data.message },
      });
      dispatch(
        Notistack.enqueueSnackbar(
          Notistack.snackBar(res.data.message, "success")
        )
      );
    } catch (error) {
      console.log(error.message);
      dispatch(set_loading(false));
      if (error.response) {
        dispatch(
          Notistack.enqueueSnackbar(
            Notistack.snackBar(error.response.data.message, "error")
          )
        );
      }
    }
  }
};
// edit job

export const Edit_Job = (user, id) => async (dispatch) => {
  if (user && token) {
    try {
      dispatch(set_loading(true));

      let res = await axios({
        method: "put",
        url: `${baseUrl}/job/edit-job/${id}`,
        data: user,
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      dispatch({
        type: companyConstants.COMPANY_EDIT_JOB_SUCCESS,
        payload: { loading: false, message: res.data.message },
      });
      dispatch(
        Notistack.enqueueSnackbar(
          Notistack.snackBar(res.data.message, "success")
        )
      );
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
  }
};

// search students
export const Search_Students = (id) => async (dispatch) => {
  if (user && token) {
    try {
      dispatch(set_loading_data(true));

      const res = await axios.post(`company/search-students/${id}`, {});
      dispatch({
        type: companyConstants.GET_STUDENT_BY_SEARCH,
        payload: { loading: false, studentBySearch: res.data.students },
      });
    } catch (error) {
      dispatch(set_loading_data(false));
      // dispatch(
      //   Notistack.enqueueSnackbar(
      //     Notistack.snackBar(error.response.data.message, "error")
      //   )
      // );
    }
  }
};

//GET STUDENT APPLIED JOBS for company

export const Get_Applied_Jobs = () => async (dispatch) => {
  if (user && token) {
    try {
      dispatch(set_loading_data(true));

      const res = await axios.get(`job/GetStudentAppliedJobs`);
      dispatch({
        type: companyConstants.GET_APPLIED_JOBS,
        payload: { loading: false, appliedJobs: res.data.jobs },
      });
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

//offer decision by company
export const Offer_Decion_By_Company = (
  id,
  offerID,
  decision,
  setKey,
  key
) => async (dispatch) => {
  if (user && token) {
    try {
      dispatch(set_loading_data(true));

      const res = await axios.post(`job/offer-decision-by-company/${id}`, {
        status: decision,
        offerID: offerID,
      });
      dispatch({
        type: companyConstants.OFFER_DECISION_SUCCESS,
        payload: { loading: false },
      });
      dispatch(
        Notistack.enqueueSnackbar(
          Notistack.snackBar(res.data.message, "success")
        )
      );
      setKey(key);
    } catch (error) {
      dispatch(set_loading_data(false));
      if (error.response) {
        dispatch(
          Notistack.enqueueSnackbar(
            Notistack.snackBar(error.response.data.message, "error")
          )
        );
      }
    }
  }
};
//offer decision by company
export const RecievedOffer_Decion_By_Company = (
  id,
  decision,
  setKey,
  key
) => async (dispatch) => {
  if (user && token) {
    try {
      dispatch(set_loading_data(true));

      const res = await axios.post(
        `job/OffersRecievedDecisionByCompany/${id}`,
        {
          status: decision,
        }
      );
      dispatch({
        type: companyConstants.RECIEVED_OFFER_DECISION_SUCCESS,
        payload: { loading: false },
      });
      dispatch(
        Notistack.enqueueSnackbar(
          Notistack.snackBar(res.data.message, "success")
        )
      );
      setKey(key);
    } catch (error) {
      dispatch(set_loading_data(false));
      if (error.response) {
        dispatch(
          Notistack.enqueueSnackbar(
            Notistack.snackBar(error.response.data.message, "error")
          )
        );
      }
    }
  }
};
