import { useState, MouseEvent } from 'react';
import { useFetch } from 'hooks/useFetch';
import { UnsplashPhoto, UnsplashPhotoResults } from 'types/types';
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
          (galleryData as UnsplashPhotoResults).results.findIndex(
            (element: UnsplashPhoto) => element.urls.regular === e.currentTarget.dataset.fullimage,
          ),
        );
      }
    }

    document.body.classList.toggle('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return setIsGalleryOpened(!isGalleryOpened);
  }

  function modalImageChanger(direction: string, currentPhotoURL: string) {
    const indexChange = direction === 'left' ? -1 : 1;
    let currentIndex = 0;
    if (galleryData) {
      currentIndex = (galleryData as UnsplashPhotoResults).results.findIndex(
        (photo: UnsplashPhoto) => photo.urls.regular === currentPhotoURL,
      );
    }
    const newIndex = currentIndex + indexChange;
    setImageIndex(newIndex);
    if (newIndex >= 0 && newIndex <= (galleryData as UnsplashPhotoResults)?.results?.length - 1) {
      setImageID((galleryData as UnsplashPhotoResults).results[newIndex].urls.regular);
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
        (((galleryData as UnsplashPhotoResults).results.length = 9),
        (galleryData as UnsplashPhotoResults).results.map(({ id, urls }: UnsplashPhoto) => {
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
