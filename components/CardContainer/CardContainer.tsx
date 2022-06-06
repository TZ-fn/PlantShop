import { ReactElement } from 'react';
import { RootState } from 'store/store';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'components/elements/Card/Card';
import styles from './CardContainer.module.scss';
import { useFetch } from 'hooks/useFetch';
import { Plant } from 'types/types';
import { updatePlantsData } from 'features/plants/plantsSlice';

export default function CardContainer(): ReactElement {
  const dispatch = useDispatch();
  const data = useFetch('/api/plants');
  dispatch(updatePlantsData(data));
  const plants = useSelector((state: RootState) => state.plants.plantsData);
  console.log(plants);
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
