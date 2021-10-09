import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import { useGetBudget } from "../../contexts/BudgetProvider";

type Insight = {
  expTillEnd: number;
  expTillIncome: number;
  monthExp: number;
  monthIncome: number;
};

export default function useInsight() {
  const [insight, setInsight] = useState<Insight>({
    expTillEnd: 0,
    expTillIncome: 0,
    monthExp: 0,
    monthIncome: 0,
  });
  const { timeline } = useGetBudget();

  const dtCurr = DateTime.local();
  const dtStart = dtCurr.startOf("month");

  useEffect(() => {
    let incomeHit = false;
    let _dt = dtCurr.plus({ days: 1 }); //start with next day

    let expTillCur = 0;
    let expTillEnd = 0;
    let expTillIncome = 0;
    let monthIncome = 0;

    let _dtStart = dtStart;
    while (_dtStart <= dtCurr) {
      const expense = timeline[_dtStart.toISODate()]?.sumExpenses || 0;
      expTillCur += expense;
      _dtStart = _dtStart.plus({ days: 1 });
    }

    while (_dt <= dtCurr.endOf("month")) {
      const expense = timeline[_dt.toISODate()]?.sumExpenses || 0;
      const income = timeline[_dt.toISODate()]?.sumIncome || 0;

      //if key with income is hit, stop adding to expTillIncome
      if (income) {
        incomeHit = true;
      }
      if (!incomeHit) {
        expTillIncome += expense;
      }

      monthIncome += income;
      expTillEnd += expense;
      _dt = _dt.plus({ days: 1 });
    }

    setInsight({
      expTillEnd,
      expTillIncome,
      monthExp: expTillEnd + expTillCur,
      monthIncome,
    });
  }, [timeline]);

  return insight;
}
