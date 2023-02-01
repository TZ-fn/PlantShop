import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePlantsData } from 'features/plants/plantsSlice';
import { PlantsData } from 'types/types';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HeadElement from 'components/HeadElement/HeadElement';
import styles from './Layout.module.scss';
import { useFetch } from 'hooks/useFetch';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [data] = useFetch('/api/plants');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updatePlantsData(data as PlantsData));
  }, [dispatch, data]);

  return (
    <div className={styles.layoutWrapper}>
      <HeadElement />
      <Header />
      <main className={styles.mainContainer}>{children}</main>
      <Footer />
    </div>
  );
}
