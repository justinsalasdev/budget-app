import { useFormContext } from "react-hook-form";
type Props = { color: string };
export default function Color(props: Props) {
  const { register } = useFormContext();
  return (
    <label
      htmlFor={props.color}
      className={`${props.color} grid place-items-center w-9 h-9 rounded-full shadow-md focus-within:ring-4 focus-within:ring-blue-200`}
    >
      <input
        className="rounded-full"
        {...register(`color`)}
        type="radio"
        value={props.color}
        name="color"
        id={props.color}
      />
    </label>
  );
}
