import { Route, Switch } from "react-router";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import { routes } from "../routes";
import Nav from "./Nav/Nav";

export default function App() {
  return (
    <div className="grid grid-rows-a1">
      <Nav />
      <Switch>
        <Route path={routes.dash} component={Dashboard} />
        <Route path={routes.login} component={Login} />
      </Switch>
    </div>
  );
}
