import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/globals.css';
import '@fontsource/montserrat';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);

  return (
    <Layout>
      <title>zalnaRs</title>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
