import Layaut from "../../components/Template/Layaut";
import services from "../../db/services.json";
//Animation
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Particles from "react-tsparticles";

//Content
import ServicesNavbar from "../../components/Pages/Services/servicesContent/ServicesNavbar";
import Inicio from "../../components/Pages/Services/servicesContent/Inicio";
import Consultoria from "../../components/Pages/Services/servicesContent/Consultoria";
import Logistica from "../../components/Pages/Services/servicesContent/Logistica";
import Web from "../../components/Pages/Services/servicesContent/Web";
import AppWeb from "../../components/Pages/Services/servicesContent/AppWeb";
//Hooks
import { useRef, useEffect } from "react";
import { link } from "../../hooks/link";
import Head from "next/head";
import Shop from "../../components/Pages/Services/servicesContent/Shop";
import Marketing from "../../components/Pages/Services/servicesContent/Marketing";
export default function Servicios() {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(`#${link(services[0].items[0])}__content`),
      {
        opacity: 0,
        y: "200%",
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: element.querySelector(
            `#${link(services[0].items[0])}__subtitle`
          ),
        },
      }
    );
    gsap.fromTo(
      element.querySelector(`#logistica__title`),
      {
        opacity: 0,
        y: "200%",
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: element.querySelector(`#services-logistica`),
        },
      }
    );
    for (let j = 1; j <= 5; j++) {
      for (let i = 0; i <= services[j].items.length - 1; i++) {
        gsap.fromTo(
          element.querySelectorAll(`#${link(services[j].items[i])}__subtitle`),
          {
            opacity: 0,
            y: "200%",
          },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            scrollTrigger: {
              trigger: element.querySelector(
                `#${link(services[j].items[i])}__content`
              ),
            },
          }
        );
        gsap.fromTo(
          element.querySelectorAll(`#${link(services[j].items[i])}__paragraph`),
          {
            opacity: 0,
            scale: 0,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 2,
            scrollTrigger: {
              trigger: element.querySelector(
                `#${link(services[j].items[i])}__content`
              ),
            },
          }
        );
      }
    }
    for (let i = 2; i <= services; i++) {
      gsap.fromTo(
        element.querySelectorAll(`.consultoria-items-${i}`),
        {
          opacity: 0,
          y: "200%",
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          scrollTrigger: {
            trigger: element.querySelector(
              `#${link(services[0].items[i - 1])}__subtitle`
            ),
          },
        }
      );
    }
    for (let i = 0; i <= 2; i++) {
      gsap.fromTo(
        element.querySelector(`#${link(services[0].items[i])}__subtitle`),
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: element.querySelector(
              `#${link(services[0].items[i])}__subtitle`
            ),
          },
        }
      );
    }
    for (let i = 1; i <= 3; i++) {
      gsap.fromTo(
        element.querySelectorAll(`.sub-${i}`),
        {
          y: "200%",
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: element.querySelector(`.sub_${i}`),
          },
        }
      );
    }
    gsap.to(".services-content__nav", {
      x: 0,
      duration: 2,
      opacity: 1,
    });
    gsap.to(".Title", {
      y: 0,
      duration: 2,
      opacity: 1,
    });
    gsap.to(".services-content-paragraph", {
      y: 0,
      duration: 2,
      opacity: 1,
    });
    gsap.to(".services-image", {
      x: 0,
      duration: 2,
      delay: 2,
      opacity: 1,
    });
    gsap.fromTo(
      element.querySelector(`#services-paragraph`),
      {
        opacity: 0,
        y: "200%",
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: element.querySelector(`.services-consultoria`),
        },
      }
    );
    gsap.fromTo(
      element.querySelector(`.services-content__nav`),
      {
        opacity: 0,
        x: "-200%",
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
      }
    );
  }, []);
  //Particles
  const particlesInit = (main) => {
    // console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };
  return (
    <Layaut>
      <Head>
        <title>Servicios</title>
        <meta
          name="description"
          content="En miltondw te ofrecemos los servicios que tu empresa necesita para revolucionar a la industrias 4.0 y aquí te apollamos en todo tu camino"
        />
      </Head>
      <div className="services" ref={ref}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#01010100",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
        <h1 className="Title">Servicios</h1>
        <div className="services-content">
          <ServicesNavbar services={services} />
          <div className="services--conte">
            <Inicio />
            <Consultoria services={services} />
            <Logistica services={services} />
            <Web services={services} />
            <AppWeb services={services} />
            <Shop services={services} />
            <Marketing services={services} />
          </div>
        </div>
      </div>
    </Layaut>
  );
}
