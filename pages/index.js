import Head from "next/head";
import Layaut from "../components/Template/Layaut";
// Pages
import Home from "../components/Pages/Home/Home";
import Services from "../components/Pages/Services/Services";
import About from "../components/Pages/About/About";
export default function App() {
  return (
    <Layaut>
      <Head>
        <title>Desarrollo Web</title>
        <meta
          name="description"
          content="milton estrada consultor tecnologico y desarrollador web como analista freelancer"
        />
        <meta name="theme-color" content="#010101" />
      </Head>
      <Home />
      <Services />
      <About />
    </Layaut>
  );
}
