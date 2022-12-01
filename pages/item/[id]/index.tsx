//嵌入img
import Image from "next/image";
//引入NEXT內建的script
import Script from "next/script";
//lib裡的指令重複使用
import { runSQL } from "../../../lib/mysql";
//整理日期格式
import { format } from "date-fns";
import Router from "next/router";
import { useEffect, useState } from "react";
import ReactCalendar from "react-calendar";
import { props } from "ramda";
import { Console } from "console";

function Calendar({ price, itemId }) {
  const [value, onChange] = useState(new Date());
  return (
    <div style={{ display: "flex" }}>
      <ReactCalendar onChange={onChange} value={value} />
      <div className="addToCarPrice">
        <p>
          售價:<span id="itemPrice">{price}</span>
        </p>
        <br />
        <p>
          總計:<span id="itemTotal">0</span>
        </p>
        <br />
        <div className="counterBtn">
          <p id="plus">
            <input type="button" onClick={() => window.adder()} value="+" />
          </p>
          <p id="countCar">0</p>
          <p id="minus">
            <input type="button" onClick={() => window.minuser()} value="-" />
          </p>
        </div>
        <br />
        <p>
          <button
            className="addToCarBtn"
            onClick={() => window.addToCar(itemId, format(value, "yyyy-MM-dd"))}
          >
            加入購物車
          </button>
        </p>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <div className="footer">
      <div className="footerCenter">
        <div className="footerBody">
          <ul>
            <h4>認識我們</h4>
            <li>
              <a href="">關於我們</a>
            </li>
            <li>
              <a href="">使用者條款</a>
            </li>
            <li>
              <a href="">隱私權保護政策</a>
            </li>
            <li>
              <a href="">常見問題與幫助</a>
            </li>
          </ul>
        </div>
        <div className="footerBody">
          <ul>
            <h4>給旅行者們</h4>
            <li>
              <a href="">三大保證</a>
            </li>
            <li>
              <a href="">合作夥伴</a>
            </li>
            <li>
              <a href="">回饋金介紹</a>
            </li>
            <li>
              <a href="">賺取額外獎勵</a>
            </li>
          </ul>
        </div>
        <div className="footerBody">
          <ul>
            <h4>給合作夥伴</h4>
            <li>
              <a href="">成為供應商</a>
            </li>
            <li>
              <a href="">供應商登入</a>
            </li>
            <li>
              <a href="">同業合作</a>
            </li>
            <li>
              <a href="">聯盟行銷</a>
            </li>
          </ul>
        </div>
        <div className="footerBody">
          <div className="footerImg">
            <h4>付款方式</h4>
            <Image
              width={20}
              height={20}
              src="/images/MasterCard.png"
              alt="MasterCard"
            />
            <Image width={20} height={20} src="/images/JCB.jpg" alt="JCB" />
            <Image width={20} height={20} src="/images/visa.png" alt="visa" />
            <Image
              width={20}
              height={20}
              src="/images/googlepay.jpg"
              alt="googlepay"
            />
            <Image
              width={20}
              height={20}
              src="/images/apple-pay.png"
              alt="apple"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
function Header() {
  return (
    <div className="header">
      <img
        src="./images/群組 1.png"
        alt=""
        style={{ width: 90, top: -8, position: "relative" }}
      />
      <div className="header-right">
        <a href="#">美食</a>
        <a href="#">景點</a>
        <a href="#">活動</a>
        <a href="#">住宿</a>
        <a href="#">交通</a>
        <a onClick={() => Router.push("/cartdetails")}>
          <img src="/images/cart.png" style={{ width: 25 }} />
        </a>
        <a href="#divOne" className="loginbutton">
          登入|註冊
        </a>
      </div>
      <form className="example" action="">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
}
function Carousel({ imgList }) {
  return (
    <div className="main-carousel">
      {imgList.map((i) => (
        <div className="carousel-cell" key={i.imgId}>
          <img src={`${i.itemImgUrl}`} alt="" />
        </div>
      ))}
    </div>
  );
}
function Receipt(orderList){
  console.log(orderList);
  return(<div>
    <h3>評價:</h3>
    <p>訂單編號:{orderList.orderList[0].orderReceipt}</p>
    <p>會員帳號:{orderList.orderList[0].userId}</p>
    <p>消費日期:{orderList.orderList[0].orderDate}</p>
    <p>星等:{orderList.orderList[0].orderStar}</p>
    <p>評語:{orderList.orderList[0].orderReview}</p>
  </div>)
}
//ItemPage
export default function ItemPage(props) {
  const [orderList, setOrderList] = useState(props.orderList);
  useEffect(() => {
    const Flickity = require("flickity");
    new Flickity(".main-carousel");
  }, []);
  return (
    <>
      <Header />
      <Carousel imgList={props.imgList} />
      <div className="item-container">
        <div>
          <h1>{props.itemTitle}</h1>
        </div>
        <div>
          <h3>
            地區:&nbsp;<span>{props.itemFilter2}</span>
          </h3>
        </div>
        <div>
          <h3>
            價錢:&nbsp;<span>{props.itemPrice}</span>元
          </h3>
        </div>
        <div>
          <h3>
            商品說明:&nbsp;
            <pre style={{ whiteSpace: "pre-line" }}>{props.itemInfo}</pre>
          </h3>
        </div>
        <div>
          <div>
            <h2>
              商品名稱:&nbsp;<span>{props.itemName}</span>
            </h2>
          </div>
          <div>
            <h3>
              銷售日期:&nbsp;<span>{props.itemStartDate}-{props.itemEndDate}</span>
            </h3>
          </div>
          <div>
            <h2>請選擇日期</h2>
          </div>
          <Calendar price={props.itemPrice} itemId={props.itemId} />
        </div>
        <div>
          <h3>
            注意事項:
            <pre style={{ whiteSpace: "pre-line" }}>{props.itemNote}</pre>
          </h3>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h3>{props.itemAddr}</h3>
            <p>
              地址:&nbsp;<span>{props.itemLocation}</span>
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.8845360771206!2d121.22031161483552!3d24.730843984115214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346802cac6d3e685%3A0x99afbd6ecf270016!2z55-z5LiK5rmv5bGL!5e0!3m2!1szh-TW!2stw!4v1668581828726!5m2!1szh-TW!2stw"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <h3 style={{ padding: "0 20px" }}>
              交通資訊:
              <pre style={{ whiteSpace: "pre-line" }}>{props.itemTraffic}</pre>
            </h3>
          </div>
        </div>
        <Receipt orderList={orderList} />
      </div>
      {/* <button
        onClick={() => {
          fetch("http://localhost:3000/api/item/1", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
              itemAddr: "test1",
              itemPrice: 100,
              itemTotalStar: 2,
            }),
          });
        }}
      >
        {"Test"}
      </button> */}
      <br />
      <Footer />
    </>
  );
}

//getStaticPaths是next的內建方法傳入props參數
//靜態產生頁面去抓所有的item頁面
//產生73個頁面
export async function getStaticPaths(props) {
  const sq1 = "SELECT * FROM item";
  const data: any = await runSQL(sq1);
  const paths = data.map((item) => ({
    params: { id: `${item.itemId}` },
  }));
  return {
    paths,
    fallback: false,
  };
}


//頁面產生出來之後從params去找出特定需要的那一頁
export async function getStaticProps({ params }) {
  const sq1 = `SELECT * FROM item WHERE itemId = "${params.id}"`;
  const sq3 = `SELECT * FROM itemimg WHERE itemId = "${params.id}"`;
  const sq2 = `SELECT * FROM ordertable WHERE itemId = "${params.id}"`
  // any是沒有定義的意思
  const imgList: any = [];

  const data = (await runSQL(sq1))[0];
  const imgListRaw: any = await runSQL(sq3);  
  const orderList: any = [];
  const orderListRaw: any = (await runSQL(sq2));
  orderListRaw.forEach((ordertable: any) => {
    ordertable.orderDate = format(ordertable.orderDate, "yyyy-MM-dd");
    orderList.push({ ...ordertable });
  });

  //forEach是在轉格式,原本出來是database物件
  imgListRaw.forEach((item: any) => {
    item.itemImgUrl = new TextDecoder("utf-8").decode(item.itemImgUrl);
    imgList.push({ ...item });
  });
  //下面是在轉日期格式
  data.itemListedDate = format(data.itemListedDate, "yyyy-MM-dd");
  data.itemStartDate = format(data.itemStartDate, "yyyy-MM-dd");
  data.itemEndDate = format(data.itemEndDate, "yyyy-MM-dd");
  //把要的資料拿出來
  return {
    props: {
      ...data,
      imgList,
      orderList,
    },
  };
}
