import Image from "next/image";
export default function Inicio() {
  return (
    <div className="services-content-paragraph">
      <div className="services-image">
        <Image
          layout="responsive"
          src={"/img/services/consulting/consulting.jpg"}
          alt={"consultoria tecnoligaca-MiltonDw"}
          width={60}
          height={50}
        />
      </div>
      <p className="services-paragraph">
        Un crecimiento de adopción de la tecnología está Creciendo. Y está
        acelerando, también lo ha hecho la necesidad de adoptar rápidamente
        nuevas tecnologías para así aumentar el rendimiento.
      </p>
      <p className="services-paragraph">
        Las empresas necesitan un enfoque profesional y visionario diferente
        para desarrollar y aplicar la tecnología, uno que se adapte mejor a la
        realidad cambiante del mundo empresarial actual y prepararse para el que
        viene. Anticiparse y prepararse para esto requiere orientación y
        conocimientos específicos de la industria.
      </p>
      <p className="services-paragraph">
        Nuestra visión tecnológica y nuestros servicios de asesoría ayudan a
        evolucionar las organizaciones y a generar valor comercial gracias a
        arquitecturas tecnológicas adaptadas a tú industria.
      </p>
    </div>
  );
}
