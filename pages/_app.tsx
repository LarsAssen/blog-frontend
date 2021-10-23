import '../styles/globals.scss'
import type { AppProps } from 'next/app';
import Footer from '@/components/Footer/Footer';
import App from "next/app"
import Head from "next/head"
import {createContext} from "react"
import {fetchAPI} from "../lib/api";
import {getStrapiMedia} from "../lib/media";

export const GlobalContext = createContext({});


function MyApp({ Component, pageProps }: AppProps) {
  const {global} = pageProps;
 return (
 <>
  <Head>
    <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
  </Head>
  <GlobalContext.Provider value={global}>
      <Component {...pageProps} />
      <Footer />
  </GlobalContext.Provider>
  </> 
)}

MyApp.getInitialProps = async(ctx:any) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI("/global");
  return {...appProps, pageProps:{global}}
}
export default MyApp
