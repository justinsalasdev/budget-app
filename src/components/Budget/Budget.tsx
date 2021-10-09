import { useGetBudget } from "../../contexts/BudgetProvider";
import Items from "../Items/Items";

export default function Budget() {
  const { budgets } = useGetBudget();
  const income = budgets.filter((budget) => budget.type === "income");
  const expenses = budgets.filter((budget) => budget.type === "expense");

  return (
    <div className="max-w-2xl bg-white p-4 rounded-md">
      <Items items={income} title="Income" />
      <Items items={expenses} title="Expenses" />
    </div>
  );
}
