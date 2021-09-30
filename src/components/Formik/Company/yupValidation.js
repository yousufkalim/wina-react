import * as Yup from "yup";
import Texts from "../../../Globals/Texts";

const address_object = Yup.object({
  street: Yup.string().required(),
  city: Yup.string().required(),
  zip: Yup.string().required(),
  latitude: Yup.number().required(),
  longitude: Yup.number().required(),
});
export const SECOND_SIGNUP_YUP = Yup.object().shape({
  name: Yup.string().required(Texts.REQUIRED),
  company_type: Yup.string().required(Texts.REQUIRED),
  siretNumber: Yup.string()
    .max(20, "siretNumber doit être inférieur ou égal à 20 caractères")
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
  // contactPerson
});
export const FIRST_SIGNUP_YUP = Yup.object().shape({
  firstName: Yup.string().required(Texts.REQUIRED),
  lastName: Yup.string().required(Texts.REQUIRED),
  email: Yup.string().email("Adresse e-mail invalide").required(Texts.REQUIRED),
  phone: Yup.string()
    .min(10, "Doit comporter 10 caractères")
    .max(10, "Doit comporter 10 caractères")
    .required(Texts.REQUIRED),

  password: Yup.string()
    .min(6, "Doit comporter 6 caractères")
    .max(255)
    .required(Texts.REQUIRED),
  confirm_password: Yup.string()
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    })
    .min(6, "Doit comporter 10 caractères")
    .max(255)
    .required(Texts.REQUIRED),
  positionHeld: Yup.string().required(Texts.REQUIRED),
});

export const LOGIN_YUP = Yup.object({
  email: Yup.string().email("Adresse e-mail invalide").required(Texts.REQUIRED),
  password: Yup.string().max(255).required(Texts.REQUIRED),
});

// position sought

export const POSITION_SOUGHT_YUP = Yup.object({
  title: Yup.string().required(Texts.REQUIRED),
  domain: Yup.string().required(Texts.REQUIRED),
  description: Yup.string().required(Texts.REQUIRED),

  position: Yup.string().required(Texts.REQUIRED),
  duration: Yup.string().required(Texts.REQUIRED),
  startDate: Yup.string().required(Texts.REQUIRED),
  alternationRhythm: Yup.string().required(Texts.REQUIRED),
  levelOfEducation: Yup.string().required(Texts.REQUIRED),
  softSkills: Yup.string().required(Texts.REQUIRED),
  hardSkills: Yup.string().required(Texts.REQUIRED),
  ageRange: Yup.string().required(Texts.REQUIRED),
  photo: Yup.string().required(Texts.REQUIRED),
  location: Yup.object().shape({
    street: Yup.string().required(Texts.REQUIRED),
    city: Yup.string().required(
      Texts.PLEASE_SELECT_YOUR_COMPLETE_ADDRESS_FROM_LIST
    ),
    zip: Yup.string().required(Texts.REQUIRED),
    latitude: Yup.string().required(Texts.REQUIRED),
    longitude: Yup.string().required(Texts.REQUIRED),
  }),
});
