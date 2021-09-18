import { signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import { useRef, useState } from "react";

//vanilla calendar idea from Amit Gupta - from dev.to
//react implementation by me ^^
//prettier-ignore
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct', 'Nov','Dec']
const days = ["S", "M", "T", "W", "TH", "F", "SA"];
const numTiles = 42;

enum Status {
  prev = "prev",
  curr = "curr",
  next = "next",
}

interface DateObj {
  key: string;
  date: number;
  monthStatus: Status;
  isCurrDay: boolean;
}

export default function App() {
  const { current: currDate } = useRef<Date>(new Date());
  const currMonth = currDate.getMonth(); //0-11
  const currYear = currDate.getFullYear(); //curr year YYYY
  const _currDateNum = currDate.getDate();
  const [month, setMonth] = useState(currMonth);
  const [year, setYear] = useState(currYear);

  function generateDates(year: number, month: number) {
    var dates: DateObj[] = [];
    //day in numbers 0-6 that the month starts
    const firstDayNum = new Date(year, month).getDay();

    //month day starts @ 1: get day before 1 of the next month
    const numDaysCurrMonth = new Date(year, month + 1, 0).getDate();

    //get the day before the first day of the current month
    const numDaysPrevMonth = new Date(year, month, 0).getDate();

    //push prev month days
    for (let i = 1; i <= firstDayNum; i++) {
      const prevMonthDateNum = numDaysPrevMonth - firstDayNum + i;
      const key = new Date(year, month - 1, prevMonthDateNum).toLocaleString();
      const date = prevMonthDateNum;
      const monthStatus = Status.prev;
      const isCurrDay = false;

      dates.push({ key, date, monthStatus, isCurrDay });
    }

    //push curr month days
    for (let i = 1; i <= numDaysCurrMonth; i++) {
      const key = new Date(year, month - 1, i).toLocaleString();
      const date = i;
      const isCurrDay =
        new Date(year, month, i).toString() ===
        new Date(currYear, currMonth, _currDateNum).toString();
      const monthStatus = Status.curr;

      dates.push({ key, date, monthStatus, isCurrDay });
    }

    if (dates.length < numTiles) {
      const count = numTiles - dates.length;
      for (let i = 1; i <= count; i++) {
        const key = new Date(year, month + 1, i).toLocaleString();
        const date = i;
        const isCurrDay = false;
        const monthStatus = Status.next;
        dates.push({ key, date, monthStatus, isCurrDay });
      }
    }

    //push next month days
    return dates;
  }
  console.log(generateDates(2021, 9));

  function handleLogin() {
    signInWithRedirect(auth, provider);
  }
  return (
    <div>
      <button onClick={handleLogin} className="bg-red-400">
        signin
      </button>
    </div>
  );
}
