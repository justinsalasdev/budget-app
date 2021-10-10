import { useFormContext } from "react-hook-form";
import { BudgetType, Freq, _Budget } from "../budgetSchema";

interface Props<T> {
  id: string;
  name: T extends Freq ? "frequency" : "type";
  value: Freq | BudgetType;
}

export default function Option<T>(props: Props<T>) {
  const { register, watch } = useFormContext<_Budget>();

  const freq = watch("frequency");
  const freqStyle = freq === props.value ? "bg-blue-200" : "";

  const type = watch("type");
  const typeStyle = type === props.value ? "bg-green-200" : "";

  return (
    <div
      className={`bg-gray-100 ${typeStyle} ${freqStyle} shadow-sm rounded-sm flex items-center px-2 py-1`}
    >
      <input
        className="mr-1 w-0 h-0"
        {...register(`${props.name}`)}
        id={props.id}
        type="radio"
        value={props.value}
      />
      <label className="text-xs rounded-sm" htmlFor={props.id}>
        {props.value.toUpperCase()}
      </label>
    </div>
  );
}
