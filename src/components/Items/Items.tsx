import { Budget } from "../../contexts/BudgetProvider";
import Item from "../Item/Item";

type Props = { items: Budget[]; title: string };
export default function Items(props: Props) {
  return (
    <div className="border p-4 mb-4 rounded-md bg-white">
      <h3 className="uppercase text-2xl text-center">{props.title}</h3>
      <ul className="bg-white flex flex-col gap-2 p-2 mb-4 p-2">
        {props.items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
