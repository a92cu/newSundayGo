import "../css/header.css";
import "../css/carousels.css";
import "../css/item.css";
import "../css/calendar.css";
import "../css/itemCountBtn.css";
import "../css/company.css";
import "../css/cartdetails.css"
import Script from "next/script";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js" />
      <Script src="/js/itemCountBtn.js" />
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
