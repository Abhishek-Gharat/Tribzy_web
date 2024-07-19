import React, { useState } from 'react';
import styles from './Header.module.css';
import Logo from '../assets/img_arrow_up.svg'; // Adjust path to your SVG
import { IoMenu } from 'react-icons/io5';
import { CiLogin } from 'react-icons/ci';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Logo} alt="Tribzy Logo" className={styles.logoImage} />
          <span className={styles.logoText}>Tribzy</span>
        </div>
        
        {/* Login and Menu Icons */}
        <div className={styles.iconContainer}>
          <div className={styles.loginIcon}>
            <CiLogin size={24} />
            <span>Log in</span>
          </div>
          <div className={styles.menuIcon} onClick={toggleMenu}>
            <IoMenu size={30} />
          </div>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <a href="#" className={styles.navLink}>Home</a>
          <a href="#" className={styles.navLink}>Communities</a>
          <a href="#" className={styles.navLink}>About Us</a>
          <a href="#" className={styles.navLink}>Services</a>
          <a href="#" className={styles.navLink}>Contact Us</a>
        </nav>

        <div className={styles.buttons}>
          <button className={styles.loginButton}>Log in</button>
          <button className={styles.signupButton}>Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;