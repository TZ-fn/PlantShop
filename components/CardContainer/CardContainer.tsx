import { ReactElement } from 'react';
import Card from 'components/elements/Card/Card';
import styles from './CardContainer.module.scss';
import { useFetch } from 'hooks/useFetch';
import { Plant, PlantsData } from 'types/types';

export default function CardContainer(): ReactElement {
  const data: PlantsData = useFetch('/api/plants');
  return (
    <div className={styles.cardContainer}>
      {data !== undefined
        ? data.map(({ id, name, image, description, price }: Plant) => {
            return (
              <Card
                id={id}
                key={id}
                name={name}
                image={image}
                description={description}
                price={price}
              />
            );
          })
        : 'Loading...'}
    </div>
  );
}
