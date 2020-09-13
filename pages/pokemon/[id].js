import { useRouter } from "next/router";

import fetch from "isomorphic-fetch";
import Container from "../../components/container";

const PokeProfile = ({ poke }) => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <Container>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center bg-danger">
              <h1
                style={{
                  textTransform: "capitalize",
                  color: "white",
                }}
              >
                {poke.name}
              </h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 p-0 text-center">
                  <img
                    style={{ width: 250, height: "auto" }}
                    src={poke.images.front}
                    alt="frente"
                  />
                </div>
                <div className=" d-none d-sm-block col-xs-6 col-sm-6 col-md-6 p-0 text-center">
                  <img
                    style={{ width: 250, height: "auto" }}
                    src={poke.images.back}
                    alt="atras"
                  />
                </div>

                <div className="col-md-12 text-center">
                  <label className="h5"> TYPES: </label>

                  <p
                    style={{
                      color: "white",
                      borderRadius: "12px",
                      textTransform: "capitalize",
                      backgroundColor:
                        poke.types.type1 === "fire"
                          ? "#fd7d24"
                          : poke.types.type1 === "water"
                          ? "#4592c4"
                          : poke.types.type1 === "grass"
                          ? "#9bcc50"
                          : poke.types.type1 === "poison"
                          ? "#b97fc9"
                          : poke.types.type1 === "flying"
                          ? "#3dc7ef"
                          : poke.types.type1 === "bug"
                          ? "#729f3f"
                          : poke.types.type1 === "normal"
                          ? "#a4acaf"
                          : poke.types.type1 === "electric"
                          ? "#eed535"
                          : poke.types.type1 === "ground"
                          ? "#f7de3f"
                          : poke.types.type1 === "fairy"
                          ? "#fdb9e9"
                          : poke.types.type1 === "fighting"
                          ? "#d56723"
                          : poke.types.type1 === "psychic"
                          ? "#ee82ee"
                          : poke.types.type1 === "rock"
                          ? "#a38c21"
                          : poke.types.type1 === "steel"
                          ? "#d3d3d3"
                          : poke.types.type1 === "ice"
                          ? "#51c4e7"
                          : poke.types.type1 === "ghost"
                          ? "#7b62a3"
                          : poke.types.type1 === "dragon"
                          ? "#53a4cf"
                          : "",
                    }}
                  >
                    {poke.types.type1}
                  </p>
                  <p
                    style={{
                      color: "white",
                      borderRadius: "12px",
                      textTransform: "capitalize",
                      backgroundColor:
                        poke.types.type2 === "fire"
                          ? "#fd7d24"
                          : poke.types.type2 === "water"
                          ? "#4592c4"
                          : poke.types.type2 === "grass"
                          ? "#9bcc50"
                          : poke.types.type2 === "poison"
                          ? "#b97fc9"
                          : poke.types.type2 === "flying"
                          ? "#3dc7ef"
                          : poke.types.type2 === "bug"
                          ? "#729f3f"
                          : poke.types.type2 === "normal"
                          ? "#a4acaf"
                          : poke.types.type2 === "electric"
                          ? "#eed535"
                          : poke.types.type2 === "ground"
                          ? "#f7de3f"
                          : poke.types.type2 === "fairy"
                          ? "#fdb9e9"
                          : poke.types.type2 === "fighting"
                          ? "#d56723"
                          : poke.types.type2 === "psychic"
                          ? "#ee82ee"
                          : poke.types.type2 === "rock"
                          ? "#a38c21"
                          : poke.types.type2 === "steel"
                          ? "#d3d3d3"
                          : poke.types.type2 === "ice"
                          ? "#51c4e7"
                          : poke.types.type2 === "ghost"
                          ? "#7b62a3"
                          : poke.types.type2 === "dragon"
                          ? "#53a4cf"
                          : "",
                    }}
                  >
                    {poke.types.type2}
                  </p>
                  <label className="h5"> ABILITIES: </label>
                  <li
                    style={{
                      textTransform: "capitalize",
                      backgroundColor: "#f1f1f1",
                      borderRadius: "12px",
                    }}
                  >
                    {poke.abilities.ability1}
                  </li>
                  <br />
                  <li
                    style={{
                      textTransform: "capitalize",
                      backgroundColor: "#f1f1f1",
                      borderRadius: "12px",
                    }}
                  >
                    {poke.abilities.ability2}
                  </li>
                  <br />
                  <label className="h5"> EXPERIENCE BASE: </label>
                  <p
                    style={{ backgroundColor: "#f1f1f1", borderRadius: "12px" }}
                  >
                    {poke.baseExperience}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

PokeProfile.getInitialProps = async (ctx) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${ctx.query.id}`);
  const dataJSON = await res.json();

  const pokemon = {
    id: dataJSON.id,
    name: dataJSON.name,
    images: {
      front: dataJSON.sprites.front_default,
      back: dataJSON.sprites.back_default,
    },
    baseExperience: dataJSON.base_experience,
    types: {
      type1: dataJSON.types[0].type.name,
      type2: dataJSON.types[1] === undefined ? "" : dataJSON.types[1].type.name,
    },
    abilities: {
      ability1: dataJSON.abilities[0].ability.name,
      ability2:
        dataJSON.abilities[1] === undefined
          ? ""
          : dataJSON.abilities[1].ability.name,
    },
  };

  return {
    poke: pokemon,
  };
};

export default PokeProfile;
