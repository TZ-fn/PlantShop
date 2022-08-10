import { MouseEvent } from 'react';
import styles from './ItemGalleryElement.module.scss';

interface ItemGalleryProps {
  src: string;
  fullImage: string;
  clickHandler: (e: MouseEvent<HTMLImageElement>) => void;
}

export default function ItemGalleryElement({ src, fullImage, clickHandler }: ItemGalleryProps) {
  return (
    <div className={styles.ItemGalleryElementContainer}>
      <img
        onClick={clickHandler}
        className={styles.ItemGalleryElement}
        src={src}
        alt=''
        data-fullimage={fullImage}
      />
    </div>
  );
}
