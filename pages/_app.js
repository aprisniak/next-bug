import React from 'react';
import 'antd/dist/antd.css';
import '../styles/globals.css';

if (typeof window === 'undefined') {
  React.useLayoutEffect = React.useEffect;
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
