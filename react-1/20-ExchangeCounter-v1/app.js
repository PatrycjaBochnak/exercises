// const Dollars = (props) => {
//   <div>Wartość w dolarach: {props.cash <= 0 ? "" : (props.cash / props.ratioDollar).toFixed(2)}</div>;
// };

// const Euros = (props) => {
//   <div>Wartosćw euro: {props.cash <= 0 ? "" : (props.cash / props.ratioEuro).toFixed(2)}</div>;
// };

const Cash = (props) => {
    const value = (props.cash / props.ratio).toFixed(2)
    return (
        <div>{props.title} {props.cash <= 0 ? "" : value}</div>
    )
}

class ExchangeCounter extends React.Compontent {
  state = {
    amount: "",
    ratioDollar: 3.6,
    ratioEuro: 4.2,
  };
  handleChange = (e) => {
    this.setState({
        amount: e.target.value
    })
  }
  render() {
    const {amount, ratioDollar, ratioEuro} = this.state
    return (
      <div className="app">
        <label>
          <input
            type="number"
            value={amount}
            onChange={this.handleChange}
          />
        </label>
        {/* <Dollars cash={amount} ratio={ratioDollar}/>
        <Euros cash={amount} ratio={ratioEuro}/> */}
        <Cash cash={amount} ratio={ratioDollar} title="wartość w dolarach: "/>
        <Cash cash={amount} ratio={ratioEuro} title="wartość w euro: "/>
      </div>
    );
  }
}
ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
