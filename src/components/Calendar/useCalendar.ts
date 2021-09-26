import { DateTime } from "luxon";
import { useEffect, useMemo, useRef, useState } from "react";
import { useGetBudget } from "../../contexts/BudgetProvider";
import { useSetTimeline } from "../../contexts/TimeLineProvider";
import generateDates from "./generateDates";

//prettier-ignore
const monthNames = ['','Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct', 'Nov','Dec']
const dayNames = ["S", "M", "T", "W", "TH", "F", "SA"];
export default function useCalendar() {
  console.log("calendar renders");
  const { broadcastUpdate } = useSetTimeline();
  const { current: dt } = useRef<DateTime>(DateTime.local());
  const [month, setMonth] = useState(dt.month);
  // eslint-disable-next-line
  const [year, setYear] = useState(dt.year);

  useEffect(() => {
    console.log("done updating");
    //when calendar finishes rendering,
    //timeline is updated
    broadcastUpdate();
  }, [month, year]);

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
