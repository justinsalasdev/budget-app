import Date from "../Date/Date";
import Option from "../Option/Option";
import useBudget from "./useBugdet";

export default function BudgetForm() {
  const { handleSubmit, register } = useBudget();
  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm bg-green-400 grid max-w-lg p-6 gap-2"
    >
      <input
        className="rounded-sm px-2 py-1"
        {...register("name")}
        placeholder="Name"
      />
      <input
        className="rounded-sm px-2 py-1"
        {...register("amount")}
        placeholder="Amount"
      />

      <div className="flex gap-2">
        <Option id="option1" value="weekly" name="frequency" />
        <Option id="option2" value="monthly" name="frequency" />
        <Option id="option3" value="annual" name="frequency" />
      </div>

      <label htmlFor="start">Start</label>
      <Date id="start" placeHolder="now" />

      <button
        className="bg-yellow-400 py-1 uppercase text-gray-100"
        type="submit"
      >
        Save
      </button>
    </form>
  );
}
