import { DateObj } from "../Calendar/types";
import useDay from "./useDay";
import Widgets from "./Widgets";

interface Props {
  dateObj: DateObj;
}

export default function Day(props: Props) {
  const { key, dateNum, isCurrDay, isCurrMonth } = props.dateObj;
  const { income, expenses } = useDay(key);

  return (
    <li
      className={`h-day w-day  ${
        isCurrMonth ? "border bg-gray-50" : "bg-white"
      } text-gray-800 grid place-items-center rounded-sm relative ${
        isCurrDay ? "font-bold" : ""
      }`}
    >
      {dateNum < 10 ? `0${dateNum}` : `${dateNum}`}
      <Widgets items={income} classes="flex-wrap top-0" />
      <Widgets items={expenses} classes="flex-wrap-reverse bottom-0" />
    </li>
  );
}
