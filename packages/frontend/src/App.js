import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginContainer from "./containers/login";
import TwoAuthFactorContainer from "./containers/2fa";
import DashboardContainer from "./containers/dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginContainer} />
        <Route path="/2fa" component={TwoAuthFactorContainer} />
        <Route path="/dashboard" component={DashboardContainer} />
        <Route path="/" component={LoginContainer} />
      </Switch>
    </Router>
  );
}

export default App;
