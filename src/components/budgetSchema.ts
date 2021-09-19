import * as yup from "yup";
export const budgetSchema = yup.object().shape({
  name: yup.string().required("name is required"),
  amount: yup
    .number()
    .required("amount is required")
    .typeError("amount must be a number")
    .positive("amount can't be negative"),
  start: yup.string(),
  end: yup.string(),
});
