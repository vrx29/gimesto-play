import React from "react";
import styles from "./style.module.css";
import logo from "assets/logo/logo.png";
import { Search } from "assets/icons";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "context";
import { useAuthHandler } from "hooks";

export function Header() {
  const { userAuthState } = useAuth();
  const { handleLogout } = useAuthHandler();

  return (
    <header className={styles.header}>
      <img src={logo} alt="Gimesto logo" />
      <div className={styles.rightCont}>
      
        {userAuthState.isLoggedIn ? (
          <Link to="/">
            <button className="btn btn-primary" onClick={handleLogout}>
              Log out
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary">Log in</button>
          </Link>
        )}
      </div>
    </header>
  );
}
