import Router from "next/router";

const Posts = ({ pokemon }) => {
  return (
    <ul className="list-group">
      {pokemon.map((poke, index) => (
        <li
          key={index}
          onClick={(e) => Router.push("/pokemon/[id]", `/pokemon/${poke.name}`)}
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <h5>{poke.name}</h5>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
