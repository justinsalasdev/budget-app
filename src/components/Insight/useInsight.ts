import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { useGetBudget } from "../../contexts/BudgetProvider";
import getMonthSums from "./getMonthSums";

type Insight = {
  endExpenses: number;
  expenses: number;
  income: number;
};

export default function useInsight() {
  const [insight, setInsight] = useState<Insight>({
    endExpenses: 0,
    expenses: 0,
    income: 0,
  });

  const { timeline } = useGetBudget();

  useEffect(() => {
    const { expenses, endExpenses, income } = getMonthSums(timeline);
    setInsight({ expenses, endExpenses, income });
  }, [timeline]);

  return insight;
}
