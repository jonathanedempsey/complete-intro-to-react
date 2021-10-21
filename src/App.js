import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";

// it is required that components are capitalised, specifically when using JSX.
// JSX will assume anything captalised is something you created, while something lowercase,
// like "div", is an existing element
const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Router>
                <Route path="/details/:id">
                    <Details />
                </Route>

                <Route path="/">
                    <SearchParams />
                </Route>
            </Router>
        </div>
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