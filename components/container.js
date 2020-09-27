import Navigation from "../components/Navigation";
import Head from "next/head";

const Container = (props) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cerulean/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <Navigation />

      <div className="container p-4">{props.children}</div>
    </>
  );
};

export default Container;
