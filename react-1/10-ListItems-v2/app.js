const Item = (props) => <li>{`owoc ${props.content}`}</li>;

class ListItems extends React.Component {
  state = {
    items: ["jabłko", "śliwka", "gruszka"],
  };
  render() {
    const Items = this.state.items.map(item => 
        <Item key={item} content={item} /> )
    return (
      <div>
        <ul>
          {}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<ListItems />, document.getElementById("root"));
