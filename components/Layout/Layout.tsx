import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { updatePlantsData } from 'features/plants/plantsSlice';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HeadElement from 'components/HeadElement/HeadElement';
import styles from './Layout.module.scss';
import { useFetch } from 'hooks/useFetch';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const dispatch = useDispatch();
  const data = useFetch('/api/plants');
  dispatch(updatePlantsData(data));
  return (
    <div className={styles.layoutWrapper}>
      <HeadElement />
      <Header />
      <main className={styles.mainContainer}>{children}</main>
      <Footer />
    </div>
  );
}
