import Layaut from "../components/Template/Layaut";
import Head from "next/head";
import Home from "../components/Home/Home";
import Services from "../components/Services/Services";
export default function App() {
  return (
    <Layaut>
      <Head>
        <title>Desarrollo Web</title>
      </Head>
      <Home />
      <Services />
    </Layaut>
  );
}
