import { useFormContext } from "react-hook-form";
import { _Budget } from "../budgetSchema";

export default function Date() {
  const { register } = useFormContext<_Budget>();

  return (
    <div className="flex flex-col mt-2">
      <label className="pl-1 text-gray-600 uppercase text-sm mb-1">
        Starts
      </label>
      <input
        className="rounded-sm px-2 py-1 w-full text-gray-400"
        type="date"
        {...register("start")}
      />
    </div>
  );
}
