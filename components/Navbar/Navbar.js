import Link from "next/link";
import { useState } from "react";
import Items from "../../db/items-menu.json";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  const isActivo = (r) => {
    if (r === router.pathname) {
      return "active";
    } else {
      return "";
    }
  };

  return (
    <header className="header">
      <div className="menu">
        <h1 className="logo">
          <Link href="/">
            <a title="Inicio" >MiltonDw</a>
          </Link>
        </h1>
        <div onClick={() => setNav(!nav)} className="toggle-menu">
          <div className={`${nav ? "show" : ""} first-bar`}></div>
          <div className={`${nav ? "show" : ""} second-bar`}></div>
          <div className={`${nav ? "show" : ""} third-bar`}></div>
        </div>
      </div>
      <nav className="navbar">
        <ul className={`navbar-content ${nav ? "show" : ""}`}>
          {Items.map((item) => (
            <li key={item.id} className="navbar-content__item">
              <Link href={item.link}>
                <a title={item.name} className={`navbar-content__link ${isActivo(item.link)}`}>
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
