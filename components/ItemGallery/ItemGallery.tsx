import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import ItemGalleryElement from './ItemGalleryElement/ItemGalleryElement';
import { useFetch } from 'hooks/useFetch';
import styles from './ItemGallery.module.scss';

interface ItemGalleryProps {
  name: string;
}

export default function ItemGallery({ name }: ItemGalleryProps) {
  const accessKey = 'xB0jj6DN5ni0u40GPbqafQ07iJv9j7Ef2uilvntw1eM';
  const galleryData = useFetch(
    ` https://api.unsplash.com//search/photos?client_id=${accessKey}&query=${name}`,
  );
  console.log(name);
  return (
    <div className={styles.itemGalleryContainer}>
      {galleryData.results ? (
        ((galleryData.results.length = 9),
        galleryData.results.map((item) => {
          console.log(item.id);

          return <ItemGalleryElement key={item.id} src={item.urls.thumb} />;
        }))
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
