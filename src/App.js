const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, "Luna"),
        React.createElement("h3", {}, "Dog"),
        React.createElement("h3", {}, "Havanese"),
    ]);
};

// it is required that components are capitalised, specifically when using JSX.
// JSX will assume anything capitalised is something you created, while something lowercase,
// like "div", is an existing element
const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet),
        ]
    );
};

// render App in ID of root
ReactDOM.render(React.createElement(App), document.getElementById('root'));