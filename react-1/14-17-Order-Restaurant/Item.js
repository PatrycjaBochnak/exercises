const Item = () => {
    <li style={props.active ? {fontWeight: 'bold'} : {color: 'gray'} }>{props.name}</li>
}