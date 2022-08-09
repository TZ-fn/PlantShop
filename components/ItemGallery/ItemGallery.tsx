import { useState, MouseEvent } from 'react';
import { useFetch } from 'hooks/useFetch';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import ItemGalleryElement from './ItemGalleryElement/ItemGalleryElement';
import ItemGalleryModal from './ItemGalleryModal/ItemGalleryModal';
import styles from './ItemGallery.module.scss';

interface ItemGalleryProps {
  name: string;
}

export default function ItemGallery({ name }: ItemGalleryProps) {
  const [isGalleryOpened, setIsGalleryOpened] = useState(false);
  const [imageID, setImageID] = useState('');
  const accessKey = 'xB0jj6DN5ni0u40GPbqafQ07iJv9j7Ef2uilvntw1eM';
  const galleryData = useFetch(
    ` https://api.unsplash.com//search/photos?client_id=${accessKey}&query=${name}`,
  );

  function galleryOpeningHandler(e: MouseEvent<HTMLButtonElement | HTMLImageElement>) {
    if (e.currentTarget.dataset.fullimage) {
      setImageID(e.currentTarget.dataset.fullimage);
    }
    return setIsGalleryOpened(!isGalleryOpened);
  }

  function modalImageChanger(direction: string, currentPhotoURL: string) {
    const indexChange = direction === 'left' ? -1 : 1;
    let currentIndex;
    if (galleryData.results) {
      currentIndex = galleryData.results.findIndex(
        (photo) => photo.urls.regular === currentPhotoURL,
      );
    }
    let newIndex = currentIndex + indexChange;
    if (newIndex >= 0 && newIndex <= galleryData?.results?.length - 1) {
      setImageID(galleryData.results[newIndex].urls.regular);
    }
  }

  return (
    <div className={styles.itemGalleryContainer}>
      {isGalleryOpened && (
        <ItemGalleryModal
          imageID={imageID}
          clickHandler={galleryOpeningHandler}
          modalImageChanger={modalImageChanger}
        />
      )}
      {galleryData.results ? (
        ((galleryData.results.length = 9),
        galleryData.results.map(({ id, urls }) => {
          return (
            <ItemGalleryElement
              key={id}
              fullImage={urls.regular}
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
