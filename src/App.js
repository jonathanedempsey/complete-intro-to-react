import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

// it is required that components are capitalised, specifically when using JSX.
// JSX will assume anything captalised is something you created, while something lowercase,
// like "div", is an existing element
const App = () => {
    const theme = useState("darkblue");

    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <Router>
                    <header>
                        <Link to="/">
                            <h1>Adopt Me!</h1>
                        </Link>
                    </header>

                    <Switch>
                        <Route path="/details/:id">
                            <Details />
                        </Route>

                        <Route path="/">
                            <SearchParams />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </ThemeContext.Provider>
    );
};

// render App in ID of root.
// StrictMode ensures we only use safe, up to date functionality from the React API.
ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
);