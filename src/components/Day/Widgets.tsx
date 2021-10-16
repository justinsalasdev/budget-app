import { Budget } from "../../contexts/BudgetProvider";

type Props = {
  items: Budget[];
  classes: string;
};
export default function Widgets(props: Props) {
  return (
    <ul className={`${props.classes} flex absolute left-0 gap-1 p-2 w-full`}>
      {props.items.map((item) => (
        <li
          className={`${item.color} w-2/12 square rounded-full`}
          key={item.id}
        ></li>
      ))}
    </ul>
  );
}
