import Header from "../components/Header";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Sore - Home</title>
      </Head>
      <Header />
    </>
  );
};

export default index;
