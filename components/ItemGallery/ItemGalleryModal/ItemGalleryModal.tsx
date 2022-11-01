import Image from 'next/image';
import { MouseEvent } from 'react';
import styles from './ItemGalleryModal.module.scss';

interface ItemGalleryModalProps {
  imageID: string;
  clickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
  modalImageChanger: Function;
  whichButtonToDisable: number;
}

export default function ItemGalleryModal({
  imageID,
  clickHandler,
  modalImageChanger,
  whichButtonToDisable,
}: ItemGalleryModalProps) {
  const shouldDisableNextButton = whichButtonToDisable === 8 ? true : false;
  const shouldDisablePrevButton = whichButtonToDisable === 0 ? true : false;
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
        <button
          type='button'
          className={shouldDisablePrevButton ? styles.navButtonDisabled : styles.navButton}
          onClick={() => modalImageChanger('left', imageID)}
          disabled={shouldDisablePrevButton}
        >
          &lt;&lt;
        </button>
        <div className={styles.imageContainer}>
          <Image
            placeholder='blur'
            blurDataURL={imageID}
            src={imageID}
            alt=''
            layout='fill'
            objectFit='contain'
          />
        </div>
        <button
          type='button'
          className={shouldDisableNextButton ? styles.navButtonDisabled : styles.navButton}
          onClick={() => modalImageChanger('right', imageID)}
          disabled={shouldDisableNextButton}
        >
          &gt;&gt;
        </button>
      </div>
    </>
  );
}
