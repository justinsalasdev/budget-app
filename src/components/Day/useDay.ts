import { useGetBudget } from "../../contexts/BudgetProvider";

export default function useDay(key: string) {
  const { budgets } = useGetBudget();
  const items = budgets.filter((item) => item.keys.includes(key));

  return { items };
}
