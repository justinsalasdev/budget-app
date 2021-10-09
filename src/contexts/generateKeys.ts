import { DateTime, DurationObjectUnits } from "luxon";
import { Freq } from "../components/budgetSchema";

const yearRange = 1;

export default function generateKeys(start: string, freq: Freq) {
  let dtStart = DateTime.fromISO(start);
  const startDayNum = dtStart.day;

  const dtCurr = DateTime.local();
  const currMonthNum = dtCurr.month;
  const currYearNum = dtCurr.year;

  //always start key generation in curr month
  let dtBegin = DateTime.local(currYearNum, currMonthNum, startDayNum);

  const endDate = dtBegin.plus({ years: yearRange });
  const keys: string[] = [];
  const intervals: { [key in Freq]: DurationObjectUnits } = {
    weekly: { weeks: 1 },
    monthly: { months: 1 },
    annual: { years: 1 },
  };

  while (dtBegin <= endDate) {
    const key = dtBegin.toISODate();
    keys.push(key);
    dtBegin = dtBegin.plus(intervals[freq]);
  }

  return keys;
}
