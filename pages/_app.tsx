import type { AppProps } from 'next/app';
import Layout from 'components/Layout/Layout';
import 'styles/globals.css';
import 'styles/variables.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
