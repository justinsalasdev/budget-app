import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useHistory } from "react-router";
import { db } from "../../firebase/firebase";
import { budgetConverter } from "../budgetConverter";
import { _Budget } from "../budgetSchema";

export default function useBudgetForm(id?: string) {
  const { register, handleSubmit, formState } = useFormContext();
  const history = useHistory();
  const { isSubmitting, isDirty } = formState;

  const onSubmit: SubmitHandler<_Budget> = async (data) => {
    try {
      const _ref = collection(db, "budget").withConverter(budgetConverter);
      await addDoc(_ref, data);
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  const onEdit: SubmitHandler<_Budget> = async (data) => {
    try {
      const _ref = doc(db, "budget", id!).withConverter(budgetConverter);
      await updateDoc(_ref, data);
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    isDirty,
    isLoading: isSubmitting,
    register,
    handleSubmit: handleSubmit(id ? onEdit : onSubmit),
  };
}
