import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';
import SocialIcons from 'components/SocialIcons/SocialIcons';

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <Link href={'/'} passHref>
          <div className={styles.logoContainer}>
            <div className={styles.logoInnerContainer}>
              <Image
                src='/mainLogo.svg'
                width={50}
                height={50}
                layout='responsive'
                alt='PlantShop logo'
              />
            </div>
            <h1 className={styles.logoText}>PlantShop</h1>
          </div>
        </Link>
        <SocialIcons />
        <p className={styles.textContainer}>
          Copyright © 2022 - present | <span className={styles.nameHighlight}>PlantShop</span> | All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
