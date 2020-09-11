import Container from "../components/container";
import Head from "next/head";
import fetch from "isomorphic-fetch";
import Posts from "../components/Posts";

const Index = (props) => {
  return (
    <Container>
      <Head>
        <title>Principal</title>
      </Head>
      <h1>POKÉMON</h1>

      <Posts pokemon={props.pokemon} />
    </Container>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await res.json();

  let infor;

  data.results.forEach((info) => {
    infor = info.url;

    const url = {
      infor,
    };
  });

  return { pokemon: data.results };
};

export default Index;
