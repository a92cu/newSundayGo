import axios from "axios";
import {useState,useEffect} from "react";

export default function Paybill() {
    // 設置金額的useState
    const [total,setTotal]=useState(0);
    let takeTotal=0;
    useEffect(()=>{
        // 從localStorage拿資料過來計算金額
        let shopList=JSON.parse(window.localStorage.getItem("sureshopcar"));
        console.log(shopList)
        for (const key in shopList) {
            takeTotal+=shopList[key].count*shopList[key].price;
            setTotal(takeTotal) // 設置total金額
        }
    },[])
    // 傳送資料
    const favIdsend = async () => {

        // // 訂單當下日期
        // let newDate=new Date();
        // let orderDate=newDate.getFullYear() +"-"+ (newDate.getMonth()+1==13? 1:12) +"-"+ newDate.getDate();
        // console.log(orderDate)

        // 拿到購物資料
        let shopList=JSON.parse(window.localStorage.getItem("sureshopcar"));
        // 將購物資料轉成陣列
        var obj = Object.keys(shopList).map(function(_) { return shopList[_]; });
        // 創造需要傳送的資料
        obj.forEach((e)=>{
            e.userId='u123456789'; // 寫死
            e.orderRebate=Math.floor((e.count*e.price)*0.02);
            e.total=e.count*e.price;
            e.orderReceipt='order000012'; // 寫死
        })
        console.log(obj)
        // 傳送資料到API
        await axios.put("/api/cartlist/cartlist",{
            allData:obj
        })
        window.location="/cartdetails/countComplete"
    }

    return (
        <section className="paybill">
            {/* <div>
            <span>商品合計</span> <span className="cartprdtit">TWD {total}</span>
            </div> */}
            
            <div className="prdtit">  
            <span className="prdtit2 carthrline">訂單完成後回饋金 </span><span className="prdtit3">TWD &nbsp;&nbsp;&nbsp;{Math.floor(total*0.02)}</span>
            </div>
            <hr />
            <input className="prdtit4" type="button" value="確認付款" id="billok" onClick={favIdsend} />
        </section>
    )

}