import Calendar from "./Calendar/Calendar";
import { Budget as _Budget } from "./budgetSchema";
import Budget from "./Budget/Budget";
import Insight from "./Insight/Insight";

export default function App() {
  return (
    <div className="grid content-start justify-self-center pt-4">
      <Insight />

      <div className="mt-4 grid gap-4 grid-cols-2">
        <Calendar />
        {/* <Adder /> */}
        <Budget />
      </div>
    </div>
  );
}
