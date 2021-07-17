import CardServices from "./CardServices";
import services from "../../../db/services.json";
//Animation
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
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
  return (
    <div id="servicios" className="services" ref={cardService}>
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
