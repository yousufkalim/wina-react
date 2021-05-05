import * as Yup from "yup";

export const ADD_SKILL_YUP = Yup.object({
  skillField: Yup.string().required("Required"),
  skillType: Yup.string().required("Required"),
});
