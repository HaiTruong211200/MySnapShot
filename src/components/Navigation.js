import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li className={styles.route}>
          <NavLink to="/mountain">Mountain</NavLink>
        </li>
        <li className={styles.route}>
          <NavLink to="/beach">Beach</NavLink>
        </li>
        <li className={styles.route}>
          <NavLink to="/sky">Sky</NavLink>
        </li>
        <li className={styles.route}>
          <NavLink to="/river">River</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
