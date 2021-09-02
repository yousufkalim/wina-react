import * as Yup from "yup"
import Texts from "../../../Globals/Texts";

const address_object = Yup.object({
  street: Yup.string().required(),
  city: Yup.string().required(),
  zip: Yup.string().required(),
  latitude: Yup.number().required(),
  longitude: Yup.number().required(),
})
export const SECOND_SIGNUP_YUP = Yup.object().shape({
  name: Yup.string().required("Required"),
  company_type: Yup.string().required(Texts.REQUIRED),
  siretNumber: Yup.string()
    .max(20, "siretNumber must be less than or equal to 20 characters")
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
})
export const FIRST_SIGNUP_YUP = Yup.object().shape({
  firstName: Yup.string().required(Texts.REQUIRED),
  lastName: Yup.string().required(Texts.REQUIRED),
  email: Yup.string().email("Invalid email address").required(Texts.REQUIRED),
  phone: Yup.string()
    .min(10, "Must be 10 characters long")
    .max(10, "Must be 10 characters long")
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
        "Both password need to be the same"
      ),
    })
    .min(6, "Must be 10 characters long")
    .max(255)
    .required(Texts.REQUIRED),
  positionHeld: Yup.string().required(Texts.REQUIRED),
})

export const LOGIN_YUP = Yup.object({
  email: Yup.string().email("Invalid email address").required(Texts.REQUIRED),
  password: Yup.string().max(255).required(Texts.REQUIRED),
})

// position sought

export const POSITION_SOUGHT_YUP = Yup.object({
  title: Yup.string().required(Texts.REQUIRED),
  domain: Yup.string().required(Texts.REQUIRED),
  description: Yup.string().required("Required"),

  position: Yup.string().required("Required"),
  duration: Yup.string().required("Required"),
  startDate: Yup.string().required("Required"),
  alternationRhythm: Yup.string().required("Required"),
  levelOfEducation: Yup.string().required("Required"),
  softSkills: Yup.string().required("Required"),
  hardSkills: Yup.string().required("Required"),
  ageRange: Yup.string().required("Required"),
  photo: Yup.string().required("Required"),
  location: Yup.object().shape({
    street: Yup.string().required("Required"),
    city: Yup.string().required(
      Texts.PLEASE_SELECT_YOUR_COMPLETE_ADDRESS_FROM_LIST
    ),
    zip: Yup.string().required("Required"),
    latitude: Yup.string().required("Required"),
    longitude: Yup.string().required("Required"),
  }),
})
