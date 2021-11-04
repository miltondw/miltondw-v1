import { link } from "../../../../hooks/link";
import Image from "next/image";

export default function Marketing({ services }) {
  return (
    <div className="services-content__services" id="services-marketing">
      <h2 className="Title" id="marketing__title">
        Marketing Digital
      </h2>
      <div className="services-content">
        <p className="services-paragraph">
          Ayudamos a las marcas a implementar estrategias de marketing
          orientadas a optimizar, dar contenido de valor y fidelizar. Nuestras
          estrategias y herramientas ayudan a las marcas a aumentar su alcance
          actual y a llegar a nuevos clientes. También te ayudamos a desarrollar
          historias de marca que ayudan a conectarse con tus clientes y fomentan
          la conexión con tu marca.
        </p>
        <div
          className="services-logistica__content"
          id={`${link(services[5].items[0])}__content`}
        >
          <h3
            id={`${link(services[5].items[0])}__subtitle`}
            className="services-consultoria__title"
          >
            ¿Por qué es importante tener un buen marketing?
          </h3>
          <div
            className="services-logistica__content_paragraph"
            id={`${link(services[5].items[0])}__paragraph`}
          >
            <div className="services-image__web">
              <Image
                layout="responsive"
                src={"/img/services/marketing/data.jpg"}
                alt={"tabla con datos de marketing"}
                width={60}
                height={50}
              />
            </div>
            <p className="services-paragraph">
              El marketing ya no es una opción se ha vuelto importante porque
              permite a las empresas mantener relaciones duraderas y siempre
              presentes con su audiencia.
            </p>
            <p className="services-paragraph">
              No es una solución única, es una estrategia continua que ayuda a
              las empresas a prosperar en un mercado saturado de información
              donde un buen marketing te hará sobresalir de ese ruido y como lo
              aremos pues con:
            </p>
          </div>

          <div
            className="services-logistica__content"
            id={`${link(services[5].items[1])}__content`}
          >
            <h3
              id={`${link(services[5].items[1])}__subtitle`}
              className="services-consultoria__title"
            >
              Estrategia de mercadeo
            </h3>
            <div
              className="services-logistica__content_paragraph"
              id={`${link(services[5].items[1])}__paragraph`}
            >
              <p className="services-paragraph">
                El crecimiento de los negocios está cambiando, la forma en que
                las marcas atraen clientes potenciales, prospectos y conocen al
                cliente se mueve de manera diferente se crean conversiones y
                compiten entre sí.
              </p>
              <p className="services-paragraph">
                Una buena estrategia de Marketing, respaldada por datos, puede
                ayudar a las organizaciones en todo, desde la gestión de
                clientes hasta la retención y experiencia de los clientes.
              </p>
              <h4 className="services-paragraph__subtitle">
                ¿Cómo creamos la estrategia de mercadeo?
              </h4>
              <p className="services-paragraph">
                Definimos tu público (geográfica, demográfica, socioeconómica,
                psicográfica, comportamiento y más.)
              </p>
              <p className="services-paragraph">
                Pasamos a desarrollar una base construida sobre sólidos pilares
                de tu marca.
              </p>

              <p className="services-paragraph">
                Luego definimos una voz de marca que conecte con tu audiencia y
                obtenga seguidores
              </p>
              <p className="services-paragraph">
                Analizamos en que canales esta su público objetivo
              </p>
              <p className="services-paragraph">
                Nos comunicamos con esta nueva audiencia y desarrollamos una
                relación
              </p>
              <p className="services-paragraph">
                Creamos contenido de valor para sus clientes que los convierte
                en consumidores y finalmente, en Leads de la marca.
              </p>
            </div>
          </div>

          <div
            className="services-logistica__content"
            id={`${link(services[5].items[1])}__content`}
          >
            <h3
              id={`${link(services[5].items[1])}__subtitle`}
              className="services-consultoria__title"
            >
              Marketing de contenidos
            </h3>
            <div
              className="services-logistica__content_paragraph"
              id={`${link(services[5].items[1])}__paragraph`}
            >
              <div className="services-image__web">
                <Image
                  layout="responsive"
                  src={"/img/services/marketing/reunion.jpg"}
                  alt={"tabla con datos de marketing"}
                  width={60}
                  height={50}
                />
              </div>
              <p className="services-paragraph">
                El contenido de valor es un factor crucial que diferencia entre
                una buena marca y una excelente. La creación de contenido que
                puede atraer y generar clientes potenciales y de calidad es
                extremadamente importante para llegar a tu público.
              </p>
              <h4 className="services-paragraph__subtitle">Servicios de contenido</h4>
              <p className="services-paragraph">
                Recuerda que tu marca no consume contenido en un solo canal y tú
                tienes que estar presente para cuando tengan la necesidad de tu
                servicio o producto.
              </p>
              <p className="services-paragraph">
                A través del marketing de contenido atractivo podemos crear
                conciencia de marca y cultivar una relación duradera con tu
                audiencia.
              </p>
            </div>
          </div>

          <div
            className="services-logistica__content"
            id={`${link(services[5].items[1])}__content`}
          >
            <h3
              id={`${link(services[5].items[1])}__subtitle`}
              className="services-consultoria__title"
            >
              ¿Cómo lo hacemos?
            </h3>
            <div
              className="services-logistica__content_paragraph"
              id={`${link(services[5].items[1])}__paragraph`}
            >
              <p className="services-paragraph">
                Analizamos las áreas donde este tu audiencia y creamos contenido
                para ellos las más comunes y en donde puede estar tu audiencia
                son:
              </p>
              <h4 className="services-paragraph__subtitle">Video</h4>
              <p className="services-paragraph">
                Aquí entramos en una narración de tu marca, su usabilidad y la
                transmisión de valores de tu marca atreves del video eso no es
                de negar que está a la vanguardia, ya que permite conectarse con
                el cliente. El contenido de video sigue siendo la forma más
                impactante de llegar a cualquier audiencia.
              </p>
              <h4 className="services-paragraph__subtitle">Redes Sociales</h4>
              <p className="services-paragraph">
                Las redes sociales es donde hacemos que pase la comunicación de
                tu marca. Es el factor que hace crecer el seguimiento de una
                marca y permite que tu marca se conecte con los consumidores
                teniendo respuestas rápidas y comunicación directa con tu marca.
              </p>
              <h4 className="services-paragraph__subtitle">Redacción</h4>
              <p className="services-paragraph">
                La redacción creativa y clara da vida y voz a la marca. Buscamos
                dar pautas a la Marca, se define las aspiraciones de las marcas
                y se cultiva una relación con tu audiencia y se le da un valor
                propio a cada persona cuando lo lee y lo interpreta
              </p>
              <p className="services-paragraph">
                Y esto es solo la punta del iceberg, de aquí en adelante nos
                sentamos y discutimos el crecimiento de tu empresa a partir de
                publicidad efectiva
              </p>
            </div>
          </div>

          <div
            className="services-logistica__content"
            id={`${link(services[5].items[1])}__content`}
          >
            <h3
              id={`${link(services[5].items[1])}__subtitle`}
              className="services-consultoria__title"
            >
              Marketing social Media (Redes sociales)
            </h3>
            <div
              className="services-logistica__content_paragraph"
              id={`${link(services[5].items[1])}__paragraph`}
            >
            <div className="services-image__web">
                <Image
                  layout="responsive"
                  src={"/img/services/marketing/social-media.jpg"}
                  alt={"tabla con datos de marketing"}
                  width={60}
                  height={50}
                />
              </div>
              <p className="services-paragraph">
                Aumentar las ventas e impulsar el tráfico del sitio web. Esto
                implica publicar contenido excelente en sus perfiles de redes
                sociales, escuchar e involucrar a sus seguidores, analizar sus
                resultados y publicar anuncios de valor
              </p>
              <h4 className="services-paragraph__subtitle">¿Cómo lo hacemos?</h4>
              <p className="services-paragraph">
                Atreves de los datos que vallamos recaudando de tus clientes y
                seguidores crearemos un plan de contenido que se adapte a tu
                audiencia.
              </p>
              <p className="services-paragraph">
                Para que no hallan retrasos en la planeación creamos una grilla
                para tus redes con plan de mínimo 15 días la cual está sujeta a
                cambios
              </p>
              <p className="services-paragraph">
                Implementamos las mejores tecnologías para la gestión de redes
                para una distribución correcta de las publicaciones basándonos
                en los datos de cada una.
              </p>
              <p className="services-paragraph">
                Cada paso estará registrado en nuestro tablero de Trello la cual
                es una herramienta de seguimiento de proyectos para que lleves
                todo el progreso del Marketing de tu negocio.
              </p>
              <p className="services-paragraph">
                Finalmente te damos una capacitación y una guía de todo el plan
                de social media de tu negocio
              </p>
            </div>
          </div>

          <div
            className="services-logistica__content"
            id={`${link(services[5].items[1])}__content`}
          >
            <h3
              id={`${link(services[5].items[1])}__subtitle`}
              className="services-consultoria__title"
            >
              SEO y SEM (marketing de buscadores)
            </h3>
            <div
              className="services-logistica__content_paragraph"
              id={`${link(services[5].items[1])}__paragraph`}
            >
              <h4 className="services-paragraph__subtitle">
                ¿Qué es el SEO y por qué es importante?
              </h4>
              <div className="services-image__web">
                <Image
                  layout="responsive"
                  src={"/img/services/marketing/seo.jpg"}
                  alt={"tabla con datos de marketing"}
                  width={60}
                  height={50}
                />
              </div>
              <p className="services-paragraph">
                El SEO o (optimización en motores de búsqueda) te ayuda a tener
                mejores relaciones con tu audiencia, mejorar la experiencia del
                cliente, aumentar tu credibilidad como marca logrando atraer a
                más clientes a su sitio web, brindarles una solución y tener una
                ventaja sobre la competencia y así aumentar las conversiones, lo
                que significa más ventas, clientes más leales y más crecimiento
                para tu negocio
              </p>
              <h4 className="services-paragraph__subtitle">
                ¿Como competir entre tantas búsquedas?
              </h4>
              <p className="services-paragraph">
                Hay es donde se vuelve divertido todo. Y entre el concepto de
                SEM o (marketing de motores de búsqueda) Las estrategias SEM se
                basan en determinadas acciones de marketing online que ayudan al
                posicionamiento en los resultados de pago de los buscadores.
              </p>
              <p className="services-paragraph">
                Es decir, los anuncios que aparecen en los resultados de
                búsqueda esto te ayudara a posicionarte de manera que buscadores
                como Google te coloquen en las primeras búsquedas así aumentando
                tu visibilidad y generando nuevos clientes potenciales
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
