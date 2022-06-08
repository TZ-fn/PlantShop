import { RootState } from 'store/store';
import { useSelector } from 'react-redux';
import ProductsList from 'components/ProductsList/ProductsList';
import Product from 'components/ProductsList/Product/Product';
import BasketAside from 'components/BasketAside/BasketAside';
import styles from './BasketView.module.scss';

const BasketView = () => {
  const plants = useSelector((state: RootState) => state.plants.plantsData);
  const basket = useSelector((state: RootState) => state.basket.products);

  const basketTotal = plants
    .filter((plant) => basket.find((product) => product.id === plant.id))
    .reduce(
      (total, plant) => {
        total.integer +=
          plant.price.integer * basket.find((product) => product.id === plant.id)?.quantity;
        total.fraction +=
          plant.price.fraction * basket.find((product) => product.id === plant.id)?.quantity;
        console.log(
          plant.price.integer * basket.find((product) => product.id === plant.id)?.quantity,
        );
        return total;
      },
      { integer: 0, fraction: 0 },
    );

  // console.log(basketTotal);
  return (
    <div className={styles.basketViewContainer}>
      <h2 className={styles.sectionHeader}>Basket</h2>
      <div className={styles.basketContainer}>
        <ProductsList>
          {basket.length > 0
            ? plants
                .filter((plant) => basket.find((product) => product.id === plant.id))
                .map(({ id, name, image, description, price }: Plant) => {
                  return (
                    <Product
                      id={id}
                      key={id}
                      name={name}
                      image={image}
                      description={description}
                      price={price}
                      count={basket.filter((product) => product.id === id)[0].quantity}
                    />
                  );
                })
            : 'Your basket is empty. :('}
        </ProductsList>
        <BasketAside basketTotal={basketTotal} />
      </div>
    </div>
  );
};

export default BasketView;
