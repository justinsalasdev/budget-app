import { DateTime } from "luxon";
import { Freq } from "../components/budgetSchema";

const yearSpan = 3;

export default function generateKeys(start: string, freq: Freq) {
  const dtStart = DateTime.fromISO(start);
  const endDate = dtStart.plus({ years: 3 });
}
