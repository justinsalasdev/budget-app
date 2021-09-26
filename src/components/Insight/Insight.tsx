import { DateTime } from "luxon";
import { useGetBudget } from "../../contexts/BudgetProvider";

const dt = DateTime.local(2021, 11);
export default function Insight() {
  const { timeline } = useGetBudget();

  let incomeHit = false;
  let _dt = dt.plus({ days: 1 }); //start with next day
  let _exp = 0;
  let _expTillIncome = 0;

  while (_dt <= dt.endOf("month")) {
    const expense = timeline[_dt.toISODate()]?.sumExpenses || 0;
    const income = timeline[_dt.toISODate()]?.sumIncome || 0;
    console.log(income);

    //if key with income is hit, stop adding to _expTillIncome
    if (income) {
      incomeHit = true;
    }
    if (!incomeHit) {
      _expTillIncome += expense;
    }

    _exp += expense;
    _dt = _dt.plus({ days: 1 });
  }

  console.log(_exp, _expTillIncome);

  console.log("insight-recomputes", timeline);
  return (
    <div className="h-24 bg-pink-400 w-50">
      {_expTillIncome}--
      {_exp}
    </div>
  );
}
