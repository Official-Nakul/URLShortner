import logo from "/images/logo.svg";
import styles from "./NavBar.module.css";
import navIcon from "/images/navicon.svg";
import React from "react";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={logo} alt="" />
        <p>Feature</p>
        <p>Pricing</p>
        <p>Resources</p>
      </div>
      <div className={styles.right}>
        <img src={navIcon} alt="" />
        <button className={styles.login}>Login</button>
        <button className={styles.signup}>Sign Up</button>
      </div>
    </div>
  );
};

export default NavBar;
