import { useRef, useState } from "react";
import generateDates from "./generateDates";

//prettier-ignore
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct', 'Nov','Dec']
const days = ["S", "M", "T", "W", "TH", "F", "SA"];

export default function Calendar() {
  console.log("renders");
  const { current: currDate } = useRef<Date>(new Date());
  const currMonth = currDate.getMonth(); //0-11
  const currYear = currDate.getFullYear(); //curr year YYYY
  const currDateNum = currDate.getDate();
  const [month, setMonth] = useState(currMonth);
  const [year, setYear] = useState(currYear);

  const nextMonth = () => setMonth((p) => (p >= 11 ? 0 : p + 1));
  const prevMonth = () => setMonth((p) => (p <= 0 ? 11 : p - 1));

  const dates = generateDates(year, month, currYear, currMonth, currDateNum);
  console.log(dates);

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
          {dates.map((date, i) => {
            return <li key={i}>{date.dateNum}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
