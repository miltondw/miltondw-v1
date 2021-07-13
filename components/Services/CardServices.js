import Image from "next/image";
import Link from "next/link";
export default function CardServices({ src, title, description, link }) {
  return (
    <div className="card-services">
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
      <button className="card-services__btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M19 12L12 6 12 11 6 11 6 13 12 13 12 18z"></path>
        </svg>
        <Link href={`servicios/${link}`}>
          <a className="card-services__link">Saber Más</a>
        </Link>
      </button>
    </div>
  );
}
