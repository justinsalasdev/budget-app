import { DateTime } from "luxon";
import { useMemo, useRef, useState } from "react";
import generateDates from "./generateDates";

//prettier-ignore
const monthNames = ['','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct', 'Nov','Dec']
const dayNames = ["M", "T", "W", "TH", "F", "SA", "SN"];
export default function useCalendar() {
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

  const dates = useMemo(
    () => generateDates(year, month, dt),
    // eslint-disable-next-line
    [year, month]
  );

  return {
    dates,
    monthName: monthNames[month],
    dayNames,
    year,
    nextMonth,
    prevMonth,
  };
}
