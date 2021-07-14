import Image from "next/image";
import Btn from "../../Btn/Btn";
export default function CardServices({ src, title, description, link,referencia }) {
  return (
    <div className="card-services" ref={referencia}>
      <Image
        layout="responsive"
        src={src}
        alt={title}
        width={200}
        height={200}
        className="card-services__image"
      />
      <h3 className="card-services__title">{title}</h3>
      <p className="card-services__description">{description}</p>
      <Btn title="Saber Más" link={link} />
    </div>
  );
}
