import Link from "next/link";
import { useState } from "react";
import { link } from "../../../../hooks/link";
export default function ServicesNavbar({ services }) {
  const handleClick = (e) => {
    e.preventDefault();
    let ancla = e.target.hash.substring(1);
    document
      .getElementById(ancla)
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };
  const [arrow, setArrow] = useState({
    consultoria: false,
    logistica: false,
    landing: false,
    app: false,
    shop: false,
    marketing: false,
  });
  const subNavbar = (e) => {
    setArrow({
      ...arrow,
      [e]: !arrow[e],
    });
  };
  return (
    <nav className="services-content__nav">
      <ul className="services-nav">
        {services.map((s) => (
          <li key={s.id} className="services-nav__item">
            <i className={`fas fa-${s.icon} services-subNavbar__icon`}></i>
            <Link href={`/servicios#services-${s.link}`}>
              <a
                onClick={(e) => {
                  handleClick(e);
                }}
                className="services-nav__link"
              >
                {s.title}
              </a>
            </Link>

            <i
              className={`fas fa-chevron-up ${
                arrow[s.link] ? "arrow--active" : "arrow--false"
              }`}
              id={s.link}
              onClick={(e) => subNavbar(e.target.id)}
            ></i>
            {s.items ? (
              <ul
                className={`subNavbar ${
                  arrow[s.link] ? "subNavbar--active" : "subNavbar--false"
                }`}
                id={s.link}
              >
                {s.items.map((item) => (
                  <li className="subNavbar__items" key={link(item)}>
                    <Link href={`/servicios#${link(item)}__subtitle`}>
                      <a
                        onClick={(e) => {
                          handleClick(e);
                        }}
                      >
                        {" "}
                        {item}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
