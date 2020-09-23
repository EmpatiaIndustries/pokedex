import Router from "next/router";
import React, { useState } from "react";
const Posts = ({ pokemon }) => {
  const [filter, setFilter] = useState([]);

  return (
    <>
      <input
        className="form-control"
        style={{ marginBottom: 30 }}
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => {
          e.preventDefault();
          let valor = e.target.value;

          console.log(pokemon.filter((poke) => poke.name.includes(valor)));

          setFilter(pokemon.filter((poke) => poke.name.includes(valor)));
        }}
      />
      {filter.length >= 0 && (
        <ul className="list-group">
          {filter.map((poke, index) => (
            <li
              key={index}
              style={{ cursor: "pointer" }}
              onClick={(e) =>
                Router.push("/pokemon/[id]", `/pokemon/${poke.name}`)
              }
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            >
              <h5 style={{ cursor: "pointer", textTransform: "uppercase" }}>
                {poke.name}
              </h5>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Posts;
