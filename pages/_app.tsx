import Layout from '../components/layout/Layout';
import '../styles/global/Imports.scss'
import type { AppProps } from 'next/app';
import { store } from '../store/store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
