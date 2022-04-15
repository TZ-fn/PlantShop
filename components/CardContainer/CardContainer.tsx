import { ReactElement } from 'react';
import Card from '../elements/Card/Card';
import styles from './CardContainer.module.scss';
import { useFetch } from '../../hooks/useFetch';
import { Plant, PlantData } from '../../types/types';

export default function CardContainer(): ReactElement {
  const data: PlantData = useFetch('/api/plants');
  return (
    <div className={styles.cardContainer}>
      {data !== undefined
        ? data.map((plant: Plant) => {
            return <Card name={plant.name} image={plant.image} description={plant.description} />;
          })
        : 'Loading'}
    </div>
  );
}
