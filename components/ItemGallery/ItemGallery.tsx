import { useState, MouseEvent, useEffect } from 'react';
import { useFetch } from 'hooks/useFetch';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';
import ItemGalleryElement from './ItemGalleryElement/ItemGalleryElement';
import ItemGalleryModal from './ItemGalleryModal/ItemGalleryModal';
import styles from './ItemGallery.module.scss';

type UnsplashPhoto = {
  id: number;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string; thumb: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
};

interface ItemGalleryProps {
  name: string;
}

export default function ItemGallery({ name }: ItemGalleryProps) {
  const [isGalleryOpened, setIsGalleryOpened] = useState(false);
  const [imageID, setImageID] = useState('');
  const [imageIndex, setImageIndex] = useState(0);
  const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_KEY;
  const [galleryData] = useFetch(
    `https://api.unsplash.com//search/photos?client_id=${accessKey}&query=${name}`,
  );

  function galleryOpeningHandler(e: MouseEvent<HTMLButtonElement | HTMLImageElement>) {
    if (e.currentTarget.dataset.fullimage) {
      setImageID(e.currentTarget.dataset.fullimage);
      if (galleryData) {
        setImageIndex(
          galleryData.results.findIndex(
            (element: UnsplashPhoto) => element.urls.regular === e.currentTarget.dataset.fullimage,
          ),
        );
      }
    }
    return setIsGalleryOpened(!isGalleryOpened);
  }

  function modalImageChanger(direction: string, currentPhotoURL: string) {
    const indexChange = direction === 'left' ? -1 : 1;
    let currentIndex = 0;
    if (galleryData) {
      currentIndex = galleryData.results.findIndex(
        (photo: UnsplashPhoto) => photo.urls.regular === currentPhotoURL,
      );
    }
    let newIndex = currentIndex + indexChange;
    setImageIndex(newIndex);
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
          whichButtonToDisable={imageIndex}
        />
      )}
      {galleryData ? (
        ((galleryData.results.length = 9),
        galleryData.results.map(({ id, urls }: UnsplashPhoto) => {
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
