//Next
import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
//Animation
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default function Layaut({ children }) {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector("#titleServices"),
      {
        opacity: 0,
        y: "200%",
      },
      {
        opacity: 1,
        duration: 2,
        y: 0,
        ease: "bounce",
        scrollTrigger: {
          trigger: element.querySelector("#titleServices"),
        },
      }
    );
    // gsap.to(element.querySelector("#titleServices"), {
    //   y: 0,
    //   duration: 2,
    //   opacity: 1,
    //   ease: "bounce",
    //   delay: 0,
    //   scrollTrigger: {
    //     trigger: element.querySelector("#titleServices"),
    //   },
    // });
  }, []);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector("#titleAbout"),
      {
        opacity: 0,
        y: "200%",
      },
      {
        opacity: 1,
        duration: 2,
        y: 0,
        ease: "bounce",
        scrollTrigger: {
          trigger: element.querySelector("#titleAbout"),
        },
      }
    );
    // gsap.to(element.querySelector("#titleAbout"), {
    //   y: 0,
    //   duration: 2,
    //   opacity: 1,
    //   ease: "bounce",
    //   delay: 0,
    //   scrollTrigger: {
    //     trigger: element.querySelector("#titleAbout"),
    //   },
    // });
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
          integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar />
      <main className="main" ref={ref}>
        {children}
      </main>
      <Footer />
    </>
  );
}
