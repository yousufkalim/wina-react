import {
  actionTypes,
  studentConstants,
  companyConstants,
  actionGlobals,
} from "./constants";
import axios from "../../helpers/axios";
import * as Notistack from "./notistack";
import { token, baseUrl, user } from "../../urlConfig";
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

export const set_loading_data = (loading) => ({
  type: actionGlobals.SET_DATA_LOADING,
  loading,
});

export const Student_Signup = (user) => async (dispatch) => {
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

      dispatch(set_loading(false));
    } catch (error) {
      dispatch(set_loading(false));

      dispatch({
        type: studentConstants.STUDENT_EMAIL_SENT_FAILURE,
        payload: { message: error.response.data.message },
      });
    }
    return true;
  } catch (error) {
    dispatch(set_loading(false));
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
// domian list
export const domainList = async () => {
  try {
    return await axios.get(`/admin/domain-list`);
  } catch (err) {
    console.log(err.response);
  }
};
export const Add_info_Student = (user) => async (dispatch) => {
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
    return true;
  } catch (error) {
    // console.log(error, "error from school");
    dispatch(set_loading_school(false));
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
    if (error.response) {
      dispatch(
        Notistack.enqueueSnackbar(
          Notistack.snackBar(error.response.data.message, "error")
        )
      );
    }
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
    if (error.response) {
      dispatch(
        Notistack.enqueueSnackbar(
          Notistack.snackBar(error.response.data.message, "error")
        )
      );
    }
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
    if (error.response) {
      dispatch(
        Notistack.enqueueSnackbar(
          Notistack.snackBar(error.response.data.message, "error")
        )
      );
    }
  }
};

// jobs

// single job

export const Get_Job = (id) => async (dispatch) => {
  try {
    dispatch(set_loading_data(true));

    const res = await axios.get(`job/get-job/${id}`);
    dispatch({
      type: studentConstants.GET_STUDENT_JOB,
      payload: { loading: false, job: res.data.job },
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
//GET STUDENT APPLIED JOBS

export const GetCompanyAppliedJobs = () => async (dispatch) => {
  if (user && token) {
    try {
      dispatch(set_loading_data(true));

      const res = await axios.get(`job/GetCompanyAppliedJobs`);
      dispatch({
        type: studentConstants.GET_COMPANY_APPLIED_JOBS,
        payload: { loading: false, company_appliedJobs: res.data.jobs },
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
//GET STUDENT APPLIED JOBS Validated by company success

export const GetStudentAppliedSuccessJobs = () => async (dispatch) => {
  if (user && token) {
    try {
      dispatch(set_loading_data(true));

      const res = await axios.get(`job/GetStudentAppliedSuccessJobs`);
      dispatch({
        type: studentConstants.OFFER_ACCEPTED_SUCCESS,
        payload: { loading: false, student_Jobs: res.data.jobs },
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

//GET STUDENT APPLIED JOBS

export const Get_Student_Applied_Jobs = () => async (dispatch) => {
  if (user && token) {
    try {
      dispatch(set_loading_data(true));

      const res = await axios.get(`job/GetStudentAppliedJobs`);
      dispatch({
        type: studentConstants.GET_STUDENT_APPLIED_JOBS,
        payload: { loading: false, appliedJobs: res.data.jobs },
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
//GET STUDENT REJECTED JOBS

export const Get_Student_Rejected_Jobs = () => async (dispatch) => {
  if (user && token) {
    try {
      dispatch(set_loading_data(true));

      const res = await axios.get(`job/GetStudentRejectedJobs`);
      dispatch({
        type: studentConstants.GET_STUDENT_REJECTED_JOBS,
        payload: { loading: false, rejectedJobs: res.data.jobs },
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

//offer decision by students
export const Offer_Decion_By_Students =
  (id, decision, setisDetail) => async (dispatch) => {
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
        setisDetail(id);
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

//offer decision by students
export const RecievedOffer_Decion_By_Students =
  (id, decision, setKey, key, handleBooking) => async (dispatch) => {
    if (user && token) {
      try {
        dispatch(set_loading_data(true));

        const res = await axios.post(
          `job/OffersRecievedDecisionByStudent/${id}`,
          {
            status: decision,
          }
        );
        dispatch({
          type: studentConstants.RECIEVDED_OFFER_DECISION_SUCCESS,
          payload: { loading: false },
        });
        dispatch(
          Notistack.enqueueSnackbar(
            Notistack.snackBar(res.data.message, "success")
          )
        );
        handleBooking();
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
//cancel offer decision by students
export const Cancel_Offer_Decion_By_Students =
  (id, setisDetail) => async (dispatch) => {
    try {
      dispatch(set_loading_data(true));

      const res = await axios.post(
        `job/CancelOfferDecisionByStudent/${id}`,
        {}
      );
      dispatch(
        Notistack.enqueueSnackbar(
          Notistack.snackBar(res.data.message, "success")
        )
      );
      setisDetail(false);
      dispatch({
        type: studentConstants.CANCEL_OFFER_DECISION_SUCCESS,
        payload: { loading: false },
      });
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
  };

//validate time decision by students
export const validateAppointment_By_Students =
  (decision, jobID, setBooking) => async (dispatch) => {
    if (user && token) {
      try {
        dispatch(set_loading_data(true));

        const res = await axios.post(`student/validateAppointment/${jobID}`, {
          status: decision,
        });
        dispatch({
          type: studentConstants.VALIDATE_APPOINTMENT_SUCCESS,
          payload: { loading: false },
        });
        dispatch(
          Notistack.enqueueSnackbar(
            Notistack.snackBar(res.data.message, "success")
          )
        );
        setBooking(false);
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
