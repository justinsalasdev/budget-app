import { Link } from "react-router-dom";
import { Budget } from "../../contexts/BudgetProvider";
import { AiOutlinePlus } from "react-icons/ai";
import Item from "../Item/Item";
import { BudgetType } from "../budgetSchema";

type Props = { items: Budget[]; type: BudgetType };

export default function Items(props: Props) {
  const title = props.type === "income" ? "Income" : "Expenses";
  return (
    <div className="relative rounded-t-md overflow-hidden">
      <Link
        to={`/add/${props.type}`}
        className="absolute right-4 top-4 bg-purple-300 p-2 rounded-full shadow-sm"
      >
        <AiOutlinePlus />
      </Link>
      <h3 className="p-4 bg-gray-600 uppercase text-xl text-gray-50">
        {title}
      </h3>
      <ul className="bg-white flex flex-col gap-2 p-2 mb-4 p-4 rounded-b-md">
        {props.items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
