import { useGetBudget } from "../../contexts/BudgetProvider";
import toCurrency from "../../helpers/toCurrency";
import Item from "../Item/Item";

export default function Budget() {
  const { budgets } = useGetBudget();
  const income = budgets.filter((budget) => budget.type === "income");
  const expenses = budgets.filter((budget) => budget.type === "expense");

  return (
    <div className="max-w-2xl">
      <ul className="bg-white flex flex-col gap-2 p-2">
        {income.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
      <ul className="bg-white flex flex-col gap-2 p-2">
        {expenses.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
