import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "../Logo/Logo";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="Product">Product</NavLink>
        </li>
        <li>
          <NavLink to="Pricings">Pricings</NavLink>
        </li>
        <li>
          <NavLink to="login" className={styles.ctaLink}>
            login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
