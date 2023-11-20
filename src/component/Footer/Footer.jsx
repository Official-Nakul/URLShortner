import logo from "/images/logo.svg";
import facebook from "/images/icon-facebook.svg";
import twitter from "/images/icon-twitter.svg";
import pintrest from "/images/icon-pinterest.svg";
import insta from "/images/icon-instagram.svg";
import styles from "./footer.module.css";
import React from "react";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p className={styles.title}>Boost your links today</p>
        <button className={styles.btn}>Get Started </button>
      </div>
      <div className={styles.bottom}>
        <div className={styles.content}>
          <img src={logo} alt="" />
          <div className={styles.group}>
            <div className={styles.common}>
              <p className={styles.head}>Features</p>
              <p>LinkShortening</p>
              <p>Branded Links</p>
              <p>Analytics</p>
            </div>
            <div className={styles.common}>
              <p className={styles.head}>Resources</p>
              <p>Blog</p>
              <p>Developers</p>
              <p>Support</p>
            </div>
            <div className={styles.common}>
              <p className={styles.head}>Company</p>
              <p>About</p>
              <p>Our Teams</p>
              <p>Careers</p>
              <p>Contact</p>
            </div>
            <div className={styles.profiles}>
              <img src={facebook} alt={facebook} />
              <img src={twitter} alt={twitter} />
              <img src={pintrest} alt={pintrest} />
              <img src={insta} alt={insta} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
