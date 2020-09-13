import Router from "next/router";

const Posts = ({ pokemon }) => {
  return (
    <ul className="list-group">
      {pokemon.map((poke, index) => (
        <li
          key={index}
          style={{ cursor: "pointer" }}
          onClick={(e) => Router.push("/pokemon/[id]", `/pokemon/${poke.name}`)}
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <h5 style={{ cursor: "pointer", textTransform: "uppercase" }}>
            {poke.name}
          </h5>
        </li>
      ))}
    </ul>
  );
};

Posts.getInitialProps = async (ctx) => {
  return {};
};

export default Posts;
