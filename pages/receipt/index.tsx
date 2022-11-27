// import { runSQL } from "../../lib/mysql";
import Image from "next/image";
import { useState } from 'react';
import Script from "next/script";

// import React from 'react';
import { useQRCode } from 'next-qrcode';

function QRCode() {
    const { Canvas } = useQRCode();  
    return (
      <Canvas
        // text={'https://www.google.com.tw'}
        text={'http://localhost:3000/memberCenter'}
        options={{
          level: 'M',
          margin: 3,
          scale: 4,
          width: 200,
          color: {
            dark: '#000000',
            light: '#ffffff',
          },
        }}
      />
    );
  }


export default function CartDetails(){
    return(
        <>  
             <div id="downloadReceipt">
                 <div className="receiptTitle">
                     <img src="./images/群組 1.png" alt="" />憑證
                 </div>
                 <br />
                 <div className="receiptBody">
                     <h3>台灣嘉義｜三隻小豬觀光農場門票</h3>
                     <p> 使用日：<span>2022-11-27</span> </p>
                    <p>訂單編號：<span>21KK218456622</span> </p>
                     <p>數量：<span>4張</span> </p>
                 </div>
                <br />
                 <div className="receiptQR">
                     <div id="qrcode">
                        <QRCode />
                        </div>
                     <div id="code"></div>
                     <br />
                    <button id="pdfDownload" className="receiptBtn">憑證下載</button>
                 </div>
             </div>
        </>
    )
}