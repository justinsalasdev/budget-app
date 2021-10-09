import Days from "../Days/Days";
import useCalendar from "./useCalendar";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Control from "./Control";

export default function Calendar() {
  const { dates, monthName, dayNames, year, nextMonth, prevMonth, currMonth } =
    useCalendar();

  return (
    <div className="grid content-start justify-items-center mb-auto ml-auto">
      <div className="flex justify-center gap-2 p-3 bg-gray-700 w-full rounded-t-md">
        <Control icon={MdNavigateBefore} handler={prevMonth} />
        <button
          onClick={currMonth}
          className="text-gray-800 uppercase bg-gray-50 py-2 px-3 rounded-sm"
        >
          {year} {monthName}
        </button>
        <Control icon={MdNavigateNext} handler={nextMonth} />
      </div>
      <div className="rounded-md">
        <ul className="grid grid-cols-7 bg-white place-items-center p-3 pb-0">
          {dayNames.map((dayName, i) => (
            <li className={`w-day text-center`} key={i}>
              {dayName}
            </li>
          ))}
        </ul>
        <Days dates={dates} />
      </div>
    </div>
  );
}
