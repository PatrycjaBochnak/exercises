const ValidationMessage = (props) => {
  const { txt } = props;
  return <p>{txt}</p>;
};
const OrderForm = (props) => {
  const { submit, isConfirmed, change } = props;
  return (
    <form onSubmit={submit}>
      <input
        type="checkbox"
        id="age"
        onChange={change}
        checked={isConfirmed}
      />
      <label htmlFor="age">Mam co najmniej 16 lat</label>
      <br />
      <button type="submit">Kup bilet</button>
    </form>
  );
};
class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false,
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true,
      });
    }
  };

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt="Mozesz obejrzeć film. Zapraszamy!" />;
      } else {
        return <ValidationMessage txt="Nie mozesz obejrzeć tego filmu" />;
      }
    } else {
      return null;
    }
  };

  render() {
    const { isConfirmed, isFormSubmitted } = this.state;

    return (
      <>
        <h1>Kup bilet na horror roku</h1>
        <OrderForm
          change={this.handleCheckboxChange}
          submit={this.handleFormSubmit}
          checked={isConfirmed}
        />
        {this.displayMessage({ isConfirmed }, { isFormSubmitted })}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
