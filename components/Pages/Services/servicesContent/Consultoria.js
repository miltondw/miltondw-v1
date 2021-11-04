import Image from "next/image";
import { link } from "../../../../hooks/link";
export default function Consultoria({ services }) {
  return (
    <div className="services-content__services" id="services-consultoria">
      <div className="services-consultoria">
        <h2 className="Title" id={`${link(services[0].link)}__title`}>
          Consultoría Tecnológica
        </h2>
        <p className="services-consultoria__paragraph" id="services-paragraph">
          Nos enfocamos en aconsejar a otras empresas cómo usar las tecnologías
          para conseguir sus objetivos. Te ayudamos a gestionar, implementar y
          administran los sistemas tecnológicos que tu empresa requiera.
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
            La tecnología se ha convertido en una herramienta fundamental del
            éxito. Debido a su rápido crecimiento y expansión en prácticamente
            todas las áreas empresariales, es más importante que nunca que las
            organizaciones comprendan cómo aprovechar al máximo el rendimiento y
            los datos que arrojan las diversas tecnologías.
          </p>
        </div>

        <h3
          id={`${link(services[0].items[1])}__subtitle`}
          className="services-consultoria__title"
        >
          ¿Qué buscamos?
        </h3>
        <div className="services-consultoria__content" id="consultoria-2">
          <ul className="services-consultoria__ul">
            <li className="services__item consultoria-items-2">
              Que la empresa que contrata el servicio puede fijar todos sus
              esfuerzos en un objetivo establecido, lo que aumenta la
              rentabilidad del negocio en sí.
            </li>
            <li className="services__item consultoria-items-2">
              Acelerar tu crecimiento, reducir costos, disminuir riesgos, atraer
              y desarrollar talentos y optimizar procesos importantes
            </li>
            <li className="services__item consultoria-items-2">
              Se pueden ahorrar los gastos producidos por las áreas operativas
              afectadas reduciendo el nivel de estrés y de asignaciones
              rutinarias de la empresa, ya que se optimiza con los servicios
              tecnológicos que se recomienden.
            </li>
            <li className="services__item consultoria-items-2">
              Dar una contratación temporal para un proyecto. Donde la
              contratación permanente de empleados no es necesaria y así
              disminuir el gasto operario y aprovechar la experiencia y
              conocimiento puntual del consultor.
            </li>
            <li className="services__item consultoria-items-2">
              Lograr tus objetivos con recomendaciones y sugerencias externas y
              más objetivas
            </li>
          </ul>
        </div>

        <h3
          id={`${link(services[0].items[2])}__subtitle`}
          className="services-consultoria__title"
        >
          ¿Cómo hacemos la consultoría?
        </h3>
        <div className="services-consultoria__content" id="consultoria-3">
          <h4 className="services-consultoria__sub-title sub_1 consultoria-items-3">
            PASO 1: Análisis primario de la empresa:
          </h4>
          <p className="services-consultoria__paragraph sub-1 consultoria-items-3">
            Aquí no solo analizamos que necesita o que creé necesitar en
            aspectos técnicos. También profundizamos en sus objetivos y el
            análisis del personal porque el factor humano juega un papel muy
            importante. Las siguientes preguntas nos ayudan a evaluar muchos
            puntos de vista y análisis general:
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
              ¿Qué problemas le han estado preocupando con su software o red?
            </li>
            <li className="services__item consultoria-items-3">
              ¿Cada cuanto los empleados reciben apoyo o estudio de la
              tecnología existente?
            </li>
            <li className="services__item consultoria-items-3">
              ¿Qué tan rápido está creciendo su organización?
            </li>
            <li className="services__item consultoria-items-3">
              ¿Tiene planes u objetivos para la nueva tecnología o la que ya
              estás utilizando?
            </li>
            <li className="services__item consultoria-items-3">
              ¿Qué procesos hay en tu empresa?
            </li>
            <li className="services__item consultoria-items-3">
              ¿Qué procesos estás optimizando con la tecnología que implementas?
            </li>
            <li className="services__item consultoria-items-3">
              ¿Con cuánta frecuencia le haces seguimiento a tus procesos?
            </li>
          </ul>
          <p className="services-consultoria__paragraph sub-1 consultoria-items-3">
            Entender la personalidad y tus expectativas, nos ayuda a implementar
            la mejor tecnología, tener los roles claramente definidos: ayuda a
            entender que responsabilidades nuevas tendrán al implementar las
            soluciones que te ofrezcamos y poder visualizar tu éxito.
          </p>

          <h4 className="services-consultoria__sub-title sub_2 consultoria-items-3">
            PASO 2: EVALUACIONES
          </h4>
          <p className="sub-2 services-consultoria__paragraph consultoria-items-3">
            Después recopilar los datos en nuestro análisis primario de
            descubrimiento inicial, y de cualquier tema de seguimiento, pasamos
            a recopilar datos concretos sobre la tecnología existente con una
            evaluación. La información técnica que obtenemos nos dice:
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
            En esta etapa la propuesta y recomendaciones que hemos tomado se
            basa en toda la información que se ha solicitado para devolver ideas
            sólidas. Teniendo en cuenta todo lo que sabemos, proponemos
            soluciones que ayudarán a solucionar sus problemas y adaptar la
            tecnología para sus necesidades futuras. Damos prioridad a los
            problemas más críticos, mientras nos mantenemos dentro del
            presupuesto requerido.
          </p>
        </div>

        <h5 className="services-frase">
          Recuerda. Nosotros aconsejamos <span>¡Tú decides!</span>
        </h5>
      </div>
    </div>
  );
}
