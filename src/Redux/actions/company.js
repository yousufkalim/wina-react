import {
  actionTypes,
  studentConstants,
  companyConstants,
  actionGlobals,
} from "./constants";
import { token, user, baseUrl } from "../../urlConfig";

import axios from "../../helpers/axios";
import * as Notistack from "./notistack";
export const set_loading_company = (loading) => ({
  type: actionTypes.SET_LOADING_COMPANY,
  loading,
});
export const set_loading_data_compnay = (loading) => ({
  type: actionGlobals.SET_DATA_LOADING,
  loading,
});
export const Company_Signup = (user) => async (dispatch) => {
  try {
    const res = await axios.post(`/company/register-company`, {
      ...user,
    });
    let message = res.data.message;
    dispatch({
      type: companyConstants.COMPANY_REGISTER_SUCCESS,
      payload: { message, loading: false },
    });

    try {
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
    } catch (error) {
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
    return true;
  } catch (error) {
    dispatch(
      Notistack.enqueueSnackbar(
        Notistack.snackBar(error.response.data.message, "error")
      )
    );
    return false;
  }
};

// jobs

export const Create_Job = (user) => async (dispatch) => {
  try {
    dispatch(set_loading_company(true));

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
      Notistack.enqueueSnackbar(Notistack.snackBar(res.data.message, "success"))
    );
    return true;
  } catch (error) {
    dispatch(set_loading_company(false));
    if (error.response) {
      dispatch(
        Notistack.enqueueSnackbar(
          Notistack.snackBar(error.response.data.message, "error")
        )
      );
    }
    return false;
  }
};
// edit job

export const Edit_Job = (user, id) => async (dispatch) => {
  if (user && token) {
    try {
      dispatch(set_loading_company(true));

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
      dispatch(set_loading_company(false));
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
      dispatch(set_loading_data_compnay(true));

      const res = await axios.post(`company/search-students/${id}`, {});
      dispatch({
        type: companyConstants.GET_STUDENT_BY_SEARCH,
        payload: { loading: false, studentBySearch: res.data.students },
      });
    } catch (error) {
      dispatch(set_loading_data_compnay(false));
      // dispatch(
      //   Notistack.enqueueSnackbar(
      //     Notistack.snackBar(error.response.data.message, "error")
      //   )
      // );
    }
  }
};

//GET STUDENT APPLIED JOBS for company

export const Get_Applied_Jobs = (id) => async (dispatch) => {
  try {
    dispatch(set_loading_data_compnay(true));

    const res = await axios.get(`job/GetAllStudentAppliedJobs/${id}`);
    dispatch({
      type: companyConstants.GET_APPLIED_JOBS,
      payload: { loading: false, student_appliedJobs: res.data.jobs },
    });
  } catch (error) {
    dispatch(set_loading_data_compnay(false));
    // if (error.response) {
    //   dispatch(
    //     Notistack.enqueueSnackbar(
    //       Notistack.snackBar(error.response.data.message, "error")
    //     )
    //   );
    // }
  }
};
export const Get_Company_Applied_Jobs = (id) => async (dispatch) => {
  try {
    dispatch(set_loading_data_compnay(true));

    const res = await axios.get(`job/GetAllCompanyAppliedJobs/${id}`);
    dispatch({
      type: companyConstants.GET_COMPANY_APPLIED_JOBS,
      payload: { loading: false, company_appliedJobs: res.data.jobs },
    });
  } catch (error) {
    dispatch(set_loading_data_compnay(false));
    // if (error.response) {
    //   dispatch(
    //     Notistack.enqueueSnackbar(
    //       Notistack.snackBar(error.response.data.message, "error")
    //     )
    //   );
    // }
  }
};
//offer decision by company
export const Offer_Decion_By_Company =
  (
    id,
    offerID,
    decision,
    setKey,
    key,
    setisDetail,
    setstudentDetail,
    handleBooking
  ) =>
  async (dispatch) => {
    if (user && token) {
      try {
        dispatch(set_loading_data_compnay(true));

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
        setstudentDetail(false);
        setisDetail(false);
        handleBooking(id);
      } catch (error) {
        dispatch(set_loading_data_compnay(false));
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
export const RecievedOffer_Decion_By_Company =
  (
    id,
    RecievofferID,
    decision,
    setKey,
    key,
    setstudentDetail,
    setMatchReceiveDetail,
    handleBooking
  ) =>
  async (dispatch) => {
    if (user && token) {
      try {
        dispatch(set_loading_data_compnay(true));

        const res = await axios.post(
          `job/OffersRecievedDecisionByCompany/${id}`,
          {
            status: decision,
            id: RecievofferID,
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
        handleBooking(id);
        setstudentDetail(false);
        setMatchReceiveDetail(false);
      } catch (error) {
        dispatch(set_loading_data_compnay(false));
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
//cancel offer decision by company
export const Cancel_Offer_Decion_By_Company =
  (
    id,
    offerID,
    setKey,
    key,
    setstudentDetail,
    setMatchReceiveDetail,
    setisDetail
  ) =>
  async (dispatch) => {
    if (user && token) {
      try {
        dispatch(set_loading_data_compnay(true));

        const res = await axios.post(`job/CancelOfferDecisionByCompany/${id}`, {
          id: offerID,
        });
        dispatch({
          type: companyConstants.CANCEL_OFFER_DECISION_SUCCESS,
          payload: { loading: false },
        });
        dispatch(
          Notistack.enqueueSnackbar(
            Notistack.snackBar(res.data.message, "success")
          )
        );
        setKey(key);
        setstudentDetail(false);
        setisDetail(false);
        setMatchReceiveDetail(false);
      } catch (error) {
        dispatch(set_loading_data_compnay(false));
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

export const Booking_Decion_By_Company =
  (value, id, jobID) => async (dispatch) => {
    if (user && token) {
      try {
        dispatch(set_loading_data_compnay(true));

        const res = await axios.post(
          `company/book-coaching-appointment/${id}`,
          {
            time: value,
            id: jobID,
          }
        );
        dispatch({
          type: companyConstants.BOOKING_DECISION_SUCCESS,
          payload: { loading: false },
        });
        dispatch(
          Notistack.enqueueSnackbar(
            Notistack.snackBar(res.data.message, "success")
          )
        );
        // setBooking(false);
      } catch (error) {
        dispatch(set_loading_data_compnay(false));
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
