import { collection, addDoc } from "firebase/firestore";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { db } from "../../firebase/firebase";
import { budgetConverter } from "../budgetConverter";
import { _Budget } from "../budgetSchema";

export default function useBudgetForm() {
  const { register, handleSubmit, reset, formState } = useFormContext();
  const { isSubmitting, errors } = formState;

  console.log(errors, isSubmitting);
  const onSubmit: SubmitHandler<_Budget> = async (data) => {
    try {
      const _ref = collection(db, "budget").withConverter(budgetConverter);
      const docRef = await addDoc(_ref, data);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log(error);
    } finally {
      reset();
    }
  };

  return {
    isLoading: isSubmitting,
    register,
    handleSubmit: handleSubmit(onSubmit),
  };
}
