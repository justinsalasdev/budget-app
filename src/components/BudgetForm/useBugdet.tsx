import { SubmitHandler, useFormContext } from "react-hook-form";
import { _Bugdet } from "../budgetSchema";

export default function useBudget() {
  const { register, handleSubmit, reset, formState } = useFormContext();
  const { isSubmitting, errors } = formState;

  console.log(errors, isSubmitting);
  const onSubmit: SubmitHandler<_Bugdet> = async (data) => {};

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
  };
}
