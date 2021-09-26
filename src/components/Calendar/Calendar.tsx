import Day from "../Day/Day";
import useCalendar from "./useCalendar";

export default function Calendar() {
  const { dates, monthName, dayNames, year, nextMonth, prevMonth } =
    useCalendar();

  return (
    <div>
      <div className="flex gap-2">
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
        <ul className="grid grid-cols-7 w-96 bg-white place-items-center">
          {dayNames.map((dayName, i) => (
            <li key={i}>{dayName}</li>
          ))}
        </ul>
        <ul className="bg-white grid grid-cols-7 grid-rows-6 gap-1 w-96 h-96 p-2 rounded-sm">
          {dates.map((date, i) => (
            <Day dateObj={date} key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
}
