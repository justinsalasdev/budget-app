import { DateTime } from "luxon";
import { DateObj } from "./types";
const numTiles = 42;

//vanilla calendar idea from Amit Gupta - from dev.to
//slightly diff luxon implementation by me ^^
export default function generateDates(
  year: number,
  month: number,
  currDt: DateTime
) {
  //create dt with year, and month
  const dtCurr = DateTime.local(year, month);
  const dtPrev = dtCurr.minus({ months: 1 });

  const firstDayNum = dtCurr.weekday; // 1-7; 1 is monday
  const numDaysPrevMonth = dtPrev.daysInMonth;
  const numDaysCurrMonth = dtCurr.daysInMonth;

  const dates: DateObj[] = [];
  // //push prev month days
  for (let i = 1; i <= firstDayNum; i++) {
    const prevMonthDateNum = numDaysPrevMonth - firstDayNum + i;
    const key = DateTime.local(year, month - 1, prevMonthDateNum).toISODate();
    const dateNum = prevMonthDateNum;

    dates.push({ key, dateNum });
  }

  //push curr month days
  for (let i = 1; i <= numDaysCurrMonth; i++) {
    const key = DateTime.local(year, month, i).toISODate();
    const isCurrDay = key === currDt.toISODate();
    const dateNum = i;

    dates.push(
      isCurrDay
        ? { key, dateNum, isCurrMonth: true, isCurrDay: true }
        : { key, dateNum, isCurrMonth: true }
    );
  }

  //if 42 tiles isn't filled yet, fill with next month days
  if (dates.length < numTiles) {
    const count = numTiles - dates.length;
    for (let i = 1; i <= count; i++) {
      const key = DateTime.local(year, month + 1, i).toISODate();
      const dateNum = i;
      dates.push({ key, dateNum });
    }
  }

  return dates;
}
