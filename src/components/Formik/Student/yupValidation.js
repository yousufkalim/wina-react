import * as Yup from "yup";
import Texts from "../../../Globals/Texts";

export const SIGNUP_YUP = Yup.object().shape({
  firstName: Yup.string().required(Texts.REQUIRED),
  lastName: Yup.string().required(Texts.REQUIRED),
  email: Yup.string().email("Invalid email address").required(Texts.REQUIRED),
  phone: Yup.string()
    .min(10, "Doit comporter 10 caractères")
    .max(10, "Doit comporter 10 caractères")
    .required(Texts.REQUIRED),
  address: Yup.object()
    .shape({
      street: Yup.string().required(Texts.REQUIRED),
      city: Yup.string().required(
        Texts.PLEASE_SELECT_YOUR_COMPLETE_ADDRESS_FROM_LIST
      ),
      zip: Yup.string().required(Texts.REQUIRED),
      latitude: Yup.string().required(Texts.REQUIRED),
      longitude: Yup.string().required(Texts.REQUIRED),
    })
    .required(Texts.REQUIRED),
  password: Yup.string()
    .min(6, "Must be 6 characters long")
    .max(255)
    .required(Texts.REQUIRED),
  confirm_password: Yup.string()
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Les deux mots de passe doivent être identiques"
      ),
    })
    .min(6, "Doit comporter 10 caractères")
    .max(255)
    .required(Texts.REQUIRED),
});
export const LOGIN_YUP = Yup.object({
  email: Yup.string().email("Invalid email address").required(Texts.REQUIRED),
  password: Yup.string().max(255).required(Texts.REQUIRED),
});
export const SCOOL_YUP = Yup.object({
  school: Yup.string().required(Texts.REQUIRED),
  start_Date: Yup.date().required(Texts.REQUIRED),
  // end_Date: Yup.string().required(Texts.REQUIRED),
  end_Date: Yup.date()
    .min(
      Yup.ref("start_Date"),
      "La date de fin ne peut pas être antérieure à la date de début"
    )

    .required(Texts.REQUIRED),
  description: Yup.string().required(Texts.REQUIRED),
  image: Yup.string().required(Texts.REQUIRED),
});
export const GENERAL_INFO_YUP = Yup.object({
  general_Presentation: Yup.string(),
});
export const SOFT_SKILLS_YUP = Yup.object({
  name: Yup.string().required(Texts.REQUIRED),
});
export const LANGUAGE_YUP = Yup.object({
  name: Yup.string().required(Texts.REQUIRED),
  skill: Yup.string().required(Texts.REQUIRED),
});
export const HARD_SKILLS_YUP = Yup.object({
  name: Yup.string().required(Texts.REQUIRED),
});
export const PROFESSIONAL_PROFILE_YUP = Yup.object({
  position: Yup.string().required(Texts.REQUIRED),
  company: Yup.string().required(Texts.REQUIRED),
  type: Yup.string().required(Texts.REQUIRED),
  place: Yup.string().required(Texts.REQUIRED),
  start_date: Yup.date().required(Texts.REQUIRED),
  end_date: Yup.date()
    .min(
      Yup.ref("start_date"),
      "La date de fin ne peut pas être antérieure à la date de début"
    )
    .required(Texts.REQUIRED),
  description: Yup.string().required(Texts.REQUIRED),
  image: Yup.string(),
});
export const POSITION_SOUGHT_YUP = Yup.object({
  domain: Yup.string().required(Texts.REQUIRED),
  dateOfBirth: Yup.string().required(Texts.REQUIRED),
  position: Yup.string().required(Texts.REQUIRED),
  duration: Yup.string().required(Texts.REQUIRED),
  startDate: Yup.string().required(Texts.REQUIRED),
  alternationRhythm: Yup.string().required(Texts.REQUIRED),
  levelOfEducation: Yup.string().required(Texts.REQUIRED),
});

// forgot password

export const FORGOT_PASSWORD_YUP = Yup.object({
  email: Yup.string().email("Adresse e-mail invalide").required(Texts.REQUIRED),
});
export const VERIFY_YUP = Yup.object({
  token: Yup.string().required(Texts.REQUIRED),
});
// rESET password

export const RESET_PASSWORD_YUP = Yup.object({
  password: Yup.string().required(Texts.REQUIRED),
  confirm: Yup.string().required(Texts.REQUIRED),
});
