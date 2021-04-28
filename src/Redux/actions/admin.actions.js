
import axios from "../../helpers/axios";
import * as Notistack from "./notistack";
import { token, user } from "../../urlConfig";
import {adminConstants} from "./constants";
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
          payload: { loading: false,users:res.data.listOfUsers },
        });
        dispatch(
          Notistack.enqueueSnackbar(
            Notistack.snackBar("User List" , "success")
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