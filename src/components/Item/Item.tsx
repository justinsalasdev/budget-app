import { Budget } from "../../contexts/BudgetProvider";
import toCurrency from "../../helpers/toCurrency";

export default function Item(props: Budget) {
  const { color, id, name, amount, frequency } = props;
  return (
    <li
      className={`p-3 rounded-sm shadow-md grid grid-cols-3 grid-rows-2 items-center`}
      key={id}
    >
      <p className="text-lg font-semibold flex items-center">
        <span className={`${color} block w-4 h-4 mr-2 rounded-full`}></span>
        {name}
      </p>
      <p className="row-start-2">
        ₱ {toCurrency(amount)}{" "}
        <span className="text-gray-500 text-xs uppercase block">
          {frequency}
        </span>
      </p>
    </li>
  );
}
