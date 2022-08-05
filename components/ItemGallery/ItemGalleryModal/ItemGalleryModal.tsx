import Image from 'next/image';
import { MouseEvent } from 'react';
import styles from './ItemGalleryModal.module.scss';

interface ItemGalleryModalProps {
  imageLink: string;
  clickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function ItemGalleryModal({ imageLink, clickHandler }: ItemGalleryModalProps) {
  return (
    <>
      <div className={styles.modalBackground}></div>
      <div className={styles.modalContainer}>
        <button
          onClick={clickHandler}
          className={styles.closeModalButton}
          type='button'
          aria-label='Close this window.'
        >
          <span aria-hidden='true'>×</span>
        </button>
        <button type='button' className={styles.navButton}>
          &lt;&lt;
        </button>
        <div className={styles.imageContainer}>
          <Image src={imageLink} alt='' layout='fill' objectFit='contain' />
        </div>
        <button type='button' className={styles.navButton}>
          &gt;&gt;
        </button>
      </div>
    </>
  );
}
