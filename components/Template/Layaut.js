//Next
import Head from "next/head";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

//Animation
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default function Layaut({ children }) {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const btn = (e) => {
    e.preventDefault();
    document
      .getElementById("main")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };
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
    window.addEventListener("scroll", function () {
      let a = document.getElementById("main");
      let p = a.getBoundingClientRect().top;
      if (p < -400) {
        gsap.to("#btn-up", {
          scale: 1,
          duration: 1,
        });
      }
      if (p > -400) {
        gsap.to("#btn-up", {
          scale: 0,
        });
      }
    });
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
      <main id="main" className="main" ref={ref}>
        <Link href="#">
          <a
            id={"btn-up"}
            className="btn-up"
            onClick={(e) => {
              btn(e);
            }}
          >
            <i className="fas fa-arrow-circle-up"></i>
          </a>
        </Link>
        {children}
      </main>
      <Footer />
    </>
  );
}
