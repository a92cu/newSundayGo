import "../css/header.css";
import "../css/carousels.css";
import Script from "next/script";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" />
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
