import { useGetBudget } from "../../contexts/BudgetProvider";
import Items from "../Items/Items";

export default function Budget() {
  const { budgets } = useGetBudget();
  const income = budgets.filter((budget) => budget.type === "income");
  const expenses = budgets.filter((budget) => budget.type === "expense");

  return (
    <div className="w-full">
      <Items items={income} title="Income" />
      <Items items={expenses} title="Expenses" />
    </div>
  );
}
