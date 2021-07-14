import { useEffect, useState } from "react";
import Redes from "./redes.json";
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

  return (
    <div className="home">
      <div className="home-title">
        <h1 className="home-title__name">Milton Estrada</h1>
        <h2 className="home-title__subtitle">
          {texto}
          <span className="home-title__barra">|</span>
        </h2>
      </div>
      <div className="home-redes">
        {Redes.map((r) => (
          <a title={r.title} key={r.id} href={r.link}>
            <i className={`fab fa-${r.title}`}></i>
          </a>
        ))}
      </div>
    </div>
  );
}
