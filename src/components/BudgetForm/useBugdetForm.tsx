import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useHistory } from "react-router";
import { db } from "../../firebase/firebase";
import { budgetConverter } from "../budgetConverter";
import { _Budget } from "../budgetSchema";

export default function useBudgetForm(id?: string) {
  const { register, handleSubmit, formState } = useFormContext();
  const history = useHistory();
  const { isSubmitting, errors, isDirty } = formState;

  const onSubmit: SubmitHandler<_Budget> = async (data) => {
    console.log(errors, isSubmitting, id);
    try {
      const _ref = collection(db, "budget").withConverter(budgetConverter);
      const docRef = await addDoc(_ref, data);
      console.log("Document written with ID: ", docRef.id);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const onEdit: SubmitHandler<_Budget> = async (data) => {
    try {
      const _ref = doc(db, "budget", id!).withConverter(budgetConverter);
      await updateDoc(_ref, data);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isDirty,
    isLoading: isSubmitting,
    register,
    handleSubmit: handleSubmit(id ? onEdit : onSubmit),
  };
}
