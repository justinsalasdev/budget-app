import { useGetBudget } from "../../contexts/BudgetProvider";
import Items from "../Items/Items";

export default function Budget() {
  const { budgets } = useGetBudget();

  const income = [];
  const expenses = [];
  for (let budget of budgets) {
    if (budget.type === "income") {
      income.push(budget);
    } else {
      expenses.push(budget);
    }
  }

  return (
    <div className="w-full">
      <Items items={income} type="income" />
      <Items items={expenses} type="expense" />
    </div>
  );
}
