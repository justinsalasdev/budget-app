import { DateObj } from "./types";
const numTiles = 42;

//vanilla calendar idea from Amit Gupta - from dev.to
//react implementation by me ^^
export default function generateDates(
  year: number,
  month: number,
  currYear: number,
  currMonth: number,
  currDateNum: number
) {
  const dates: DateObj[] = [];
  //day in numbers 0-6 that the month starts
  const firstDayNum = new Date(year, month).getDay();

  //month day starts @ 1: get day before 1 of the next month
  const numDaysCurrMonth = new Date(year, month + 1, 0).getDate();

  //get the day before the first day of the current month
  const numDaysPrevMonth = new Date(year, month, 0).getDate();

  //push prev month days
  for (let i = 1; i <= firstDayNum; i++) {
    const prevMonthDateNum = numDaysPrevMonth - firstDayNum + i;
    const key = `${year}-${month - 1}-${prevMonthDateNum}`;
    const dateNum = prevMonthDateNum;

    dates.push({ key, dateNum });
  }

  //push curr month days
  for (let i = 1; i <= numDaysCurrMonth; i++) {
    const key = `${year}-${month}-${i}`;
    const dateNum = i;
    const isCurrDay =
      `${year}-${month}-${i}` === `${currYear}-${currMonth}-${currDateNum}`;

    dates.push(
      isCurrDay
        ? { key, dateNum, isCurrDay: true }
        : { key, dateNum, isCurrMonth: true }
    );
  }

  //if 42 tiles isn't filled yet, fill with next month days
  if (dates.length < numTiles) {
    const count = numTiles - dates.length;
    for (let i = 1; i <= count; i++) {
      const key = `${year}-${month + 1}-${i}`;
      const dateNum = i;
      dates.push({ key, dateNum });
    }
  }

  //push next month days
  return dates;
}
