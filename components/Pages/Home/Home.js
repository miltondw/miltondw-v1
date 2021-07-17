import { useEffect, useState, useRef } from "react";
import Redes from "../../../db/redes.json";
import gsap from "gsap";
export default function Home() {
  const [texto, setText] = useState("");
  useEffect(() => {
    machineStr("Desarrollador web.");
  }, []);
  const machineStr = (str) => {
    let arrFromStr = str.split("");
    let i = 0;
    let text = "";
    let printString = setInterval(function () {
      text += arrFromStr[i];
      setText(text);
      i++;
      if (i == arrFromStr.length) {
        clearInterval(printString);
      }
    }, 200);
  };
  const circleRef = useRef(null);
  const rightRef = useRef(null);
  useEffect(() => {
    gsap.to("#thirdCircle", {
      y: 1,
      duration: 3,
      ease: "bounce",
      delay: 1,
    });
    gsap.to("#rightRef", {
      x: 0.1,
      duration: 2,
      ease: "",
      delay: 1,
    });
  }, []);

  return (
    <div className="home">
      <div className="home-title">
        <h1 className="home-title__name">Milton Estrada</h1>
        <h2 className="home-title__subtitle" id="rightRef" ref={rightRef}>
          {texto}
          <span className="home-title__barra">|</span>
        </h2>
      </div>
      <div className="home-redes" ref={circleRef} id="thirdCircle">
        {Redes.map((r) => (
          <a
            target="_blank"
            rel="noreferrer"
            title={r.title}
            key={r.id}
            href={r.link}
          >
            <i className={`fab fa-${r.title}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
}
