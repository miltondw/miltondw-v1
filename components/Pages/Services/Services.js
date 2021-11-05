import CardServices from "./CardServices";
import services from "../../../db/services.json";
//Animation
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Particles from "react-tsparticles";
export default function Services() {
  const cardService = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const element = cardService.current;
    services.map((s) => {
      return gsap.to(element.querySelector(`#card-${s.id}`), {
        scale: 1,
        duration: 2,
        ease: "",
        delay: 0,
        scrollTrigger: {
          trigger: element.querySelector(`#card-${s.id}`),
        },
      });
      // return console.log(element.querySelector(`#card-${s.id}`));
    });
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
    <div id="servicios" className="services-home" ref={cardService}>
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
              speed: 10,
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
      <h2 className="Title" id="titleServices">
        Servicios
      </h2>

      {services.map((s) => {
        return (
          <CardServices
            key={s.id}
            src={s.src}
            title={s.title}
            description={s.description}
            link={s.link}
            id={`card-${s.id}`}
          />
        );
      })}
    </div>
  );
}
