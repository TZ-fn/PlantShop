import styles from './ItemGalleryElement.module.scss';

interface ItemGalleryProps {
  src: string;
  key: string;
}

export default function ItemGalleryElement({ src, key }: ItemGalleryProps) {
  return <img className={styles.ItemGalleryElement} src={src} alt='' key={key} />;
}
