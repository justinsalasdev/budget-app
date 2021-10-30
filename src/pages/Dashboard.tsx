import { Route, Switch, useRouteMatch } from "react-router-dom";
import Adder from "../components/Adder/Adder";
import Budget from "../components/Budget/Budget";
import Calendar from "../components/Calendar/Calendar";
import Insight from "../components/Insight/Insight";
import { dash } from "../routes";

export default function Dashboard() {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <div className="grid content-start justify-self-center pt-4">
      <Insight />
      <div className="mt-4 grid gap-4 grid-cols-2">
        <Calendar />
        <Switch>
          <Route exact path={`${path}${dash.home}`} component={Budget} />
          <Route path={`${path}${dash.add}/:type`} component={Adder} />
          <Route path={`${path}${dash.edit}`} component={Adder} />
        </Switch>
      </div>
    </div>
  );
}
