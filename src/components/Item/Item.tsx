import { Budget } from "../../contexts/BudgetProvider";
import toCurrency from "../../helpers/toCurrency";
import { RiDeleteBin7Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import Action from "./Action";

export default function Item(props: Budget) {
  const { color, id, name, amount, frequency } = props;
  return (
    <li
      className={`p-3 rounded-sm shadow-md grid grid-cols-a1a grid-rows-2 items-center`}
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
      <p className="col-start-3 bg-gray-200 px-3 py-1 rounded-full text-xs text-gray-400">
        due in{" "}
      </p>
      <div className="col-start-3 row-start-2 flex items-center gap-2 justify-self-end">
        <Action icon={FiEdit3} type="edit" data={props} />
        <Action icon={RiDeleteBin7Line} type="delete" data={props} />
      </div>
    </li>
  );
}
