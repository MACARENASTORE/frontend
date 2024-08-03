import '../styles/globals.css';
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import 'animate.css/animate.min.css';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
