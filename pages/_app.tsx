import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/Navbar';
import { Layout } from '../components/Layout';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

type CustomAppProps = AppProps & {
  Component: {
    transparentNavbar?: boolean;
  };
};

export default function App({ Component, pageProps }: CustomAppProps) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Head>
        <title>Chun-Mao Lai</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F1F1F1" />
        <meta name="description" content="Chun-Mao (Michael) Lai's personal website" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="www.mecoli.net" />
        <meta property="og:title" content="Chun-Mao Lai" />
        <meta property="og:description" content="Chun-Mao (Michael) Lai's personal website" />
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()"></meta>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* <link rel="stylesheet" href="https://unpkg.com/bulma@0.9.4/css/bulma.min.css" /> */}
      </Head>
      {Component.transparentNavbar ? (
        <>
          <Navbar />
          <div className="-z-50 mt-0 bg-[#F1F1F1] font-sans duration-500 dark:bg-gray-900">
            <Layout>
              <>
                <Component {...pageProps} />
              </>
            </Layout>
          </div>
        </>
      ) : (
        <div className="-z-50 mt-0 min-h-screen bg-[#F1F1F1] font-sans duration-500 dark:bg-gray-900">
          <Navbar />
          <Layout>
            <div className="m-auto flex items-center pb-12">
              <Component {...pageProps} />
            </div>
          </Layout>
        </div>
      )}
      <Analytics />
      {/* <SpeedInsights /> */}
    </ThemeProvider>
  );
}
