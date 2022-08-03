import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import ItemGalleryElement from './ItemGalleryElement/ItemGalleryElement';
import { useFetch } from 'hooks/useFetch';
import styles from './ItemGallery.module.scss';
import { useState } from 'react';

interface ItemGalleryProps {
  name: string;
}

export default function ItemGallery({ name }: ItemGalleryProps) {
  const [isGalleryOpened, setIsGalleryOpened] = useState(false);
  const accessKey = 'xB0jj6DN5ni0u40GPbqafQ07iJv9j7Ef2uilvntw1eM';
  const galleryData = useFetch(
    ` https://api.unsplash.com//search/photos?client_id=${accessKey}&query=${name}`,
  );

  function galleryOpeningHandler() {
    return setIsGalleryOpened(!isGalleryOpened);
  }

  return (
    <div className={styles.itemGalleryContainer}>
      {isGalleryOpened && <div>modal opened</div>}
      {galleryData.results ? (
        ((galleryData.results.length = 9),
        galleryData.results.map(({ id, urls }) => {
          return (
            <ItemGalleryElement
              key={id}
              id={id}
              clickHandler={galleryOpeningHandler}
              src={urls.thumb}
            />
          );
        }))
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
