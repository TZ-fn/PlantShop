import styles from './ItemGalleryElement.module.scss';

interface ItemGalleryProps {
  src: string;
  clickHandler: () => void;
}

export default function ItemGalleryElement({ src, clickHandler }: ItemGalleryProps) {
  return <img onClick={clickHandler} className={styles.ItemGalleryElement} src={src} alt='' />;
}
