import { useGetBudget } from "../../contexts/BudgetProvider";
import { useSetTimeline } from "../../contexts/TimeLineProvider";

export default function useDay(key: string) {
  const budget = useGetBudget();
  const { updateTimeline } = useSetTimeline();
  const items = budget.filter((item) => item.keys.includes(key));

  let sumExpenses = 0;
  let sumIncome = 0;

  for (let i = 0; i < items.length; i++) {
    const { amount, type } = items[i];
    if (type === "expense") {
      sumExpenses += amount;
    } else {
      sumIncome += amount;
    }
  }
  updateTimeline(key, { sumExpenses, sumIncome });

  return { items };
}
