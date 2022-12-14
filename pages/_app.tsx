import "../css/header.css";
import "../css/carousels.css";
import "../css/item.css";
import "../css/itemCountBtn.css";
import "../css/calender.css";
import "../css/company.css";
import "../css/cartdetails.css";
import "../css/companyUpItem.css";
import "../css/MCinformation.css";
import "../css/MemberCenter.css";
import "../css/login.css";
import "../css/Receipt.css";import "../css/firstpage.css";
import "../css/homepage.css";
import "../css/shopping2.css";

import Script from "next/script";
import Head from "next/head";

import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps ,session}) {
  return (
  
    <SessionProvider session={session}>
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
      </SessionProvider>
    
    
  );
}
