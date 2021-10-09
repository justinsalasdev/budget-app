import toCurrency from "../../helpers/toCurrency";

type Props = {
  description: string;
  amount: number;
};

export default function Item(props: Props) {
  return (
    <li className="p-3 border rounded-sm">
      <p className="uppercase text-sm">{props.description}</p>
      <p className="text-2xl p-2 pl-0">₱ {toCurrency(props.amount)}</p>
    </li>
  );
}
