import React from 'react';
import styles from './Header.module.css';
import Logo from '../assets/img_arrow_up.svg'; // Adjust path to your SVG
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Logo} alt="Tribzy Logo" className={styles.logoImage} />
          <span className={styles.logoText}>Tribzy</span>
        </div>
        {/* Render the menu icon without click functionality */}
        <div className={styles.menuIcon}>
          <IoMenu size={30} className={styles.menuIcon} />
        </div>
        {/* Render navigation links or menu based on showMenu state */}
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>Home</a>
          <a href="#" className={styles.navLink}>Communities</a>
          <a href="#" className={styles.navLink}>About Us</a>
          <a href="#" className={styles.navLink}>Services</a>
          <a href="#" className={styles.navLink}>Contact Us</a>
        </nav>
        {/* Render login and signup buttons always */}
        <div className={styles.buttons}>
          <button className={styles.loginButton}>Log in</button>
          <button className={styles.signupButton}>Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
