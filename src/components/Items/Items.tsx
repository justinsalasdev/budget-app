import { Link, useRouteMatch } from "react-router-dom";
import { Budget } from "../../contexts/BudgetProvider";
import { AiOutlinePlus } from "react-icons/ai";
import Item from "../Item/Item";
import { BudgetType } from "../budgetSchema";
import { dash } from "../../routes";

type Props = { items: Budget[]; type: BudgetType };

export default function Items(props: Props) {
  const { url } = useRouteMatch();
  const title = props.type === "income" ? "Income" : "Expenses";
  const isEmpty = props.items.length <= 0;
  return (
    <div className="relative rounded-t-md overflow-hidden">
      <Link
        to={`${dash.add}/${props.type}`}
        className="absolute right-4 top-4 bg-purple-300 p-2 rounded-full shadow-sm"
      >
        <AiOutlinePlus />
      </Link>
      <h3 className="p-4 bg-gray-600 uppercase text-xl text-gray-50">
        {title}
      </h3>

      <ul className="bg-white grid grid-cols-2 gap-2 p-2 mb-4 p-4 rounded-b-md">
        {(!isEmpty &&
          props.items.map((item) => <Item key={item.id} {...item} />)) || (
          <span className="uppercase text-left text-gray-400">
            no items yet
          </span>
        )}
      </ul>
    </div>
  );
}
