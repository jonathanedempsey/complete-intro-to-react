import ReactDOM from "react-dom"
import Pet from "./Pet";

// it is required that components are capitalised, specifically when using JSX.
// JSX will assume anything captalised is something you created, while something lowercase,
// like "div", is an existing element
const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Luna" animal="Dog" breed="Havanese" />
            <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
            <Pet name="Sudo" animal="Dog" breed="Wheaten Terrier" />
        </div>
    );
};

// render App in ID of root
ReactDOM.render(<App />, document.getElementById('root'));