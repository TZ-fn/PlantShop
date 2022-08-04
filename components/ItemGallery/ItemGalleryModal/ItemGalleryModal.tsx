import styles from './ItemGalleryModal.module.scss';

interface ItemGalleryModalProps {
  id: string;
}

export default function ItemGalleryModal({ id }: ItemGalleryModalProps) {
  return (
    <div className={styles.modalContainer}>
      <button className={styles.closeModalButton} type='button' aria-label='Close this window.'>
        <span aria-hidden='true'>×</span>
      </button>
      <button type='button' className={styles.navButton}>
        &lt;&lt;
      </button>
      <div className={styles.imageContainer}>{id}</div>
      <button type='button' className={styles.navButton}>
        &gt;&gt;
      </button>
    </div>
  );
}
