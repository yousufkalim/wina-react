import * as Yup from "yup";
const address_object = Yup.object({
  street: Yup.string().required(),
  city: Yup.string().required(),
  zip: Yup.string().required(),
  latitude: Yup.number().required(),
  longitude: Yup.number().required(),
});
export const SIGNUP_YUP = Yup.object().shape({
  name: Yup.string().required("Required"),
  type: Yup.string().required("Required"),
  address: Yup.object()
    .shape({
      street: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      zip: Yup.string().required("Required"),
      latitude: Yup.string().required("Required"),
      longitude: Yup.string().required("Required"),
    })
    .required("Required"),
  siretNumber: Yup.string()
    .max(20, "siretNumber must be less than or equal to 20 characters")
    .required("Required"),
});
export const LOGIN_YUP = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().max(255).required("Required"),
});
