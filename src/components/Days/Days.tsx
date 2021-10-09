import { DateObj } from "../Calendar/types";
import Day from "../Day/Day";

type Props = { dates: DateObj[]; hC: string; wC: string };

export default function Days(props: Props) {
  return (
    <ul className="bg-white grid grid-cols-7 grid-rows-6 gap-1 p-2 rounded-sm">
      {props.dates.map((date, i) => (
        <Day dateObj={date} key={i} wC={props.wC} hC={props.hC} />
      ))}
    </ul>
  );
}
