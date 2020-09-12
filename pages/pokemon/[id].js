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
            <div className="card-header text-center">
              <h1>{poke.name}</h1>
            </div>
            <div style={{ color: "green" }} className="card-body">
              <div className="row">
                <div className="col-md-6 p-0 text-center">
                  <img
                    style={{ width: 250, height: "auto" }}
                    src={poke.images.front}
                    alt="frente"
                  />
                </div>
                <div className="col-md-6 p-0 text-center">
                  <img
                    style={{ width: 250, height: "auto" }}
                    src={poke.images.back}
                    alt="atras"
                  />
                </div>
                <div className="col-md-12 text-center">
                  <label className="h3"> TYPES: </label>
                  <p>{poke.types.type1 + " " + poke.types.type2}</p>
                  <label className="h3"> ABILITIES: </label>
                  <p>
                    {poke.abilities.ability1 + " " + poke.abilities.ability2}
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
