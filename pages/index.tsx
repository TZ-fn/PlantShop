import type { NextPage } from 'next';
import HeadElement from '../components/HeadElement/HeadElement';
import Header from '../components/Layout/Header/Header';
import CardContainer from '../components/CardContainer/CardContainer';
import Footer from '../components/Layout/Footer/Footer';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <HeadElement />
      <div>
        <Header />
        <main>
          <CardContainer />
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
