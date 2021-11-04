import { link } from "../../../../hooks/link";
import Image from "next/image";

export default function Web({ services }) {
  return (
    <div className="services-content__services" id="services-landing">
      <h2 className="Title" id="landing__title">
        Creación de sitio Web
      </h2>
      <div className="services-content">
        <p className="services-paragraph">
          La creación de un sitio web no solo te dará credibilidad, sino que
          también ayudará a mostrar tus soluciones al mercado.
        </p>
        <div
          className="services-logistica__content"
          id={`${link(services[2].items[0])}__content`}
        >
          <h3
            id={`${link(services[2].items[0])}__subtitle`}
            className="services-consultoria__title"
          >
            ¿Por qué necesitas una página web?
          </h3>
          <div
            className="services-logistica__content_paragraph"
            id={`${link(services[2].items[0])}__paragraph`}
          >
            <div className="services-image__web">
              <Image
                layout="responsive"
                src={"/img/services/app-web/portatil.jpg"}
                alt={"¿Por qué necesitas una página web?"}
                width={60}
                height={50}
              />
            </div>
            <p className="services-paragraph">
              Según varios estudios, el 81% de las personas o empresas
              investigan un negocio o servicio en Internet antes de tomar una
              decisión de compra. Esto quiere decir que si no encuentran
              información de los servicios o productos de tu empresa en
              Internet, lógicamente van a encontrar información de tu
              competencia.
            </p>

            <p className="services-paragraph">
              Una página web no solo genera mayor credibilidad de tu empresa,
              también es una herramienta de bajo costo que puede atraer a nuevos
              clientes, ya que tus productos y/o servicios están disponibles las
              24 horas, los 365 días del año y con la nueva automatización las
              respuestas a los clientes serán más rápidas por lo que aumentaras
              tu experiencia de usuario
            </p>
          </div>
        </div>

        <div
          className="services-logistica__content"
          id={`${link(services[2].items[1])}__content`}
        >
          <h3
            id={`${link(services[2].items[1])}__subtitle`}
            className="services-consultoria__title"
          >
            ¿Cómo creamos tu sitio web?
          </h3>
          <div
            className="services-logistica__content_paragraph"
            id={`${link(services[2].items[1])}__paragraph`}
          >
            <p className="services-paragraph">
              Analizamos tus necesidades y tu público objetivo tomando en cuenta
              las metas que té has planteado conseguir con tu sitio web.
            </p>
            <h4 className="services-paragraph__subtitle">Te pediremos:</h4>
            <p className="services-paragraph">
              Distribución adecuada y ágil de materiales.
            </p>
            <p className="services-paragraph">Manual gráfico</p>
            <p className="services-paragraph">
              Analizamos tus necesidades y tu público objetivo tomando en cuenta
              las metas que té has planteado conseguir con tu sitio web.
            </p>
            <p className="services-paragraph">
              Te presentamos opciones de diseño responsive UX/UI (interfaz de
              usuario y experiencia de usuario) adaptado a tu industria, área de
              negocio y público.
            </p>
            <p className="services-paragraph">
              Discutimos el nombre de tu dominio que sería el nombre de tu
              empresa en la web.
            </p>
            <p className="services-paragraph">
              Te damos los puntos de información que será anexada a tu sitio web
              explicando el porqué de cada una para mayor comunicación con el
              usuario y tu empresa
            </p>
            <p className="services-paragraph">
              Te daremos una preparación técnica para mejorar nuestra
              comunicación en el proceso de desarrollo
            </p>
            <p className="services-paragraph">
              Durante la creación de tu sitio web Trabajaremos con Trello una
              herramienta para llevar el seguimiento de tu proyecto
            </p>
            <p className="services-paragraph">
              Antes y después del lanzamiento de la página web, ofrecemos
              soporte para resolver dudas y ofrecer estrategias de crecimiento
              con nuestro servicio de Marketing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
