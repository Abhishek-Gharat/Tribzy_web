import React from 'react';
import styles from './Main.module.css';
import Mysvg from '../assets/img_objects.svg';
import ImageHotel from '../assets/img_image_86.png';
import ImageResort from '../assets/img_image_86_252x816.png';

const Main = () => {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <img src={Mysvg} alt="Community Illustration" className={styles.heroImage} />
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Your New <span className={styles.orange}>Home</span>
            </h1>
            <h1 className={styles.heroTitle}>
              And <span className={styles.yellow}>Community</span>
            </h1>
            <h1 className={styles.heroTitle}>
              Await With <span className={styles.purple}>Tribzy</span>
            </h1>
          </div>
        </div>
      </section>
      <div className={styles.curvedHeader}>
        <h2 className={styles.communitiesTitle}>Communities</h2>
      </div>
      <div className={styles.communitiesHeader}></div>
      <div className={styles.communitiesSection}>
        <div className={styles.viewAllContainer}>
          <a href="#" className={styles.viewAllLink}>View all &gt;</a>
        </div>
        <section className={styles.communities}>
          <div className={styles.communityGrid}>
            <div className={styles.communityCard}>
              <img src={ImageHotel} alt="BLVD Gainesville" className={styles.communityImage} />
              <div className={styles.communityInfo}>
                <h3 className={styles.communityName}>BLVD Gainesville</h3>
                <p className={styles.communityAddress}>4000 SW 37th Blvd, Gainesville, FL 32608</p>
                <a href="#" className={styles.learnMore}>Learn More</a>
              </div>
            </div>
            <div className={styles.communityCard}>
              <img src={ImageResort} alt="Stoneridge" className={styles.communityImage} />
              <div className={styles.communityInfo}>
                <h3 className={styles.communityName}>Stoneridge</h3>
                <p className={styles.communityAddress}>3800 SW 34th St, Gainesville, FL 32608</p>
                <a href="#" className={styles.learnMore}>Learn More</a>
              </div>
            </div>
          </div>
          <div className={styles.viewMoreContainer}>
            <button className={styles.viewMoreButton}>View more Communities</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;