import Calendar from "./Calendar/Calendar";
import { Budget as _Budget } from "./budgetSchema";
import Budget from "./Budget/Budget";
import Insight from "./Insight/Insight";

export default function App() {
  return (
    <div className="grid content-start grid-cols-2">
      <Insight />
      <Calendar />
      {/* <Adder /> */}
      <Budget />
    </div>
  );
}
