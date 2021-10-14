const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("h3", {}, props.animal),
        React.createElement("h3", {}, props.breed),
    ]);
};

// it is required that components are capitalised, specifically when using JSX.
// JSX will assume anything captalised is something you created, while something lowercase,
// like "div", is an existing element
const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanese" }),
            React.createElement(Pet, { name: "Pepper", animal: "Bird", breed: "Cockatiel" }),
            React.createElement(Pet, { name: "Sudo", animal: "Dog", breed: "Wheaten Terrier" }),
        ]
    );
};

// render App in ID of root
ReactDOM.render(React.createElement(App), document.getElementById('root'));