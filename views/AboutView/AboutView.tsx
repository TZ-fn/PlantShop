import Image from 'next/image';
import MainLogo from '../../public/mainLogo.svg';
import styles from './AboutView.module.scss';

const AboutView = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.aboutHeader}>About</h2>
      <div className={styles.logoContainer}>
        <Image src={MainLogo.src} width={50} height={50} />
        <h1 className={styles.logoText}>
          PlantShop <span className={styles.limitedSpan}>Ltd.</span>
        </h1>
      </div>
      <ul className={styles.addressContainer}>
        <li className={styles.street}> 67 Rose Meadows</li>
        <li className={styles.city}>Stainton</li>
        <li className={styles.postCode}>TS8 0UY</li>
        <li className={styles.phone}>+44 (0)78 0410 7081</li>
        <li className={styles.country}>United Kingdom</li>
      </ul>
    </div>
  );
};

export default AboutView;
