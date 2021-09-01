import * as Yup from "yup";
import Texts from "../../../Globals/Texts";

export const ADD_SKILL_YUP = Yup.object({
  skillField: Yup.string().required(Texts.REQUIRED),
  skillType: Yup.string().required(Texts.REQUIRED),
});

export const ADD_CONSULTANT_YUP = Yup.object({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required(Texts.REQUIRED),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required(Texts.REQUIRED),
  status: Yup.string().required(Texts.REQUIRED),

  email: Yup.string().email("Invalid email").required(Texts.REQUIRED),
  phone: Yup.string()
    .min(10, "Phone is not valid")
    .required(Texts.REQUIRED),
  password: Yup.string()
    .min(6, "Too Short!")
    .required(Texts.REQUIRED),
  confirm_password: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    ),
  }),
  city: Yup.string().required(Texts.REQUIRED),
  street: Yup.string().required(Texts.REQUIRED),
  zip: Yup.string().min(4, "Too Short!").required(Texts.REQUIRED),
});
