function ListItem(props) {
    return <li>{props.x}</li>
  }
  
  function List(props) {
    return (
      <ul>
        {props.animals.map((x) => {
          return x.startsWith("S") ? <li key={x}>{x}</li> : null;
        })}
      </ul>
    );
  }
  
export default function App() {
    const animals = ["Lion", "Cow", "Snake", "Lizard", "Leopard"];
  
    return (
      <div>
        <h1>Animals: </h1>
        <List animals={animals} />
      </div>
    );
}
