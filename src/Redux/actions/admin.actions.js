import axios from "../../helpers/axios";
import * as Notistack from "./notistack";
import { token, user, baseUrl } from "../../urlConfig";
import { adminConstants } from "./constants";
export const set_loading = (loading) => ({
  type: adminConstants.SET_LOADING,
  loading,
});
export const set_loading_data = (loading) => ({
  type: adminConstants.SET_DATA_LOADING,
  loading,
});

export const getUser = () => async (dispatch) => {
  try {
    dispatch(set_loading(true));
    const res = await axios.get(`admin/user-list`);
    dispatch({
      type: adminConstants.GET_ALL_USERS,
      payload: { loading: false, users: res.data.listOfUsers },
    });
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
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch(set_loading(true));
    const res = await axios.put(`admin/delete-profile/${id}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    dispatch({
      type: adminConstants.DELETE_USER,
    });
    dispatch(
      Notistack.enqueueSnackbar(
        Notistack.snackBar("DELETED SUCCESSFULLY", "success")
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
};

// skills

export const listOfSkills = () => async (dispatch) => {
  try {
    dispatch(set_loading(true));
    const res = await axios.get(`admin/skill-list`);
    dispatch({
      type: adminConstants.GET_ALL_SKILLS,
      payload: { loading: false, skills: res.data.listOfSkills },
    });
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
};

export const deleteSkills = (id) => async (dispatch) => {
  try {
    dispatch(set_loading(true));
    const res = await axios.put(`admin/delete-skill/${id}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    dispatch({
      type: adminConstants.DELETE_SKILLS,
    });
    dispatch(
      Notistack.enqueueSnackbar(
        Notistack.snackBar("Deleted Successfully", "success")
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
};

export const Create_skills = (data) => async (dispatch) => {
  try {
    dispatch(set_loading(true));

    let res = await axios({
      method: "post",
      url: `${baseUrl}/admin/create-skill`,
      data: data,
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    dispatch({
      type: adminConstants.CREATE_SKILLS,
      payload: { loading: false, message: res.data.message },
    });
    dispatch(
      Notistack.enqueueSnackbar(Notistack.snackBar(res.data.message, "success"))
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
};

export const Edit_skills = (_id, data) => async (dispatch) => {
  try {
    dispatch(set_loading(true));

    let res = await axios({
      method: "put",
      url: `${baseUrl}/admin/edit-skill/${_id}`,
      data: data,
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    dispatch(
      Notistack.enqueueSnackbar(
        Notistack.snackBar("Edit Successfully", "success")
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
};
