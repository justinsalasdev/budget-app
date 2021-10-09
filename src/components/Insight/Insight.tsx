import useInsight from "./useInsight";

export default function Insight() {
  const { expTillIncome, expTillEnd, monthExp, monthIncome } = useInsight();
  return (
    <div className="h-24 bg-pink-400">
      <p>dues until next payday: {expTillIncome}</p>
      <p>remaining dues this month: {expTillEnd}</p>
      <p>dues this month: {monthExp}</p>
      <p>income this month: {monthIncome}</p>
    </div>
  );
}
