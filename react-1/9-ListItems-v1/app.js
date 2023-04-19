class ListItems extends React.Component {
  state = {
    items: ["jabłko", "śliwka", "gruszka"],
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<ListItems />, document.getElementById("root"));
