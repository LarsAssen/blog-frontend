import '../styles/globals.scss'
import type { AppProps } from 'next/app';
import App from "next/app"
import Head from "next/head"
import {createContext} from "react"
import {fetchAPI} from "../lib/api";
import Layout from '@/components/Layout/Layout';
import { useRouter } from 'next/dist/client/router';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
export const GlobalContext = createContext({});


function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  const {global} = pageProps;

  const router = useRouter();

  const slideRight = {
    name: 'Slide Right',
    variants: {
      initial: {
        opacity: 0,
        x: '-100%',
      },
      animate: {
        opacity: 1,
        x: 0,
      },
      exit: {
        opacity: 0,
        x: '-100%'
      }
    },
    transition: {
      duration: 0.3,
    }
  }

 return (
 <>
  <Head>
    <link rel="shortcut icon" href={global.data.attributes.Favicon.data.attributes.url} />
    
  </Head>
  <GlobalContext.Provider value={global}>
      <Layout>
      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter={true}>
          <m.div
            key={router.route.concat(slideRight.name)}
            initial="initial"
            animate="animate"
            exit="exit"
            className='page-wrap'
            variants={slideRight.variants}
            transition={slideRight.transition}
          >
            <Component {...pageProps} />
          </m.div>
        </AnimatePresence>
      </LazyMotion>
      </Layout>
  </GlobalContext.Provider>
  </> 
)}

MyApp.getInitialProps = async(ctx:any) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI("/global");
  return {...appProps, pageProps:{global}}
}
export default MyApp
