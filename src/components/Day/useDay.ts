import { useGetBudget } from "../../contexts/BudgetProvider";

export default function useDay(key: string) {
  const { budgets } = useGetBudget();

  const income = [];
  const expenses = [];

  for (let budget of budgets) {
    if (budget.keys.includes(key)) {
      if (budget.type === "income") {
        income.push(budget);
      } else {
        expenses.push(budget);
      }
    }
  }
  return { income, expenses };
}
