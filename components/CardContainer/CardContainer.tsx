import { ReactElement } from 'react';
import Card from '../elements/Card/Card';
import ZamioImage from '../../public/images/severin-candrian-cLaaxa4DSnc-unsplash.jpg';
import FortunePlantImage from '../../public/images/rumman-amin-xrYzcMivDSY-unsplash.jpg';
import ZebraPlantImage from '../../public/images/kari-shea-tcgMBsW4zlU-unsplash.jpg';
import styles from './CardContainer.module.scss';

export default function CardContainer(): ReactElement {
  return (
    <div className={styles.cardContainer}>
      <Card name='Zamioculcas' image={ZamioImage} />
      <Card name='Fortune Plant' image={FortunePlantImage} />
      <Card name='Zebra haworthia' image={ZebraPlantImage} />
      <Card name='Fortune Plant' image={FortunePlantImage} />
    </div>
  );
}
