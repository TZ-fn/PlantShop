import type { NextPage } from 'next';
import HeadElement from '../components/HeadElement/HeadElement';
import NavBar from '../components/Layout/NavBar/NavBar';
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
        <footer></footer>
      </div>
    </>
  );
};

export default Home;
