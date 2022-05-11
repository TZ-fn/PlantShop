import { ReactNode } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HeadElement from '../HeadElement/HeadElement';
import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <HeadElement />
      <Header />
      <main className={styles.mainContainer}>{children}</main>
      <Footer />
    </>
  );
}
