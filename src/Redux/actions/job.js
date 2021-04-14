import {
  authConstants,
  actionTypes,
  studentConstants,
  actionGlobals,
} from "./constants";
import axios from "../../helpers/axios";
import * as Notistack from "./notistack";
import { token, user } from "../../urlConfig";

export const set_loading_data = (loading) => ({
  type: actionGlobals.SET_DATA_LOADING,
  loading,
});
export const Get_Student_Jobs = () => async (dispatch) => {
  if (user && token) {
    try {
      dispatch(set_loading_data(true));

      const res = await axios.post(`student/search-job`, {});
      dispatch({
        type: studentConstants.GET_STUDENT_JOBS,
        payload: { loading: false, jobs: res.data.jobs },
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
// single jobs

export const Get_Student_Job = (id) => async (dispatch) => {
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
