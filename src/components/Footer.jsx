import React from 'react';
import styles from './Footer.module.css';
import Arrow from '../assets/img_arrow_up.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.branding}>
            <div className={styles.logoContainer}>
              <img src={Arrow} alt="Logo" className={styles.logo} />
              <span className={styles.brandName}>Tribzy</span>
            </div>
            <p className={styles.tagline}>Your New Home And Community Await With Tribzy</p>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}><i className="fab fa-twitter"></i></a>
              <a href="#" className={styles.socialIcon}><i className="fab fa-facebook-f"></i></a>
              <a href="#" className={styles.socialIcon}><i className="fab fa-instagram"></i></a>
              <a href="#" className={styles.socialIcon}><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.linkColumn}>
              <h4 className={styles.linkTitle}>Quick Links</h4>
              <ul className={styles.linkList}>
                <li><a href="#" className={styles.link}>Home</a></li>
                <li><a href="#" className={styles.link}>About</a></li>
                <li><a href="#" className={styles.link}>Features</a></li>
                <li><a href="#" className={styles.link}>How it works</a></li>
                <li><a href="#" className={styles.link}>Career</a></li>
              </ul>
            </div>
            <div className={styles.linkColumn}>
              <h4 className={styles.linkTitle}>Follow Us</h4>
              <ul className={styles.linkList}>
                <li><a href="#" className={styles.link}><i className="fab fa-twitter"></i> Twitter</a></li>
                <li><a href="#" className={styles.link}><i className="fab fa-instagram"></i> Instagram</a></li>
                <li><a href="#" className={styles.link}><i className="fab fa-linkedin-in"></i> Linkedin</a></li>
                <li><a href="#" className={styles.link}><i className="fab fa-facebook-f"></i> Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Community Standards</a>
            <span className={styles.separator}>|</span>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <span className={styles.separator}>|</span>
            <a href="#" className={styles.legalLink}>Terms</a>
            <span className={styles.separator}>|</span>
            <a href="#" className={styles.legalLink}>Cookie Policy</a>
          </div>
          <p className={styles.copyright}>&copy; 2024 Tribzy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
