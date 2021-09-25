import { useGetBudget } from "../../contexts/BudgetProvider";
import { DateObj } from "../Calendar/types";

interface Props {
  dateObj: DateObj;
  index: number;
}

export default function Day({ dateObj, index }: Props) {
  const budget = useGetBudget();
  const expenses = budget.filter((item) => item.keys.includes(dateObj.key));
  if (expenses.length >= 1) {
    return <li key={index}>{dateObj.dateNum} xx</li>;
  } else {
    return <li key={index}>{dateObj.dateNum}</li>;
  }
}
