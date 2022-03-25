import type { NextPage } from 'next';
import HeadElement from '../components/HeadElement/HeadElement';
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import styles from '../styles/Home.module.css';
import Card from '../components/elements/Card/Card';
import ZamioImage from '../public/images/severin-candrian-cLaaxa4DSnc-unsplash.jpg';

const Home: NextPage = () => {
  return (
    <>
      <HeadElement />
      <div>
        <Header />
        <main>
          <div>
            <Card name='Zamioculcas' image={ZamioImage.src} />
            <Card name='Zamioculcas' image={ZamioImage.src} />
            <Card name='Zamioculcas' image={ZamioImage.src} />
            <Card name='Zamioculcas' image={ZamioImage.src} />
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
