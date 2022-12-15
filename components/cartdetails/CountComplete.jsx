import axios from "axios"
import React ,{useEffect, useState}from 'react';
export default function CountComplete() {
    const [userName,setUserName]=useState();
    const [receipt,setReceipt]=useState();
    useEffect(()=>{
        axios.get("/api/cart/countComplete")
            .then((res)=>{
                setUserName(res.data.data[0].userName)
                setReceipt(res.data.data[0].orderReceipt);
            })
    })
    return (
      <>
        <div id="progressBar">
          {/* <!-- 進度條 --> */}
          <div>
            <span style={{"width":"100%"}}></span>
          </div>
          <ol className="cartList">
            <li>
              購物車
              <img  src="/images/flower.png" alt="flower"/>
            </li>
            <li>
              填寫資料及付款
              <img src="/images/flower.png" alt="flower" style={{"filter":" grayscale(0%)"}}/>
            </li>
            <li>
              訂購完成
              <img src="/images/flower.png" alt="flower" style={{"filter":" grayscale(0%)"}}
              />
            </li>
          </ol>
        </div>
  
        <br/><br/>
  
          <div className="okOrderBody">
            <br/>
                <img style={{"animation-iteration-count": "1"}} className="ld ld-surprise" src="/images/check.png" alt="check" />
                <h2>感謝您的訂購</h2>
                <h5>訂購人：{userName}</h5>
                <h5>訂單編號:{receipt}</h5>
                <a href="/">回到首頁</a>
                <br /><br />
          </div>
        </>
      )
  }