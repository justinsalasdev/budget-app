import Days from "../Days/Days";
import useCalendar from "./useCalendar";

const wC = "w-20";
const hC = "h-20";

export default function Calendar() {
  const { dates, monthName, dayNames, year, nextMonth, prevMonth } =
    useCalendar();

  return (
    <div className="w-full grid content-start justify-items-center">
      <div className="flex gap-2 ">
        <p>{year}</p>
        <button
          onClick={prevMonth}
          className="bg-purple-400 w-28 py-1 rounded-sm"
        >
          prev month
        </button>

        <p className="text-gray-200">{monthName}</p>
        <button
          onClick={nextMonth}
          className="bg-purple-400 w-28 py-1 rounded-sm"
        >
          next month
        </button>
      </div>
      <div>
        <ul className="grid grid-cols-7 bg-white place-items-center">
          {dayNames.map((dayName, i) => (
            <li className={`${wC} text-center`} key={i}>
              {dayName}
            </li>
          ))}
        </ul>
        <Days dates={dates} wC={wC} hC={hC} />
      </div>
    </div>
  );
}
