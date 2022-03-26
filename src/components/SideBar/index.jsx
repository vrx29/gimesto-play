import { sideBarNav } from "data/sidebar";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

export function SideBar() {
  return (
    <aside className={styles.sidenav}>
      <div className={styles.nav_cont}>
        <div>
          <ul className={styles.nav}>
            {sideBarNav.map((item) => (
              <NavLink
                key={item._id}
                to={item.linkTo}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <li>
                  <span>{item.icon}</span>
                  {item.linkName}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
