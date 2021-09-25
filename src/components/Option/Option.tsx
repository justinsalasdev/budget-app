import { useFormContext } from "react-hook-form";
import { BudgetType, Freq } from "../budgetSchema";

interface Props {
  id: string;
  name: string;
  value: Freq | BudgetType;
}

export default function Option(props: Props) {
  const { register } = useFormContext();
  return (
    <div className="flex items-center p-2 bg-red-300 rounded-sm">
      <input
        className="mr-1"
        {...register(`${props.name}`)}
        id={props.id}
        type="radio"
        value={props.value}
      />
      <label htmlFor={props.id}>{props.value.toUpperCase()}</label>
    </div>
  );
}
