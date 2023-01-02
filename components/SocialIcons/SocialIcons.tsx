import Link from 'next/link';
import Image from 'next/image';
import styles from './SocialIcons.module.scss';

export default function SocialIcons() {
  return (
    <div className={styles.socialsContainer}>
      <Link href={'/'}>
        <a className={styles.socialsLink}>
          <Image src='/icons/fbIcon.svg' width={40} height={40} layout='responsive' />
          <span className='visually-hidden'>Connect with us on Facebook</span>
        </a>
      </Link>
      <Link href={'/'}>
        <a className={styles.socialsLink}>
          <Image src='/icons/twitterIcon.svg' width={40} height={40} layout='responsive' />
          <span className='visually-hidden'>Connect with us on Twitter</span>
        </a>
      </Link>
    </div>
  );
}
