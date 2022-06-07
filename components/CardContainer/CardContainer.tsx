import { ReactElement } from 'react';
import { RootState } from 'store/store';
import { useSelector } from 'react-redux';
import Card from 'components/elements/Card/Card';
import styles from './CardContainer.module.scss';
import { Plant } from 'types/types';

export default function CardContainer(): ReactElement {
  const plants = useSelector((state: RootState) => state.plants.plantsData);
  return (
    <div className={styles.cardContainer}>
      {plants.length > 0
        ? plants.map(({ id, name, image, description, price }: Plant) => {
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
