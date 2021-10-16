import { DateTime } from "luxon";
import toCurrency from "../../helpers/toCurrency";
import Item from "./Item";
import useInsight from "./useInsight";

export default function Insight() {
  const currMonthName = DateTime.local().monthLong;
  const { income, expenses, endExpenses } = useInsight();
  const net = income - expenses;
  return (
    <div className="bg-gray-50 p-6 rounded-md">
      <h3 className="uppercase ">
        <span className="text-lg">{currMonthName} net </span>
        <span
          className={`text-3xl font-semibold ${
            net < 0 ? "text-red-500" : "text-green-400"
          }`}
        >
          ₱{toCurrency(net)}
        </span>
      </h3>
      <ul className="grid grid-cols-3 gap-4 mt-4">
        <Item description="total income" amount={income} />
        <Item description="total expense" amount={expenses} />
        <Item description="remaining expenses" amount={endExpenses} />
      </ul>
    </div>
  );
}
