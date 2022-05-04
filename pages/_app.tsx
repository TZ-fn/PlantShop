import type { AppProps } from 'next/app';
import '../styles/globals.css';
import '../styles/variables.scss';
import Layout from '../components/Layout/Layout';
import HeadElement from '../components/HeadElement/HeadElement';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <HeadElement />
      <Component {...pageProps} />
    </Layout>
  );
}
