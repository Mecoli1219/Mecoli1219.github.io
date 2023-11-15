import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { ThemeProvider } from "next-themes";
import Navbar from '../components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Head>
        <title>Chun-Mao Lai</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F1F1F1" />
        <meta
          name="description"
          content="Chun-Mao (Michael) Lai's personal website"
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="www.mecoli.net" />
        <meta property="og:title" content="Chun-Mao Lai" />
        <meta property="og:description" content="Chun-Mao (Michael) Lai's personal website" />
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()"></meta>
      </Head>
      {
        Component.name == "Home" ? <>
          <Navbar />
          <div className="bg-[#F1F1F1] mt-0 dark:bg-gray-900 font-sans -z-50">
            <Component {...pageProps} />
          </div>
        </>
          : <div className="bg-[#F1F1F1] mt-0 dark:bg-gray-900 font-sans -z-50">
            <Navbar />
            <Component {...pageProps} />
          </div>
      }
    </ThemeProvider>
  );
}
