import '../styles/globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <Head>
          <title>Nestylemate</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
export default MyApp;
