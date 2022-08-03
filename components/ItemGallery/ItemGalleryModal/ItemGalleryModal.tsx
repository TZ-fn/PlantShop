import styles from './ItemGalleryModal.module.scss';

interface ItemGalleryModalProps {
  id: string;
}

export default function ItemGalleryModal({ id }: ItemGalleryModalProps) {
  return <div className={styles.modalContainer}>{id}</div>;
}
