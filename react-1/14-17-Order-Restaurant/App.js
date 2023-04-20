class App extends React.Component {
  state = {
    items: [
      { id: 1, content: "herbata", active: true },
      { id: 2, content: "ziemniaki", active: false },
      { id: 3, content: "kasza", active: false },
      { id: 4, content: "zupa wodna", active: false },
      { id: 5, content: "wrzątek", active: false },
      { id: 6, content: "chleb", active: true },
    ],
  };

  handleChangeStatus = (id) => {
    const items = this.state.items.map((item) => {
      if (id === item.td) {
        item.active = !item.active;
      }
      return item;
    });
    this.setState({
      items: items,
    });
  };

  render() {
    return (
      <>
        <Header items={this.state.items} />
        <ListItems
          items={this.state.items}
          changeStatus={this.handleChangeStatus}
        />
      </>
    );
  }
}
