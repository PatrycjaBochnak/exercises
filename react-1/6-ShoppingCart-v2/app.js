class App extends React.Component {
    state = {
      availableProducts: 7,
      shoppingCart: 0,
    };
    handleRemoveFromCart = () => {
      this.setState({
          shoppingCart: this.state.shoppingCart - 1,
      })
    }
    handleAddToCart = () => {
      this.setState({
          shoppingCart: this.state.shoppingCart + 1,
      })
  }
    handleBuy = () => {
        this.setState({
            availableProducts: this.state.availableProducts - this.state.shoppingCart,
            shoppingCart: 0,
        })
    }
    render() {

    const {shoppingCart, availableProducts} = this.state

      return (
        <>
          <button disabled={this.state.shoppingCart === 0 ? true : false} onClick={this.handleRemoveFromCart}>-</button>

          <span> {shoppingCart} </span>

          <button disabled={shoppingCart === availableProducts ? true : false} onClick={this.handleAddToCart}>+</button>
          {shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}
        </>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));
  