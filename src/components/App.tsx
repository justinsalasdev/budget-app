import Calendar from "./Calendar/Calendar";
import { Budget as _Budget } from "./budgetSchema";
import Budget from "./Budget/Budget";
import Insight from "./Insight/Insight";
import Adder from "./Adder/Adder";

export default function App() {
  return (
    <div>
      <Insight />
      <Calendar />
      <Adder />
      <Budget />
    </div>
  );
}
