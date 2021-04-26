import {
  authConstants,
  actionTypes,
  studentConstants,
  actionGlobals,
  companyConstants,
} from "./constants";
import { baseUrl } from "../../urlConfig";

import axios from "../../helpers/axios";
import * as Notistack from "./notistack";
import { token, user } from "../../urlConfig";
export const set_loading = (loading) => ({
  type: actionTypes.SET_LOADING,
  loading,
});
export const set_loading_data = (loading) => ({
  type: actionGlobals.SET_DATA_LOADING,
  loading,
});

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

// single job

export const Get_Job = (id) => async (dispatch) => {
  if (user && token) {
    try {
      dispatch(set_loading_data(true));

      const res = await axios.get(`job/get-job/${id}`);
      dispatch({
        type: studentConstants.GET_STUDENT_JOB,
        payload: { loading: false, job: res.data.job },
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
      dispatch(
        Notistack.enqueueSnackbar(
          Notistack.snackBar(error.response.data.message, "error")
        )
      );
    }
  }
};

//offer decision by students
export const Offer_Decion_By_Students = (id, decision, setKey, key) => async (
  dispatch
) => {
  if (user && token) {
    try {
      dispatch(set_loading_data(true));

      const res = await axios.post(`job/offer-decision-by-student/${id}`, {
        status: decision,
      });
      dispatch({
        type: studentConstants.OFFER_DECISION_SUCCESS,
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
export const Offer_Decion_By_Company = (id, decision) => async (dispatch) => {
  if (user && token) {
    try {
      dispatch(set_loading_data(true));

      const res = await axios.post(`job/offer-decision-by-company/${id}`, {
        offer_status: decision,
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
