import Header from './Header/Header';
import Footer from './Footer/Footer';
import HeadElement from '../HeadElement/HeadElement';

export default function Layout({ children }) {
  return (
    <>
      <HeadElement />
      <Header />
      {children}
      <Footer />
    </>
  );
}
