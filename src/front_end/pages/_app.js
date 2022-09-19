import 'bootstrap/dist/css/bootstrap.css'
import '/styles/globals.scss';

import { useEffect } from "react";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;