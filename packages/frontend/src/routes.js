import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LoginContainer from "./containers/login";
import TwoAuthFactorContainer from "./containers/2fa";
import DashboardContainer from "./containers/dashboard";
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            )
        }
    />
);

const Routes = () => (
    <Router>
        <Switch>
            <PrivateRoute path="/2fa" component={TwoAuthFactorContainer} />
            <PrivateRoute path="/dashboard" component={DashboardContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/" component={LoginContainer} />
        </Switch>
    </Router>
);

export default Routes;