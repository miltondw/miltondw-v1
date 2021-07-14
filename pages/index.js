import Head from "next/head";
import Layaut from "../components/Template/Layaut";
// Pages
import Home from "../components/pages/Home/Home";
import Services from "../components/pages/Services/Services";
import About from "../components/pages/About/About";
// import Contact from "../components/Pages/Contact/Contact";
export default function App() {
  return (
    <Layaut>
      <Head>
        <title>Desarrollo Web</title>
      </Head>
      <Home />
      <Services />
      <About />
      {/* <Contact /> */}
    </Layaut>
  );
}
