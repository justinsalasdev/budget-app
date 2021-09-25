import { DateTime } from "luxon";
import { useMemo, useRef, useState } from "react";
import Day from "../Day/Day";
import generateDates from "./generateDates";

//prettier-ignore
const months = ['','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct', 'Nov','Dec']
const days = ["S", "M", "T", "W", "TH", "F", "SA"];

export default function Calendar() {
  const { current: dt } = useRef<DateTime>(DateTime.local());
  const [month, setMonth] = useState(dt.month);
  // eslint-disable-next-line
  const [year, setYear] = useState(dt.year);

  const nextMonth = () => {
    if (month >= 12) {
      setYear((_year) => _year + 1);
    }
    setMonth((p) => (p >= 12 ? 1 : p + 1));
  };

  const prevMonth = () => {
    if (month <= 1) {
      setYear((_year) => _year - 1);
    }
    setMonth((p) => (p <= 1 ? 12 : p - 1));
  };

  console.log(year, month);

  const dates = useMemo(
    () => generateDates(year, month, dt),
    // eslint-disable-next-line
    [year, month]
  );

  return (
    <div>
      <div className="flex gap-2">
        <button
          onClick={prevMonth}
          className="bg-purple-400 w-28 py-1 rounded-sm"
        >
          prev month
        </button>

        <p className="text-gray-200">{months[month]}</p>
        <button
          onClick={nextMonth}
          className="bg-purple-400 w-28 py-1 rounded-sm"
        >
          next month
        </button>
      </div>
      <div>
        <ul className="grid grid-cols-7 w-96 bg-white place-items-center">
          {days.map((day, i) => (
            <li key={i}>{day}</li>
          ))}
        </ul>
        <ul className="bg-red-400 grid grid-cols-7 grid-rows-6 place-items-center w-96 h-96">
          {dates.map((date, i) => (
            <Day dateObj={date} index={i} />
          ))}
        </ul>
      </div>
    </div>
  );
}
