import { useFormContext } from "react-hook-form";
import { Freq } from "../budgetSchema";

interface Option {
  id: string;
  name: string;
  value: Freq;
}

export default function Option(props: Option) {
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