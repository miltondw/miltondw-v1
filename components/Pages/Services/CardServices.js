import Image from "next/image";
import Btn from "../../Btn/Btn";

export default function CardServices({ src, title, description, link, id }) {
  return (
    <div className="card-services" id={id}>
      <Image
        layout="responsive"
        src={src}
        alt={title}
        width={20}
        height={20}
        className="card-services__image"
      />
      <h3 className="card-services__title">{title}</h3>
      <p className="card-services__description">{description}</p>
      <Btn title="Saber Más" link={`/servicios/#${link}__title`} />
    </div>
  );
}
