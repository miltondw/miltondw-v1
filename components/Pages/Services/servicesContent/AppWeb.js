import { link } from "../../../../hooks/link";
import Image from "next/image";

export default function AppWeb({ services }) {
  return (
    <div className="services-content__services" id="services-app">
      <h2 className="Title" id="app__title">
        Aplicaciones Web
      </h2>
      <div className="services-content">
        <p className="services-paragraph">
          Las Aplicaciones Web son herramientas que los usuarios pueden utilizar
          accediendo a un sitio web a través de internet esto hace que las
          aplicaciones web sean tan potentes porque no necesitas preocuparte por
          que se dañe tu computadora o perder un dato todo, ya que todo estará
          respaldado en la nube.
        </p>
        <div
          className="services-logistica__content"
          id={`${link(services[3].items[0])}__content`}
        >
          <h3
            id={`${link(services[3].items[0])}__subtitle`}
            className="services-consultoria__title"
          >
            ¿Cuáles son los beneficios de una aplicación web?
          </h3>
          <div
            className="services-logistica__content_paragraph"
            id={`${link(services[3].items[0])}__paragraph`}
          >
            <div className="services-image__web">
              <Image
                layout="responsive"
                src={"/img/services/app-web/codigo.jpg"}
                alt={"codigo web"}
                width={60}
                height={50}
              />
            </div>
            <p className="services-paragraph">
              Ayudan a reducir los costos para las empresas y los usuarios
              individuales
            </p>
            <p className="services-paragraph">
              Esto se debe a que requieren menos mantenimiento y también pueden
              tener requisitos más bajos para las computadoras de los usuarios
              Esto se debe a que la exigencia de procesamiento está en otro
              lugar
            </p>
            <p className="services-paragraph">
              Se diseñan y fabrican de manera adaptada para soluciones de su
              negocio
            </p>
            <p className="services-paragraph">
              Estas aplicaciones no necesitan instalarse en un disco duro porque
              se puede acceder a ellas completamente en línea. Por lo tanto, los
              usuarios pueden ahorrar espacio y evitar la molestia de
              desinstalar y reinstalar programas cuando comienzan a quedarse sin
              espacio.
            </p>

            <p className="services-paragraph">
              Tampoco hay problemas de compatibilidad, ya que todos los usuarios
              acceden a la misma versión.
            </p>
            <p className="services-paragraph">
              Además, las aplicaciones web pueden ejecutarse en múltiples
              plataformas siempre que los navegadores sean compatibles.
            </p>
            <p className="services-paragraph">
              Esto permite que las personas de diferentes sistemas operativos o
              dispositivos conectarse sin ningún problema.
            </p>
            <p className="services-paragraph">
              Finalmente, otro beneficio de usar aplicaciones web es que las
              actualizaciones son automáticas y, debido a que se aplican de
              forma centralizada, todos los usuarios deberían trabajar desde la
              misma versión.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
