class Omen extends React.Component {
    state = {
        omen: {
            options: ["1", "2", "3"]
        },
    }
    render() {
        return(
            <div className="omen">
                <button>Zobacz wrózbę</button>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("root"));
