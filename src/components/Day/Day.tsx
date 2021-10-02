import { DateObj } from "../Calendar/types";
import useDay from "./useDay";

interface Props {
  dateObj: DateObj;
}

export default function Day(props: Props) {
  const { key, dateNum, isCurrDay } = props.dateObj;
  const { items } = useDay(key);

  return (
    <li
      className={`bg-gray-100 text-gray-800 grid place-items-center rounded-sm relative ${
        isCurrDay ? "font-bold" : ""
      }`}
    >
      {dateNum < 10 ? `0${dateNum}` : `${dateNum}`}
      <ul className="absolute bottom-0 left-0 flex gap-1 p-1 w-full">
        {items.map((item) => (
          <li
            className={`${item.color} w-2 h-2 rounded-full `}
            key={item.id}
          ></li>
        ))}
      </ul>
    </li>
  );
}
