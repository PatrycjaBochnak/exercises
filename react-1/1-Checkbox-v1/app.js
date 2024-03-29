const PositiveMessage = () => <p>Mozesz obejrzeć film. Zapraszamy!</p>;
const NegativeMesage = () => <p>Nie mozesz obejrzeć tego filmu</p>;

class CheckboxAgeConfirmation extends React.Component {
  state = {
    isConfirmed: false,
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
    });
  };

  displayMessage = () => {
    if (this.state.isConfirmed) {
      return <PositiveMessage />;
    } else {
      return <NegativeMesage />;
    }
  };
  render() {
    return (
      <>
        <h1>Kup bilet na horror roku</h1>
        <input
          type="checkbox"
          id="age"
          onChange={this.handleCheckboxChange}
          checked={this.state.isConfirmed}
        />
        <label htmlFor="age">Mam co najmniej 16 lat</label>
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<CheckboxAgeConfirmation />, document.getElementById("root"));
