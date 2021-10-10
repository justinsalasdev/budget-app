import { Link } from "react-router-dom";
import { BudgetType, Freq } from "../budgetSchema";
import Colors from "../Colors/Colors";
import Date from "../Date/Date";
import Option from "../Option/Option";
import useBudgetForm from "./useBugdetForm";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

export default function BudgetForm() {
  const { handleSubmit, register, isLoading } = useBudgetForm();

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="rounded-sm bg-gray-50 grid content-start max-w-lg p-6 gap-3 mb-auto"
    >
      <div className="grid grid-cols-1aa gap-2 mb-2">
        <Link
          className="mr-auto rounded-sm shadow-sm bg-purple-200 flex items-center px-2"
          to="/"
        >
          <MdOutlineKeyboardBackspace className="text-lg" />
        </Link>
        <Option<BudgetType> id="type1" value="income" name="type" />
        <Option<BudgetType> id="type2" value="expense" name="type" />
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

      <div className="flex gap-2 mt-1">
        <Option<Freq> id="freq1" value="weekly" name="frequency" />
        <Option<Freq> id="freq2" value="monthly" name="frequency" />
        <Option<Freq> id="freq3" value="annual" name="frequency" />
      </div>
      <Date />
      <Colors />
      <button
        disabled={isLoading}
        className="bg-purple-400 py-2 mt-2 rounded-sm uppercase text-gray-100"
        type="submit"
      >
        Save
      </button>
    </form>
  );
}
