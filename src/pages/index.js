import { createBrowserHistory } from "history";
import { useEffect } from "react";
import { Route, Router, Switch, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import RightMenu from "../components/RightMenu";
import NotFound from "./NotFound";
import routes from "./routes";

function ScrollToTop() {
    useEffect(() => window.scrollTo(0, 0), [useLocation().pathname]);
    return null
}

const history = createBrowserHistory();

function App() {
    return (
        <Router history={history}>
            <ScrollToTop />
            <Navbar />
            <RightMenu/>
            <Switch>
                {routes.map((route, idx) => {
                return route.component ? (
                    <Route path={route.path} component={route.component} exact key={idx}/>
                ) : (null);
                })}
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default App
