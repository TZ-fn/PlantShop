import { ReactElement } from 'react';
import Card from '../elements/Card/Card';
import styles from './CardContainer.module.scss';
import { useFetch } from '../../hooks/useFetch';

export default function CardContainer(): ReactElement {
  const data = useFetch('/api/plants');
  return (
    <div className={styles.cardContainer}>
      {data &&
        data.map((plant) => {
          return <Card name={plant.name} image={plant.image} description={plant.description} />;
        })}
    </div>
  );
}
