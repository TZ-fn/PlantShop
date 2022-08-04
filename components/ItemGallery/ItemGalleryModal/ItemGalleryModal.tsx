import styles from './ItemGalleryModal.module.scss';

interface ItemGalleryModalProps {
  id: string;
  clickHandler: () => void;
}

export default function ItemGalleryModal({ id, clickHandler }: ItemGalleryModalProps) {
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
        <div className={styles.imageContainer}>{id}</div>
        <button type='button' className={styles.navButton}>
          &gt;&gt;
        </button>
      </div>
    </>
  );
}
