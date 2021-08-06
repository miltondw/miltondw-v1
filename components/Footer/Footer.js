import Contac from "../Pages/Contact/Contact";
import Redes from "../../db/redes.json";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Contac />
        <div className="footer-redes">
          {Redes.map((r) => (
            <a
              key={r.id}
              href={r.link}
              title={r.title}
              target="_blank"
              rel="noreferrer"
            >
              <i className={`fab fa-${r.title}`}></i>
            </a>
          ))}
        </div>
        <div className="footer-copy">
          <h4>
            <Link href="/creditos">
              <a>Creditos de fotografía</a>
            </Link>
          </h4>

          <p className="footer-copy__paragraph">
            &copy; Creado por{" "}
            <a title="MiltonDw" href="https://www.linkedin.com/in/milton-dw/">
              MiltonDw
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
