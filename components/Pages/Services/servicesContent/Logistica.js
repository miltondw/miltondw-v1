import { link } from "../../../../hooks/link";
import Image from "next/image";

export default function Logistica({ services }) {
  return (
    <div className="services-content__services" id="services-logistica">
      <h2 className="Title" id="logistica__title">
        Organización y logística Interna
      </h2>
      <div className="services-content">
        <p className="services-paragraph">
          La logística aumenta su importancia a la hora del plan estratégico de
          la empresa. Si antes era vista apenas como distribución y transporte,
          hoy es esencial para tu organización. La logística interna ayuda a
          controlar y alinear todos tus procesos.
        </p>
        <div
          className="services-logistica__content"
          id={`${link(services[1].items[0])}__content`}
        >
          <h3
            id={`${link(services[1].items[0])}__subtitle`}
            className="services-consultoria__title"
          >
            ¿Qué es la logística interna?
          </h3>
          <div
            className="services-logistica__content_paragraph"
            id={`${link(services[1].items[0])}__paragraph`}
          >
            <div className="services-image__web">
              <Image
                layout="responsive"
                src={"/img/services/logistic/logistica.jpg"}
                alt={"¿Qué es la logística interna?"}
                width={60}
                height={50}
              />
            </div>
            <p className="services-paragraph">
              Es el área de operaciones de apoyo que ocurren dentro de una
              empresa. Se pueden presenciar diversos procesos, como almacenaje,
              control de stock, sistemas de automatización, manejo de
              materiales, equipamientos y tecnología interna como software entre
              otros.
            </p>
          </div>
        </div>
        <div
          className="services-logistica__content"
          id={`${link(services[1].items[1])}__content`}
        >
          <h3
            id={`${link(services[1].items[1])}__subtitle`}
            className="services-consultoria__title"
          >
            ¿Por qué es importante tener una logística interna?
          </h3>
          <div
            className="services-logistica__content_paragraph"
            id={`${link(services[1].items[1])}__paragraph`}
          >
            <p className="services-paragraph">
              Un buen uso de la misma trae muchos beneficios y un salto
              exponecial en un mercado cada vez más competitivo. Una mala
              práctica en la logística interna crea problemas en la movilización
              de los materiales que suministran la línea de producción o una
              mala comunicación que a su vez afecta a toda la organización.
              Siendo así, el proceso productivo inviable al igual que la
              distribución física.
            </p>
            <p className="services-paragraph">
              Y no es de discutir que en la actualidad, el consumidor exige
              entregas a corto plazo. Esto solo existe con una buena gestión de
              logística interna. Sin la aplicación correcta de la logística
              interna, el desarrollo de las estrategias de la empresa y su
              crecimiento en el mercado están en peligro.
            </p>
          </div>
        </div>
        <div
          className="services-logistica__content"
          id={`${link(services[1].items[2])}__content`}
        >
          <h3
            id={`${link(services[1].items[2])}__subtitle`}
            className="services-consultoria__title"
          >
            ¿Dónde veo los beneficios?
          </h3>
          <div
            className="services-logistica__content_paragraph"
            id={`${link(services[1].items[2])}__paragraph`}
          >
            <p className="services-paragraph">
              Esto puedo variar dependiendo de organización, pero en beneficios
              generales podemos encontrar:
            </p>
            <ul className="services__ul">
              <li className="services__item consultoria-items-2">
                Distribución adecuada y ágil de materiales.
              </li>
              <li className="services__item consultoria-items-2">
                Reducción de existencias innecesarias en el Stock.
              </li>
              <li className="services__item consultoria-items-2">
                Mayor productividad de tu personal.
              </li>
              <li className="services__item consultoria-items-2">
                Optimización de la cadena de suministros.
              </li>
              <li className="services__item consultoria-items-2">
                Reducción de costes.
              </li>
              <li className="services__item consultoria-items-2">
                Mejor utilización del espacio de tu organización.
              </li>
              <li className="services__item consultoria-items-2">
                Agilidad en los procesos internos.
              </li>
              <li className="services__item consultoria-items-2">
                Atención más eficaz y satisfactoria al cliente.
              </li>
              <li className="services__item consultoria-items-2">
                Automatización de procesos.
              </li>
            </ul>
          </div>
        </div>
        <div
          className="services-logistica__content"
          id={`${link(services[1].items[3])}__content`}
        >
          <h3
            id={`${link(services[1].items[3])}__subtitle`}
            className="services-consultoria__title"
          >
            ¿Cuándo necesito una logística interna?
          </h3>
          <div
            className="services-logistica__content_paragraph"
            id={`${link(services[1].items[3])}__paragraph`}
          >
            <p className="services-paragraph">
              La cantidad del personal es importante, pero no indispensable, una
              Pyme también necesita una organización y logística adaptada a sus
              necesidades claramente entre mayor sea tu crecimiento la logística
              interna ira variando.
            </p>
            <h4 className="services-logistica__frase">
              !El mejor momento fue ayer para mañana será muy tarde, pero puedes
              empezar hoy!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
