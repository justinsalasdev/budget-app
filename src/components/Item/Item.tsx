import { Budget } from "../../contexts/BudgetProvider";
import toCurrency from "../../helpers/toCurrency";

export default function Item(props: Budget) {
  const { color, id, name, amount, frequency } = props;
  return (
    <li
      className={`p-2 rounded-sm shadow-md ${color} grid grid-cols-3 grid-rows-2 items-center h-16`}
      key={id}
    >
      <p className="text-lg font-bold">{name}</p>
      <p className="row-start-2">
        PHP {toCurrency(amount)} {frequency}
      </p>
    </li>
  );
}
