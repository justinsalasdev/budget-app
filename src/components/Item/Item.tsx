import { Budget } from "../../contexts/BudgetProvider";
import toCurrency from "../../helpers/toCurrency";
import { RiDeleteBin7Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import Action from "./Action";

export default function Item(props: Budget) {
  const { color, id, name, amount, frequency } = props;
  return (
    <li
      className={`p-3 pt-0 rounded-md shadow-md border grid grid-cols-2 grid-rows-2 items-center`}
      key={id}
    >
      <p className="text-lg text-gray-600 font-semibold flex items-center">
        <span className={`${color} block w-4 h-4 mr-2 rounded-full`}></span>
        {name}
      </p>
      <p className="row-start-2">
        ₱ {toCurrency(amount)}{" "}
        <span className="text-gray-500 text-xs uppercase block">
          {frequency}
        </span>
      </p>

      <Action icon={FiEdit3} type="edit" data={props} />
      <Action icon={RiDeleteBin7Line} type="delete" data={props} />
    </li>
  );
}
