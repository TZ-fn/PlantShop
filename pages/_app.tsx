import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from 'components/store/store';
import Layout from 'components/Layout/Layout';
import 'styles/globals.css';
import 'styles/variables.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
