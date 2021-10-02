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
  const dates: DateObj[] = [];

  const dt = DateTime.local(year, month);
  //add or minus a day to shift week start
  const startdt = dt.startOf("week");

  let _dt = startdt;
  for (let i = 0; i < numTiles; i++) {
    dates.push({
      key: _dt.toISODate(),
      dateNum: _dt.day,
      isCurrMonth: _dt.month === month,
      isCurrDay: _dt.month === month && _dt.day === currDt.day,
    });
    _dt = _dt.plus({ days: 1 });
  }
  return dates;
}
