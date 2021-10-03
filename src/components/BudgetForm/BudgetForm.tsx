import Colors from "../Colors/Colors";
import Date from "../Date/Date";
import Option from "../Option/Option";
import useBudgetForm from "./useBugdetForm";

export default function BudgetForm() {
  const { handleSubmit, register, isLoading } = useBudgetForm();
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="rounded-sm bg-green-400 grid max-w-lg p-6 gap-2"
    >
      <div className="flex gap-2">
        <Option id="type1" value="income" name="type" />
        <Option id="type2" value="expense" name="type" />
      </div>
      <input
        autoComplete="off"
        className="rounded-sm px-2 py-1"
        {...register("name")}
        placeholder="Name"
      />
      <input
        autoComplete="off"
        className="rounded-sm px-2 py-1"
        {...register("amount")}
        placeholder="Amount"
      />
      <div className="flex gap-2">
        <Option id="freq1" value="weekly" name="frequency" />
        <Option id="freq2" value="monthly" name="frequency" />
        <Option id="freq3" value="annual" name="frequency" />
      </div>
      <Date />
      <Colors />
      <button
        disabled={isLoading}
        className="bg-yellow-400 py-1 uppercase text-gray-100"
        type="submit"
      >
        Save
      </button>
    </form>
  );
}
