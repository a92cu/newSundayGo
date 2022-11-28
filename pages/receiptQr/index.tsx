// import { runSQL } from "../../lib/mysql";
import Image from "next/image";
import { useState } from 'react';
import Script from "next/script";

function ReceiptQr() {
  const XBtn = () => {
    document.getElementById("XBtn").style.backgroundColor = "#d5c8ae";
    document.getElementById("XBtn").style.color = "white";
    document.getElementById("XBtn").innerText = "已核銷";
  };
  return (<div >
    <div className="receiptTitleB">
      <img src="./images/群組 1.png" alt="" />訂單明細
      <br />
      <div className="receiptBodyB">
        <h3>台灣嘉義｜三隻小豬觀光農場門票</h3>
        <p> 訂購人：<span>王曉明</span> </p>
        <p>訂單編號：<span>21KK218456622</span> <button id="XBtn" onClick={() => XBtn()}>核銷</button></p>
      </div>
    </div>
  </div>

  )
}


export default function QrReceipt() {
  return (
    <>
      <ReceiptQr />

    </>
  )
}