import { runSQL } from "../../../lib/mysql";
import Image from "next/image";
import { useState } from 'react';
import Router from "next/router";
import { format } from "date-fns";

function ReceiptQr({
  userName,
  orderReceipt,
  itemTitle
  }) {
  const XBtn = () => {
    document.getElementById("XBtn").style.backgroundColor = "#d5c8ae";
    document.getElementById("XBtn").style.color = "white";
    document.getElementById("XBtn").innerText = "已核銷";
    // console.log(userName, orderReceipt, itemTitle)
  };
  return (<div >
    <div className="receiptTitleB">
      <img src="./images/群組 1.png" alt="" />訂單明細
      <br />
      <div className="receiptBodyB">
        <h3>{itemTitle}</h3>
        <p> 訂購人：<span>{userName}</span> </p>
        <p>訂單編號：<span>{orderReceipt}</span> <button id="XBtn" onClick={() => XBtn()}>核銷</button></p>
      </div>
    </div>
  </div>

  )
}


export default function QrReceipt(props) {
  return (
    <>
      <ReceiptQr {...props.data} />

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
  const sq1 = `SELECT orderNumber, userName, orderReceipt, itemTitle FROM ordertable, usertable, item WHERE usertable.userId = ordertable.userId AND ordertable.itemId = item.itemId AND orderNumber = "${params.id}"`;
  const data = (await runSQL(sq1))[0]; //有成功但沒日期暫不刪除

  // //V2
  // const sq1 = `SELECT item.itemId ,orderNumber, userId, orderReceipt, orderDate, orderQua, orderDeter , itemTitle FROM ordertable, item WHERE ordertable.itemId = item.itemId and orderNumber = "${params.id}"`;
  // const orderList: any = [];
  // const orderListRaw: any = (await runSQL(sq1)); 
  // //轉日期格式
  // orderListRaw.forEach((ordertable: any) => {
  //   ordertable.orderDate = format(ordertable.orderDate, "yyyy-MM-dd");
  //   orderList.push({ ...ordertable });
  // });


  //把要的資料拿出來
  return {
    props: {
      data: { ...data },
      // ...data,
      // orderList,
    },
  };
}