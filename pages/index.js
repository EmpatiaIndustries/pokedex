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
      <h1 style={{ color: "red" }}>CHOOSE YOUR BUDDY</h1>

      <Posts pokemon={props.pokemon} />
    </Container>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await res.json();

  // let url = [];
  // data.results.forEach((poke) => {
  //   url.push(poke.url);
  // });

  return { pokemon: data.results };
};

export default Index;
