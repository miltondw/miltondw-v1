import Link from "next/link";

export default function Btn({ link, title }) {
  return (
    <button className="Btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M19 12L12 6 12 11 6 11 6 13 12 13 12 18z"></path>
      </svg>
      <Link href={`${link}`}>
        <a className="Btn__link">{title}</a>
      </Link>
    </button>
  );
}
