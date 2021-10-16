import { DateTime } from "luxon";
import { Timeline } from "../../contexts/BudgetProvider";

export default function getMonthSums(timeline: Timeline) {
  const curr = DateTime.local();
  const start = curr.startOf("month");
  const end = curr.endOf("month");

  let income = 0;
  let expenses = 0;
  let endExpenses = 0;
  let _dt = start;
  while (_dt <= end) {
    const key = _dt.toISODate();
    const inc = timeline[key]?.sumIncome || 0;
    const exp = timeline[key]?.sumExpenses || 0;
    income += inc;
    expenses += exp;

    if (_dt > curr) {
      endExpenses += exp;
    }

    _dt = _dt.plus({ days: 1 });
  }

  return { income, expenses, endExpenses };
}
