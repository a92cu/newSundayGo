// import { runSQL } from "../../lib/mysql";
import Image from "next/image";
import { useState } from 'react';
import Script from "next/script";
import html2canvas from "html2canvas";
import pdfMake from "pdfMake";

// import React from 'react';
import { useQRCode } from 'next-qrcode';

function QRCode() {
  const { Canvas } = useQRCode();
  return (
    <Canvas
      // text={'https://www.google.com.tw'}
      text={'http://localhost:3000/receiptQr'}
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

function ReceiptPage() {
  const PdfDownload = () => {
    
    const pdf = document.getElementById('downloadReceipt')
    html2canvas(pdf).then((canvas) => {
      var data = canvas.toDataURL('image/png');
      var docDefinition = {
          content: [{
              image: data,
              width: 595
          }],
          pageSize: 'A7',
          pageMargins: [0, 20, 0, 0]
      };

      pdfMake.createPdf(docDefinition).download('name.pdf');
  });
  }
  return (
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
        <button id="pdfDownload" className="receiptBtn" onClick={() => PdfDownload()}>憑證下載</button>
      </div>
    </div>
  )
}



export default function Receipt() {
  return (
    <>
    <ReceiptPage />
    
    </>
  )
}