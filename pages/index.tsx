import type { NextPage } from 'next';
import HeadElement from '../components/HeadElement/HeadElement';
import NavBar from '../components/Layout/NavBar/NavBar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <HeadElement />
      <div className={styles.container}>
        <NavBar />
        <main className={styles.main}>
          <h1 className={styles.title}>PlantShop</h1>
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
};

export default Home;
