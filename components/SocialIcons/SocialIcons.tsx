import Link from 'next/link';
import Image from 'next/image';
import FacebookLogo from 'public/icons/fbIcon.svg';
import TwitterLogo from 'public/icons/twitterIcon.svg';
import styles from './SocialIcons.module.scss';

export default function SocialIcons() {
  return (
    <div className={styles.socialsContainer}>
      <Link href={'/'}>
        <a className={styles.socialsLink}>
          <Image src={FacebookLogo.src} width={40} height={40} layout='responsive' />
          <span className='visually-hidden'>Connect with us on Facebook</span>
        </a>
      </Link>
      <Link href={'/'}>
        <a className={styles.socialsLink}>
          <Image src={TwitterLogo.src} width={40} height={40} layout='responsive' />
          <span className='visually-hidden'>Connect with us on Twitter</span>
        </a>
      </Link>
    </div>
  );
}
