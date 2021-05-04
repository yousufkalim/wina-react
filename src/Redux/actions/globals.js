import { actionGlobals } from "./constants"
import Axios from "axios"
import axios from "../../helpers/axios"
import { token, user } from "../../urlConfig"

export const set_loading = (loading) => ({
  type: actionGlobals.SET_ADDRESS_LOADING,
  loading,
})
export const set_skill_loading = (loading) => ({
  type: actionGlobals.GET_SKILLS_LOADING,
  loading,
})

export const getApiAdress = (value) => async (dispatch) => {
  dispatch(set_loading(true))

  try {
    const res = await Axios.get(
      "https://api-adresse.data.gouv.fr/search/?q=" +
        value +
        "&type=housenumber&autocomplete=1&limit=15"
    )
    dispatch({
      type: actionGlobals.ADDRESS_TO_SUCCESS,
      items: res.data.features,
    })
    dispatch(set_loading(false))
  } catch (error) {
    dispatch(set_loading(false))

    // dispatch(Notistack.enqueueSnackbar(Notistack.snackBar(error, "error")));
  }
}
export const getSkills = (type) => async (dispatch) => {
  dispatch(set_skill_loading(true))

  try {
    const res = await axios.post(`student/get_skills`, {
      type: type,
    })
    if (type === "Soft Skill") {
      dispatch({
        type: actionGlobals.GET_SOFT_SKILLS_SUCCESS,
        skills: res.data.skills,
        loading: false,
      })
    } else if (type === "Hard Skill") {
      dispatch({
        type: actionGlobals.GET_HARD_SKILLS_SUCCESS,
        skills: res.data.skills,
        loading: false,
      })
    }
    dispatch(set_skill_loading(false))
  } catch (error) {
    dispatch(set_skill_loading(false))

    // dispatch(Notistack.enqueueSnackbar(Notistack.snackBar(error, "error")));
  }
}
