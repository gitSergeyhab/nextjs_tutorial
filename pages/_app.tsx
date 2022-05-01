// styled-components
// bootstrap

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SessionProvider } from "next-auth/react"

import { ThemeProvider } from 'styled-components';
import Footer from '../components/footer';
import Header from '../components/header';


const theme = {
  colors: {
    red: '#e63306cb',
    blue: '#2410c3',
  }
}

function MyApp({ Component, pageProps }: AppProps) {

  console.log(pageProps)



  if (pageProps.noLayout) { // чтоб без хедера и футера проброситьв пропс getStaticProps и тп {noLayout: true}
    return (
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}> 
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    );
  }

  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider theme={theme}> 
        <Header/>
          <Component {...pageProps} />
        <Footer/>
      </ThemeProvider>
    </SessionProvider>
  ) 
}

export default MyApp
