const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "female",
    },
    {
      id: 2,
      age: 18,
      name: "Kamil",
      sex: "male",
    },
    {
      id: 3,
      age: 23,
      name: "Darek",
      sex: "male",
    },
  ],
};

const Item = ({ user }) => (
  <div className="userInfo">
    <h1>{user.name}</h1>
    <p>Informacje o uzytkowniku</p>
    <p>Wiek: {user.age}</p>
    <p>Płeć: {user.sex}</p>
  </div>
);

class ListItems extends React.Component {
  render() {
    let users = this.props.data.users;
    users = users.filter((user) => user.sex === "male");
    const Items = users.map((user) => <Item key={user.id} user={user} />);
    return (
    <ul>{Items}</ul>

  )}
}
