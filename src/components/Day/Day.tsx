import { useGetBudget } from "../../contexts/BudgetProvider";
import { DateObj } from "../Calendar/types";

interface Props {
  dateObj: DateObj;
  index: number;
}

export default function Day({ dateObj, index }: Props) {
  const budget = useGetBudget();
  const expenses = budget.filter((item) => item.keys.includes(dateObj.key));

  return (
    <li
      className="bg-gray-100 text-gray-800 grid place-items-center rounded-sm relative"
      key={index}
    >
      {dateObj.dateNum < 10 ? `0${dateObj.dateNum}` : `${dateObj.dateNum}`}
      <ul className="absolute bottom-0 left-0 flex gap-1 p-1 w-full">
        {expenses.map((expense) => (
          <li
            className={`${expense.color} w-2 h-2 rounded-full`}
            key={expense.id}
          ></li>
        ))}
      </ul>
    </li>
  );
}
