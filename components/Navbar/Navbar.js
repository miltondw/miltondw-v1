import Link from "next/link";
import Items from "./Items.json";
export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar-content">
          {Items.map((item) => (
            <li key={item.id} className="navbar-content__item">
              <Link href={item.link}>
                <a className="navbar-content__link">{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
