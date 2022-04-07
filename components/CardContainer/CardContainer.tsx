import { ReactElement } from 'react';
import Card from '../elements/Card/Card';
import ZamioImage from '../../public/images/severin-candrian-cLaaxa4DSnc-unsplash.jpg';
import FortunePlantImage from '../../public/images/rumman-amin-xrYzcMivDSY-unsplash.jpg';
import ZebraPlantImage from '../../public/images/kari-shea-tcgMBsW4zlU-unsplash.jpg';
import MonsteraImage from '../../public/images/severin-candrian-bwsTJMnhcwE-unsplash.jpg';
import SansevieriaImage from '../../public/images/severin-candrian-NlY6jBS3taA-unsplash.jpg';
import EpipremnumImage from '../../public/images/severin-candrian-PKQHPDetrtc-unsplash.jpg';
import DwarfBananaImage from '../../public/images/severin-candrian-rOfBozD9pOE-unsplash.jpg';
import CalatheaImage from '../../public/images/severin-candrian-KU-lo3dR-K4-unsplash.jpg';

import styles from './CardContainer.module.scss';

export default function CardContainer(): ReactElement {
  return (
    <div className={styles.cardContainer}>
      <Card name='Zamioculcas' image={ZamioImage} />
      <Card name='Dracaena' image={FortunePlantImage} />
      <Card name='Monstera' image={MonsteraImage} />
      <Card name='Sansevieria' image={SansevieriaImage} />
      <Card name='Epipremnum' image={EpipremnumImage} />
      <Card name='Dwarf banana' image={DwarfBananaImage} />
      <Card name='Haworthia' image={ZebraPlantImage} />
      <Card name='Calathea' image={CalatheaImage} />
    </div>
  );
}
