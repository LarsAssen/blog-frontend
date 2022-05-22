import '../styles/globals.scss'
import type { AppProps } from 'next/app';
import Footer from '@/components/Footer/Footer';
import App from "next/app"
import Head from "next/head"
import {createContext, useEffect} from "react"
import {fetchAPI} from "../lib/api";
import {getStrapiMedia} from "../lib/media";
import Layout from '@/components/Layout/Layout';
import Script from 'next/script';
import { useRouter } from 'next/dist/client/router';
import * as gtag from "../lib/ga/gtag";
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
export const GlobalContext = createContext({});


function MyApp({ Component, pageProps }: AppProps) {
  const {global} = pageProps;

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url:any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
       <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=6Q7YZBVS8J`}
      />
      <Script
      id="analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6Q7YZBVS8J', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
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
