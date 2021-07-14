import Contac from "../Pages/Contact/Contact";
import Redes from "../../db/redes.json";
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
          <ul>
            <h4>Creditos de fotografía</h4>
            <li>
              Photo by{" "}
              <a href="https://unsplash.com/@zanilic?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Zan
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com/s/photos/software?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash
              </a>
            </li>
            <li>
              Icons made by{" "}
              <a href="https://www.freepik.com" title="Freepik">
                Freepik
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </li>
          </ul>
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
