import { DateTime } from "luxon";
import toCurrency from "../../helpers/toCurrency";
import Item from "./Item";
import useInsight from "./useInsight";

export default function Insight() {
  const currMonthName = DateTime.local().monthLong;
  const { expTillIncome, expTillEnd, monthExp, monthIncome } = useInsight();
  const net = monthIncome - monthExp;
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
      <ul className="grid grid-cols-4 gap-4 mt-4">
        <Item description="expenses until next payday" amount={expTillIncome} />
        <Item description="remaining expenses" amount={expTillEnd} />
        <Item description="total expense" amount={monthExp} />
        <Item description="total income" amount={monthIncome} />
      </ul>
    </div>
  );
}
