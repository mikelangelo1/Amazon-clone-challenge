import Head from "next/head";
import Header from "../components/Header/header";
import Shop from "../components/Shop/Shop";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon Clone</title>
      </Head>

      <Shop />
    </div>
  );
}
