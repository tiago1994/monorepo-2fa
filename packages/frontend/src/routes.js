import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginContainer from "./containers/login";
import TwoAuthFactorContainer from "./containers/2fa";
import DashboardContainer from "./containers/dashboard";
import { PrivateRoute, TwoFactorRoute } from "./helpers/privateRoute";

const Routes = () => (
  <Router>
    <Switch>
      <PrivateRoute path="/2fa" component={TwoAuthFactorContainer} />
      <TwoFactorRoute path="/dashboard" component={DashboardContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/" component={LoginContainer} />
    </Switch>
  </Router>
);

export default Routes;
