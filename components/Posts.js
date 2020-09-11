const Posts = (props) => {
  return (
    <ul className="list-group">
      {props.pokemon.map((poke) => (
        <li key={poke.url} className="list-group-item list-group-item-action">
          <h5>{poke.name}</h5>
          <p>{poke.url}</p>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
