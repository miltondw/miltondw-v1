import { link } from "../../../../hooks/link";
import Image from "next/image";

export default function Shop({ services }) {
  return (
    <div className="services-content__services" id="services-shop">
      <h2 className="Title" id="shop__title">
        Desarrollo de Tienda Online
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
          id={`${link(services[4].items[0])}__content`}
        >
          <h3
            id={`${link(services[4].items[0])}__subtitle`}
            className="services-consultoria__title"
          >
            ¿Cuáles son los beneficios de crear una tienda online?
          </h3>
          <div
            className="services-logistica__content_paragraph"
            id={`${link(services[4].items[0])}__paragraph`}
          >
            <div className="services-image__web">
              <Image
                layout="responsive"
                src={"/img/services/shop/online-shop-card.jpg"}
                alt={"laptop con carrito de compras"}
                width={60}
                height={50}
              />
            </div>
            <p className="services-paragraph">
              Ya no vas a estar limitado a trabajar en tu zona. Lo que ocasiona
              que estés perdiendo la oportunidad de llegar a más clientes con
              tus productos o servicios.
            </p>
            <p className="services-paragraph">
              Puedes dar mayor información de tu producto o servicio en las
              plataformas de venta online, lo que puede ocasionar que tengas un
              aumento de ventas y mayor credibilidad
            </p>
            <p className="services-paragraph">
              Cada vez más empresas de tu sector se encuentran en internet, por
              lo que cada vez cuentan con mayor reconocimiento de marca así que
              tendrás la oportunidad de competir no solo en tu aria también a
              nivel nacional e internacional.
            </p>
            <p className="services-paragraph">
              La comunicación directa y personalizada con tus clientes es vital
              y la tienda online te aumenta esa comunicación
            </p>
            <p className="services-paragraph">
              Mayor fidelización y retención de clientes
            </p>
            <p className="services-paragraph">
              Puedes dar mayor información de tu producto o servicio en las
              plataformas de venta online, lo que puede ocasionar que tengas un
              aumento de ventas y mayor credibilidad
            </p>
            <p className="services-paragraph">
              Acceso completo a la información del cliente (correo electrónico,
              historial de navegación / compras) así podrás mejorar la
              experiencia de tu cliente y saber que producto se está llevando la
              atención y cuál no.
            </p>
            <p className="services-paragraph">
              Resolución de dudas más rápidas
            </p>
            <p className="services-paragraph">
              Decisiones de compra, operaciones, productos y servicios más
              optimizados
            </p>
          </div>

          <div
            className="services-logistica__content"
            id={`${link(services[4].items[1])}__content`}
          >
            <h3
              id={`${link(services[4].items[1])}__subtitle`}
              className="services-consultoria__title"
            >
              ¿Cómo creamos tu Tienda Online?
            </h3>
            <div
              className="services-logistica__content_paragraph"
              id={`${link(services[4].items[1])}__paragraph`}
            >
              <p className="services-paragraph">
                Te presentamos los Procesos a aplicar
              </p>
              <div className="services-image__web">
                <Image
                  layout="responsive"
                  src={"/img/services/shop/online-shop-carrito.jpg"}
                  alt={"persona con tarjeta de credito"}
                  width={60}
                  height={50}
                />
              </div>
              <p className="services-paragraph">
                Una explicación técnica de las Herramientas implementadas
              </p>
              <h3 className="services-paragraph">Te pediremos:</h3>
              <p className="services-paragraph">
                Tu Brif para mayor conocimiento de tu empresa
              </p>
              <p className="services-paragraph">Logos</p>
              <h4 className="services-paragraph">
                De tus productos te pediremos
              </h4>
              <p className="services-paragraph">■ Fotografía</p>
              <p className="services-paragraph">■ Descripción</p>
              <p className="services-paragraph">■ Precios</p>
              <p className="services-paragraph">■ Especificaciones</p>
              <p className="services-paragraph">
                Si no tienes nada de esto o algo que te haga falta nosotros te
                podremos ayudar en el proceso
              </p>
              <p className="services-paragraph">
                Te daremos una preparación técnica para mejorar nuestra
                comunicación en el proceso de desarrollo
              </p>
              <p className="services-paragraph">
                Durante la creación de tu tienda online Trabajaremos con Trello
                una herramienta para llevar el seguimiento de tu proyecto
              </p>
              <h5 className="services-paragraph">
                Antes y después del lanzamiento de la tienda online, ofrecemos
                soporte para:
              </h5>
              <p className="services-paragraph">resolver dudas</p>
              <p className="services-paragraph">
                Dar una guía de como manejar de manera óptima el panel de
                administración
              </p>
              <p className="services-paragraph">
                ofrecer estrategias de crecimiento con nuestro servicio de
                Marketing
              </p>
              <p className="services-paragraph">
                Discutimos el nombre de tu dominio que sería el nombre de tu
                tienda en la web
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
