import { ReactElement } from 'react';
import Card from '../elements/Card/Card';
import ZamioImage from '../../public/images/severin-candrian-cLaaxa4DSnc-unsplash.jpg';
import styles from './CardContainer.module.scss';

export default function CardContainer(): ReactElement {
  return (
    <div className={styles.cardContainer}>
      <Card name='Zamioculcas' image={ZamioImage.src} />
      <Card name='Zamioculcas' image={ZamioImage.src} />
      <Card name='Zamioculcas' image={ZamioImage.src} />
      <Card name='Zamioculcas' image={ZamioImage.src} />
      <Card name='Zamioculcas' image={ZamioImage.src} />
    </div>
  );
}
