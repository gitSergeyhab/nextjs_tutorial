// styled-components
// bootstrap

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ThemeProvider } from 'styled-components';


const theme = {
  colors: {
    red: '#e63306cb',
    blue: '#2410c3',
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}> <Component {...pageProps} /> </ThemeProvider>
}

export default MyApp
