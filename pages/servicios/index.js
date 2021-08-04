import Layaut from "../../components/Template/Layaut";
import services from "../../db/services.json";
import Link from "next/link";
import Image from "next/image";
//Animation
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
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

    for (let i = 2; i <= 3; i++) {
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
  }, []);
  useEffect(() => {
    const element = ref.current;
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
  const handleClick = (e) => {
    e.preventDefault();
    let ancla = e.target.hash.substring(1);
    document
      .getElementById(ancla)
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };
  const [arrow, setArrow] = useState({
    consultoria: false,
    logistica: false,
    landing: false,
    app: false,
    shop: false,
    marketing: false,
  });
  const subNavbar = (e) => {
    setArrow({
      ...arrow,
      [e]: !arrow[e],
    });
  };
  const link = (cadena) => {
    let arr = cadena.toLocaleLowerCase().split("");
    for (let i in arr) {
      if (arr[i] === "¿" || arr[i] === "?") {
        arr.splice(i, 1);
      }
      if (arr[i] === "á") {
        arr.splice(i, 1, "a");
      }
      if (arr[i] === "é") {
        arr.splice(i, 1, "e");
      }
      if (arr[i] === "í") {
        arr.splice(i, 1, "i");
      }
      if (arr[i] === "ó") {
        arr.splice(i, 1, "o");
      }
      if (arr[i] === "ú") {
        arr.splice(i, 1, "u");
      }
    }
    let link = arr.join("").split(" ").join("-");
    return link;
  };
  return (
    <Layaut>
      <div className="services" ref={ref}>
        <h1 className="Title">Servicios</h1>
        <div className="services-content">
          <nav className="services-content__nav">
            <ul className="services-nav">
              {services.map((s) => (
                <li key={s.id} className="services-nav__item">
                  <i
                    className={`fas fa-${s.icon} services-subNavbar__icon`}
                  ></i>
                  <Link href={`/servicios#services-${s.link}`}>
                    <a
                      onClick={(e) => {
                        handleClick(e);
                      }}
                      className="services-nav__link"
                    >
                      {s.title}
                    </a>
                  </Link>

                  <i
                    className={`fas fa-chevron-up ${
                      arrow[s.link] ? "arrow--active" : "arrow--false"
                    }`}
                    id={s.link}
                    onClick={(e) => subNavbar(e.target.id)}
                  ></i>
                  {s.items ? (
                    <ul
                      className={`subNavbar ${
                        arrow[s.link] ? "subNavbar--active" : "subNavbar--false"
                      }`}
                      id={s.link}
                    >
                      {s.items.map((item) => (
                        <li className="subNavbar__items" key={link(item)}>
                          <Link href={`/servicios#${link(item)}__subtitle`}>
                            <a
                              onClick={(e) => {
                                handleClick(e);
                              }}
                            >
                              {" "}
                              {item}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="services--conte">
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
                Un crecimiento de adopción de la tecnología está Creciendo. Y
                está acelerando, también lo ha hecho la necesidad de adoptar
                rápidamente nuevas tecnologías para así aumentar el rendimiento.
              </p>
              <p className="services-paragraph">
                Las empresas necesitan un enfoque profesional y visionario
                diferente para desarrollar y aplicar la tecnología, uno que se
                adapte mejor a la realidad cambiante del mundo empresarial
                actual y prepararse para el que viene. Anticiparse y prepararse
                para esto requiere orientación y conocimientos específicos de la
                industria.
              </p>
              <p className="services-paragraph">
                Nuestra visión tecnológica y nuestros servicios de asesoría
                ayudan a evolucionar las organizaciones y a generar valor
                comercial gracias a arquitecturas tecnológicas adaptadas a tú
                industria.
              </p>
            </div>
            <div
              className="services-content__services"
              id="services-consultoria"
            >
              <div className="services-consultoria">
                <h2 className="Title" id={`${link(services[0].link)}__title`}>
                  Consultoría Tecnológica
                </h2>
                <p
                  className="services-consultoria__paragraph"
                  id="services-paragraph"
                >
                  Nos enfocamos en aconsejar a otras empresas cómo usar las
                  tecnologías para conseguir sus objetivos. Te ayudamos a
                  gestionar, implementar y administran los sistemas tecnológicos
                  que tu empresa requiera.
                </p>

                <h3
                  id={`${link(services[0].items[0])}__subtitle`}
                  className="services-consultoria__title"
                >
                  ¿Por qué pedir una consultoría tecnológica?
                </h3>

                <div
                  className="services-consultoria__content"
                  id={`${link(services[0].items[0])}__content`}
                >
                  <div className="services-image">
                    <Image
                      layout="responsive"
                      src={"/img/services/consulting/question.jpg"}
                      alt={"consultoria tecnoligaca-MiltonDw"}
                      width={60}
                      height={50}
                    />
                  </div>
                  <p className="services-consultoria__paragraph">
                    La tecnología se ha convertido en una herramienta
                    fundamental del éxito. Debido a su rápido crecimiento y
                    expansión en prácticamente todas las áreas empresariales, es
                    más importante que nunca que las organizaciones comprendan
                    cómo aprovechar al máximo el rendimiento y los datos que
                    arrojan las diversas tecnologías.
                  </p>
                </div>

                <h3
                  id={`${link(services[0].items[1])}__subtitle`}
                  className="services-consultoria__title"
                >
                  ¿Qué buscamos?
                </h3>
                <div
                  className="services-consultoria__content"
                  id="consultoria-2"
                >
                  <ul className="services-consultoria__ul">
                    <li className="services__item consultoria-items-2">
                      Que la empresa que contrata el servicio puede fijar todos
                      sus esfuerzos en un objetivo establecido, lo que aumenta
                      la rentabilidad del negocio en sí.
                    </li>
                    <li className="services__item consultoria-items-2">
                      Acelerar tu crecimiento, reducir costos, disminuir
                      riesgos, atraer y desarrollar talentos y optimizar
                      procesos importantes
                    </li>
                    <li className="services__item consultoria-items-2">
                      Se pueden ahorrar los gastos producidos por las áreas
                      operativas afectadas reduciendo el nivel de estrés y de
                      asignaciones rutinarias de la empresa, ya que se optimiza
                      con los servicios tecnológicos que se recomienden.
                    </li>
                    <li className="services__item consultoria-items-2">
                      Dar una contratación temporal para un proyecto. Donde la
                      contratación permanente de empleados no es necesaria y así
                      disminuir el gasto operario y aprovechar la experiencia y
                      conocimiento puntual del consultor.
                    </li>
                    <li className="services__item consultoria-items-2">
                      Lograr tus objetivos con recomendaciones y sugerencias
                      externas y más objetivas
                    </li>
                  </ul>
                </div>

                <h3
                  id={`${link(services[0].items[2])}__subtitle`}
                  className="services-consultoria__title"
                >
                  ¿Cómo hacemos la consultoría?
                </h3>
                <div
                  className="services-consultoria__content"
                  id="consultoria-3"
                >
                  <h4 className="services-consultoria__sub-title sub_1 consultoria-items-3">
                    PASO 1: Análisis primario de la empresa:
                  </h4>
                  <p className="services-consultoria__paragraph sub-1 consultoria-items-3">
                    Aquí no solo analizamos que necesita o que creé necesitar en
                    aspectos técnicos. También profundizamos en sus objetivos y
                    el análisis del personal porque el factor humano juega un
                    papel muy importante. Las siguientes preguntas nos ayudan a
                    evaluar muchos puntos de vista y análisis general:
                  </p>
                  <ul className="services__ul sub-1">
                    <li className="services__item consultoria-items-3">
                      ¿Cómo se está implementando la tecnología en su negocio?
                    </li>
                    <li className="services__item consultoria-items-3">
                      ¿Qué soluciones de software utiliza actualmente y cómo las
                      aprovecha?
                    </li>
                    <li className="services__item consultoria-items-3">
                      ¿Qué problemas le han estado preocupando con su software o
                      red?
                    </li>
                    <li className="services__item consultoria-items-3">
                      ¿Cada cuanto los empleados reciben apoyo o estudio de la
                      tecnología existente?
                    </li>
                    <li className="services__item consultoria-items-3">
                      ¿Qué tan rápido está creciendo su organización?
                    </li>
                    <li className="services__item consultoria-items-3">
                      ¿Tiene planes u objetivos para la nueva tecnología o la
                      que ya estás utilizando?
                    </li>
                    <li className="services__item consultoria-items-3">
                      ¿Qué procesos hay en tu empresa?
                    </li>
                    <li className="services__item consultoria-items-3">
                      ¿Qué procesos estás optimizando con la tecnología que
                      implementas?
                    </li>
                    <li className="services__item consultoria-items-3">
                      ¿Con cuánta frecuencia le haces seguimiento a tus
                      procesos?
                    </li>
                  </ul>
                  <p className="services-consultoria__paragraph sub-1 consultoria-items-3">
                    Entender la personalidad y tus expectativas, nos ayuda a
                    implementar la mejor tecnología, tener los roles claramente
                    definidos: ayuda a entender que responsabilidades nuevas
                    tendrán al implementar las soluciones que te ofrezcamos y
                    poder visualizar tu éxito.
                  </p>

                  <h4 className="services-consultoria__sub-title sub_2 consultoria-items-3">
                    PASO 3: EVALUACIONES
                  </h4>
                  <p className="sub-2 services-consultoria__paragraph consultoria-items-3">
                    Después recopilar los datos en nuestro análisis primario de
                    descubrimiento inicial, y de cualquier tema de seguimiento,
                    pasamos a recopilar datos concretos sobre la tecnología
                    existente con una evaluación. La información técnica que
                    obtenemos nos dice:
                  </p>
                  <ul className="sub-2 services__ul">
                    <li className="services__item consultoria-items-3">
                      Lo que existe actualmente
                    </li>
                    <li className="services__item consultoria-items-3">
                      Que es demasiado viejo u obsoleto
                    </li>
                    <li className="services__item consultoria-items-3">
                      Qué podría simplificarse o mejorarse
                    </li>
                    <li className="services__item consultoria-items-3">
                      Lo que falta por implementar
                    </li>
                    <li className="services__item consultoria-items-3">
                      Gastos innecesarios
                    </li>
                    <li className="services__item consultoria-items-3">
                      Personal implicado
                    </li>
                  </ul>

                  <h4 className="services-consultoria__sub-title sub_2 consultoria-items-3">
                    PASO 3: OFRECER SOLUCIONES
                  </h4>
                  <p className="sub-3 services-consultoria__paragraph consultoria-items-3">
                    En esta etapa la propuesta y recomendaciones que hemos
                    tomado se basa en toda la información que se ha solicitado
                    para devolver ideas sólidas. Teniendo en cuenta todo lo que
                    sabemos, proponemos soluciones que ayudarán a solucionar sus
                    problemas y adaptar la tecnología para sus necesidades
                    futuras. Damos prioridad a los problemas más críticos,
                    mientras nos mantenemos dentro del presupuesto requerido.
                  </p>
                </div>

                <h5 className="services-frase">
                  Recuerda. Nosotros aconsejamos <span>¡Tú decides!</span>
                </h5>
              </div>
            </div>

            <div className="services-content__services" id="services-logistica">
              <h2 className="Title">Organización y logística Interna</h2>
              <div className="services-content">
                <p className="services-paragraph">
                  La logística aumenta su importancia a la hora del plan
                  estratégico de la empresa. Si antes era vista apenas como
                  distribución y transporte, hoy es esencial para tu
                  organización. La logística interna ayuda a controlar y alinear
                  todos tus procesos.
                </p>
                <h3
                  id={`${link(services[1].items[0])}__subtitle`}
                  className="services-consultoria__title"
                >
                  ¿Qué es la logística interna?
                </h3>
                <div className="services-logistica__content_paragraph">
                  <p className="services-paragraph">
                    Es el área de operaciones de apoyo que ocurren dentro de una
                    empresa. Se pueden presenciar diversos procesos, como
                    almacenaje, control de stock, sistemas de automatización,
                    manejo de materiales, equipamientos y tecnología interna
                    como software entre otros.
                  </p>
                </div>
                <h3
                  id={`${link(services[1].items[1])}__subtitle`}
                  className="services-consultoria__title"
                >
                  ¿Por qué es importante tener una logística interna?
                </h3>
                <div className="services-logistica__content_paragraph">
                  <p className="services-paragraph">
                    Un buen uso de la misma trae muchos beneficios y un salto
                    exponecial en un mercado cada vez más competitivo. Una mala
                    práctica en la logística interna crea problemas en la
                    movilización de los materiales que suministran la línea de
                    producción o una mala comunicación que a su vez afecta a
                    toda la organización. Siendo así, el proceso productivo
                    inviable al igual que la distribución física.
                  </p>
                  <p className="services-paragraph">
                    Y no es de discutir que en la actualidad, el consumidor
                    exige entregas a corto plazo. Esto solo existe con una buena
                    gestión de logística interna. Sin la aplicación correcta de
                    la logística interna, el desarrollo de las estrategias de la
                    empresa y su crecimiento en el mercado están en peligro.
                  </p>
                </div>
              </div>
              <h3
                id={`${link(services[1].items[2])}__subtitle`}
                className="services-consultoria__title"
              >
                ¿Dónde veo los beneficios?
              </h3>
              <div className="services-logistica__content_paragraph">
                <p className="services-paragraph">
                  Esto puedo variar dependiendo de organización, pero en
                  beneficios generales podemos encontrar:
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
            <h3
              id={`${link(services[1].items[3])}__subtitle`}
              className="services-consultoria__title"
            >
              ¿Cuándo necesito una logística interna?
            </h3>
            <div className="services-logistica__content_paragraph">
              <p className="services-paragraph">
                La cantidad del personal es importante, pero no indispensable,
                una Pyme también necesita una organización y logística adaptada
                a sus necesidades claramente entre mayor sea tu crecimiento la
                logística interna ira variando.
              </p>
              <h4 className="services-logistica__frase">
                !El mejor momento fue ayer para mañana será muy tarde, pero
                puedes empezar hoy!
              </h4>
            </div>

            <div className="services-content__services" id="services-landing">
              <h2 className="Title">Creación de sitio Web</h2>
            </div>

            <div className="services-content__services" id="services-app">
              <h2 className="Title">Aplicaciones Web</h2>
            </div>

            <div className="services-content__services" id="services-shop">
              <h2 className="Title">Desarrollo de Tienda Online</h2>
            </div>

            <div className="services-content__services" id="services-marketing">
              <h2 className="Title">Marketing Digital</h2>
            </div>
          </div>
        </div>
      </div>
    </Layaut>
  );
}
