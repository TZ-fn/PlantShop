import type { NextPage } from 'next';
import HeadElement from '../components/HeadElement/HeadElement';
import NavBar from '../components/Layout/NavBar/NavBar';
import Footer from '../components/Layout/Footer/Footer';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <HeadElement />
      <div>
        <NavBar />
        <main>
          <h1>PlantShop</h1>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
