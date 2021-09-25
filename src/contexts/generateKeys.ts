import { DateTime, DurationObjectUnits } from "luxon";
import { Freq } from "../components/budgetSchema";

const yearRange = 1;

export default function generateKeys(start: string, freq: Freq) {
  let dtStart = DateTime.fromISO(start);
  const endDate = dtStart.plus({ years: yearRange });
  const keys: string[] = [];
  const intervals: { [key in Freq]: DurationObjectUnits } = {
    weekly: { weeks: 1 },
    monthly: { months: 1 },
    annual: { years: 1 },
  };

  while (dtStart <= endDate) {
    const key = dtStart.toISODate();
    keys.push(key);
    dtStart = dtStart.plus(intervals[freq]);
  }

  return keys;
}
