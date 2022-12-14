import { runSQL } from "../../../lib/mysql";
import Image from "next/image";
import { useState } from 'react';
import Router from "next/router";
import { format } from "date-fns";
// import { compareAsc, format } from 'date-fns'

function ReceiptQr({
  userName,
  orderReceipt,
  itemTitle,
  orderDeter,
  orderNumber
  }) {
  const XBtn = () => {
    fetch(`http://localhost:3000/api/receiptQr/${orderNumber}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        orderDeter: 2,
      }),
    });    
    
    var today = format(new Date(), 'yyyy-MM-dd HH:MM');

    document.getElementById("XBtn").style.backgroundColor = "#d5c8ae";
    document.getElementById("XBtn").style.color = "white";
    document.getElementById("XBtn").innerText = "已核銷";
    document.getElementById("xPersonnel").innerText = "石上湯屋渡假村";
    document.getElementById("xTime").innerText = `${today}`;
    

    // console.log(userName, orderReceipt, itemTitle)
  };
  if(orderDeter === 1){
    return (<div >
      <div className="receiptTitleB">
        <img src="./images/群組 1.png" alt="" />訂單明細
        <br />
        <div className="receiptBodyB">
          <h3>{itemTitle}</h3>
          <p> 訂購人：<span>{userName}</span> </p>
          <p>訂單編號：<span>{orderReceipt}</span> <button id="XBtn" onClick={() => XBtn()}>核銷</button></p>
          <p>核銷人員：<span id="xPersonnel"></span> </p>
          <p>核銷時間：<span id="xTime"></span> </p>
        </div>
      </div>
    </div>  
    )
  }
  if(orderDeter === 2){
    return (<div >
      <div className="receiptTitleB">
        <img src="./images/群組 1.png" alt="" />訂單明細
        <br />
        <div className="receiptBodyB">
          <h3>{itemTitle}</h3>
          <p> 訂購人：<span>{userName}</span> </p>
          <p>訂單編號：<span>{orderReceipt}</span> <button style={{color:"white",backgroundColor : "#d5c8ae"}} id="XBtn">已核銷</button></p>
        </div>
      </div>
    </div>  
    )
  }
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
  const sq1 = `SELECT orderDeter, orderNumber, userName, orderReceipt, itemTitle FROM ordertable, usertable, item WHERE usertable.userId = ordertable.userId AND ordertable.itemId = item.itemId AND orderNumber = "${params.id}"`;
  const data = (await runSQL(sq1))[0]; 


  //把要的資料拿出來
  return {
    props: {
      data: { ...data },

    },
  };
}