import type { NextPage } from 'next';
import styles from './basket.module.scss';
import HeadElement from '../components/HeadElement/HeadElement';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import ProductsList from '../components/ProductsList/ProductsList';

const Basket: NextPage = () => {
  return (
    <>
      <HeadElement />
      <div>
        <Header />
        <div className={styles.container}>
          <ProductsList />
          <aside>
            <button type='button'>Checkout and pay</button>
            <button type='button'>Continue shopping</button>
          </aside>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Basket;
