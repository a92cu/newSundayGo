import { runSQL } from "../../../lib/mysql";
import Image from "next/image";
import { useEffect, useState } from "react";
import Script from "next/script";
import { useRouter } from 'next/router'
import { format } from "date-fns";

import html2canvas from "html2canvas";
import pdfMake from "pdfMake";

// import React from 'react';
import { useQRCode } from 'next-qrcode';

function ReceiptPage(orderList) {
  const { Canvas } = useQRCode();
  const PdfDownload = () => {
    // console.log(orderList); // {[{}]}
    // console.log(orderList.orderList); // [{}]
    // console.log(orderList.orderList[0]); //{}

    const pdf = document.getElementById('downloadReceipt')
    html2canvas(pdf).then((canvas) => {
      var data = canvas.toDataURL('image/png');
      var docDefinition = {
        content: [{
          image: data,
          width: 1500
        }],
        pageSize: 'A4',
        pageMargins: [-450, 50, 0, 0]
      };

      pdfMake.createPdf(docDefinition).download('receipt.pdf');
    });
  }
  return (
    <div id="downloadReceipt">
      <div className="receiptTitle">
        <img src="../images/群組 1.png" alt="" />憑證
      </div>
      <br />
      <div className="receiptBody">
        <h3>{orderList.orderList[0].itemTitle}</h3>
        <p> 使用日：<span>{orderList.orderList[0].orderDate}</span> </p>
        <p>訂單編號：<span>{orderList.orderList[0].orderReceipt}</span> </p>
        <p>數量：<span>{orderList.orderList[0].orderQua}張</span> </p>
      </div>
      <br />
      <div className="receiptQR">
        <div id="qrcode">
          {/* <QRCode /> */}
          <Canvas
            text={`http://localhost:3000/receiptQr/${orderList.orderList[0].orderNumber}`}
            // text={`http://localhost:3000/receiptQr/1`}
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
        </div>
        <div id="code"></div>
        <br />
        <button id="pdfDownload" className="receiptBtn" onClick={() => PdfDownload()}>憑證下載</button>
      </div>
    </div>
  )
}



export default function Receipt(props) {
  const [orderList, setOrderList] = useState(props.orderList);

  return (
    <>
      <ReceiptPage orderList={orderList} />

    </>
  )
}

export async function getStaticPaths(props) {
  const sq1 = "SELECT * FROM ordertable";
  const data: any = await runSQL(sq1);
  const paths = data.map((ordertable) => ({
    params: { id: `${ordertable.orderNumber}` },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // const sq1 = `SELECT orderNumber, userId, itemId, orderReceipt, orderReview, orderStar, orderQua, orderDeter FROM ordertable WHERE orderNumber = "${params.id}"`;
  const sq1 = `SELECT item.itemId ,orderNumber, userId, orderReceipt, orderDate, orderQua, orderDeter , itemTitle FROM ordertable, item WHERE ordertable.itemId = item.itemId and orderNumber = "${params.id}"`;

  const orderList: any = [];
  const orderListRaw: any = (await runSQL(sq1));

  //轉日期格式
  orderListRaw.forEach((ordertable: any) => {
    ordertable.orderDate = format(ordertable.orderDate, "yyyy-MM-dd");
    orderList.push({ ...ordertable });
  });

  // const data = (await runSQL(sq1))[0]; //有成功但沒日期暫不刪除

  //把要的資料拿出來
  return {
    props: {
      // ...data,
      orderList,
    },
  };
}
