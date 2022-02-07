import type { NextPage } from 'next';
import HeadElement from '../components/HeadElement/HeadElement';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <HeadElement />
      <div>
        <Header />
        <main>
          <h1>PlantShop</h1>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
