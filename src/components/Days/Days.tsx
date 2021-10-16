import { DateObj } from "../Calendar/types";
import Day from "../Day/Day";

type Props = { dates: DateObj[] };

export default function Days(props: Props) {
  return (
    <ul className="bg-white grid grid-cols-7 grid-rows-6 gap-2 p-4 rounded-b-md">
      {props.dates.map((date, i) => (
        <Day dateObj={date} key={i} />
      ))}
    </ul>
  );
}
