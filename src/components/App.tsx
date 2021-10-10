import Calendar from "./Calendar/Calendar";
import { Budget as _Budget } from "./budgetSchema";
import Budget from "./Budget/Budget";
import Insight from "./Insight/Insight";
import { Route, Switch } from "react-router";
import Adder from "./Adder/Adder";

export default function App() {
  return (
    <div className="grid content-start justify-self-center pt-4">
      <Insight />

      <div className="mt-4 grid gap-4 grid-cols-2">
        <Calendar />
        {/* <Adder /> */}

        <Switch>
          <Route exact path="/" component={Budget} />
          <Route path="/add/:type" component={Adder} />
        </Switch>
      </div>
    </div>
  );
}
