import Image from "next/image";
import Link from "next/link";
import Btn from "../../Btn/Btn";
export default function About() {
  return (
    <div className="about" id="quien-soy">
      <h2 className="Title" id="titleAbout">¿Quién soy?</h2>
      <div className="about-content">
        <p className="about-content__text">
          Mi Nombre es Milton Estrada Soy un apasionado por la innovación y la
          tecnología.
        </p>
        <Image
          layout="responsive"
          src={"/img/about/perfil.jpg"}
          alt={"miltondw"}
          width={200}
          height={150}
          className="about-content__image"
        />
        <div className="about-paragraph__content">
          <p className="about-content__paragraph">
            Amo ayudar a las empresas a crecer y adaptarse al mundo digital.
          </p>
          <p className="about-content__paragraph">
            Soy Full Stack Developer, Analista de Marketing e investigador y
            analista de soluciones basadas en la web.
          </p>
          <p className="about-content__paragraph">
            Mi experiencia se basa en la recopilación de empresas y fundaciones
            que he podido ayudar desde la creación de nuevos productos hasta la
            creación de software que se adaptan a sus necesidades
          </p>
        </div>
        <Btn title="Conóceme Más" link="/conoceme" />
      </div>
    </div>
  );
}
