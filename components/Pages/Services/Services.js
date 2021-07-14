import CardServices from "./CardServices";
import services from "../../../db/services.json";
import { useEffect, useRef, useState } from "react";
export default function Services() {
 const [mover,setMover]= useState("")
  const animationCard = useRef();
  useEffect(() => {
    window.addEventListener("scroll", animation);
  }, []);
  const animation = () => {
    let positionObj = animationCard.current.getBoundingClientRect().top;
    console.log(positionObj,'obj');
    let SizeViewport = window.innerHeight / 3;
    console.log(SizeViewport,'viw');
   
  };
  return (
    <div id="servicios" className="services" onScroll={animation}>
      <h2 className="Title">Servicios</h2>
      {services.map((s) => (
        <CardServices
          key={s.id}
          src={s.src}
          title={s.title}
          description={s.description}
          link={s.link}
          referencia={animationCard}
        />
      ))}
    </div>
  );
}
