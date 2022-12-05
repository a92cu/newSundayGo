import Image from "next/image";
import { useState } from 'react';
import Script from "next/script";
import { runSQL } from "../../lib/mysql";
import { format } from "date-fns";
import * as R from "ramda";
import { useRouter } from 'next/router'
import Listdemo from "./component/Listdemo.jsx";

//   header
function Header() {
    return (
        <div className="header ">
            <a href="/homepage">
                <img src="/images/群組 1.png"
                    alt=""
                    style={{ width: '90px', top: '-8px', position: 'relative' }} /></a>
            <div className="header-right">
                <a href="/home/food">美食</a>
                <a href="/home/place">景點</a>
                <a href="/home/play">活動</a>
                <a href="/home/living">住宿</a>
                <a href="/home/car">交通</a>
                <a href="#"><img src="/images/cart.png" style={{ width: '25px' }} /></a>
                <a href="#">登入|註冊</a>
            </div>
            <form className="example" action="">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
    );
}

//進度條
function Titlebar() {
    return (
        <>

            <div id="progressBar">
                {/* 進度條  */}
                <div>
                    <span></span>
                </div>
                {/* 花跟字  */}
                <ol className="cartList">
                    <li>
                        {/* 購物車 */}
                        <img src="/images/flower.png" />
                    </li>
                    <li>
                        {/* 填寫資料及付款 */}
                        <img src="/images/flower.png" />
                    </li>
                    <li>
                        {/* //訂購完成 */}
                        <img src="/images/flower.png" />
                    </li>
                </ol>
            </div>
        </>
    )
}

// footer  
function Footer() {
    return (
        <div className="footer">
            <div className="footerCenter">
                <div className="footerBody">
                    <ul>
                        <h4>認識我們</h4>
                        <li><a href="">關於我們</a></li>
                        <li><a href="">使用者條款</a></li>
                        <li><a href="">隱私權保護政策</a></li>
                        <li><a href="">常見問題與幫助</a></li>
                    </ul>
                </div>
                <div className="footerBody">
                    <ul>
                        <h4>給旅行者們</h4>
                        <li><a href="">三大保證</a></li>
                        <li><a href="">合作夥伴</a></li>
                        <li><a href="">回饋金介紹</a></li>
                        <li><a href="">賺取額外獎勵</a></li>
                    </ul>
                </div>
                <div className="footerBody">
                    <ul>
                        <h4>給合作夥伴</h4>
                        <li><a href="">成為供應商</a></li>
                        <li><a href="">供應商登入</a></li>
                        <li><a href="">同業合作</a></li>
                        <li><a href="">聯盟行銷</a></li>
                    </ul>
                </div>
                <div className="footerBody">
                    <div className="footerImg">
                        <h4>付款方式</h4>
                        <Image width={20} height={20} src="/images/MasterCard.png" alt="MasterCard" />
                        <Image width={20} height={20} src="/images/JCB.jpg" alt="JCB" />
                        <Image width={20} height={20} src="/images/googlepay.jpg" alt="googlepay" />
                        <Image width={20} height={20} src="/images/apple-pay.png" alt="applepay" />
                    </div>

                </div>
            </div>
        </div>
    )
}
//訂購人
function Orderman() {
    return (
        <section className="orderman" >
            <div className="cartsidebar">
                <div className="cartsidebar__inner">
                    <button className="cartaccordion ">
                        <h3>訂購人資料</h3>
                        <hr />
                    </button>
                    <div className="cartpanel">
                        <div className="orderleft">
                            <span>名字</span>
                            <br />
                            <input type="text" name="userName" id="CartuserName" required />
                            <div>
                                <span>地區</span>
                                <br />
                                <input type="text" name="area" required />
                            </div>

                            <div>
                                <span>電子信箱</span>
                                <br />
                                <input type="email" name="usermail" required />
                            </div>

                        </div>

                        <div className="orderright">
                            <div>
                                <span>姓氏</span>
                                <br />
                                <input type="text" name="username2" required />
                            </div>
                            <div>
                                <span>連絡電話</span>
                                <br />
                                <input type="tel" name="userPhone" pattern="[0-9]{10}" id="CartuserPhone" required />
                            </div>
                        </div>


                        {/* <!-- <input class="orderbtn" type="submit"> --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
//旅客資料
function Travelman() {
    return (
        <section className="travelman">
            <div className="cartsidebar">
                <div className="cartsidebar__inner">
                    <button className="cartaccordion">
                        <h3>旅客資料</h3>
                        <hr />
                    </button>
                    <div className="cartpanel">
                        <div className="carthomeProduct">
                            {/* <!-- 圖片框 --> */}
                            <div className="cartpicPlace">
                                <img className="cartproPic" src="/images/20220520170357-1298d211.jpg" alt="" />
                            </div>
                            {/* <!-- 介紹欄 --> */}
                            <div className="cartinco">

                                <h3>
                                    <p>屏東小琉球|高雄 - 東港接駁&小琉球船票接駁套餐&船票機車套餐|一人成行</p>

                                </h3>

                                {/* <!-- 地區標籤 --> */}
                                <div>
                                    <div className="carttagplace">
                                        高雄
                                    </div>
                                    <div>
                                        活動日期 ：2022-11-08
                                        時間 : 16:00
                                        人數 : 1人
                                    </div>

                                </div>

                            </div>

                        </div>
                        <h4>特殊需求備註</h4>
                        <div>
                            <textarea placeholder="此欄位僅限資料備註，不保證提供"></textarea>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

//付款方式 
function Paylist() {
    return (
        <section className="paylist">
            <div className="cartsidebar">
                <div className="cartsidebar__inner">
                    <button className="cartaccordion">
                        <h3>請選擇付款方式</h3>
                        <hr />
                    </button>
                    <div className="cartpanel">
                        <ul>
                            <li className="payway">
                                <label htmlFor="linepay">
                                    <input type="radio" id="linepay" name="payway" className="payway"/>
                                    <span>LINE Pay</span>
                                    <img src="https://cdn.kkday.com/pc-web/assets/img/payment/ic_linepay_2.svg" alt="" />
                                </label>
                            </li>
                            <li className="payway">
                                <label htmlFor="cardeit">

                                    <input type="radio" id="cardeit" name="payway"/>
                                    <span className="">信用卡/簽帳金融卡</span>
                                    <img src="https://cdn.kkday.com/pc-web/assets/img/payment/ic_visa.svg" alt="" />
                                    <img src="https://cdn.kkday.com/pc-web/assets/img/payment/ic_master.svg" alt="" />
                                    <img src="https://cdn.kkday.com/pc-web/assets/img/payment/ic_jcb.svg" alt="" />
                                </label>
                                <br />
                                <div className="toggle">
                                    信用卡號碼
                                    <input type="text" className="cardint" pattern="[0-9]{12}" placeholder="0000 0000 0000" required />
                                    <br />
                                    有效期限
                                    <input type="text" className="cardint" name="" placeholder="MM/YY" required />
                                    <br />
                                    背面末3碼
                                    <input type="text" className="cardint" placeholder="CVC/CCV" />
                                </div>
                            </li>
                            <li className="payway">
                                <label htmlFor="webatm">
                                    <input type="radio" id="webatm"  name="payway" />
                                    <span>網路ATM</span>
                                </label>
                            </li>
                            <li className="payway">
                            <b>
                            請注意本平台不會向您收取任何平台交易手續費，
                            但你下單時使用的信用卡或第三方支付平台可能會向您收取相關手續費，
                            請參考其相關服務政策和規定，並向你所選的交易服務商取得更多資訊。</b>
                            </li>
                        </ul>

                        


                    </div>
                </div>
            </div>
        </section>
    )
}
//電子發票
function Billlist() {
    return (
        <section className="billlist">
            <div className="cartsidebar">
                <div className="cartsidebar__inner">
                    <button className="cartaccordion">
                        <h3>電子發票</h3>
                        <hr />
                    </button>
                    <div className="cartpanel">
                        <p>電子收據寄送方式</p>
                        <select name="" id="" style={{ width: '200px' }}>
                            <option >寄送至信箱</option>
                            <option >開立統編、收據</option>
                        </select>
                        <p>寄送信箱</p>
                        <input type="email" value={'123@gmail.com'} />
                        {/* <!-- <h6>地址</h6>
                                                                <input type="text"> --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
//付款明細
function Billtotal() {
    return (
        <section className="billtotal">
            <div className="cartsidebar">
                <div className="cartsidebar__inner">
                    <button className="cartaccordion">
                        <h3>付款明細</h3>
                        <hr />
                    </button>
                    <div className="cartpanel">
                        <div className="carthomeProduct">
                            {/* <!-- 圖片框 --> */}
                            <div className="cartpicPlace">
                                <img className="cartproPic" src="/images/20220520170357-1298d211.jpg" alt="" />
                            </div>
                            {/* <!-- 介紹欄 --> */}
                            <div className="cartinco">

                                <h3>
                                    <p>屏東小琉球|高雄 - 東港接駁&小琉球船票接駁套餐&船票機車套餐|一人成行</p>

                                </h3>

                                {/* <!-- 地區標籤 --> */}
                                <div>
                                    <div className="carttagplace">
                                        高雄
                                    </div>
                                    <div>
                                        活動日期 ：2022-11-08
                                        時間 : 16:00
                                        人數 : 1人
                                    </div>

                                </div>

                            </div>

                        </div>

                        <span className="carthrline">總金額 TWD</span>
                        <span className="paybill1">1800</span>
                        <hr />
                        <span className="carthrline">點數折抵 TWD</span>
                        <span className="billcount">100</span>
                        <hr />
                        <span className="carthrline">支付金額 TWD</span>
                        <span className="paybill2">1700</span>
                        <hr />
                    </div>
                </div>
            </div>

        </section>
    )
}
//結帳區
function Paybill() {
    return (
        <section className="paybill">
            <span>商品合計      TWD</span> <span className="cartprdtit">1700</span>
            <br /><br />
            <span className="prdtit2">訂單完成後回饋金 TWD</span><span className="prdtit3">17</span>

            <input type="submit" value="確認付款" id="billok" />
        </section>
    )

}

export default function homepage() {
    return (
        <>

            <Header />
            <Titlebar />
            {/* <Listdemo /> */}
            <main style={{ width: '1280px', margin: '0 auto' }}>
                <form action="">
                <Orderman />
                <Travelman />
                <Paylist /> 
                <Billlist />
                <Billtotal />
                <Paybill />
                </form>
            </main>

            <Footer />
            <Script src="/js/home.js" />

        </>



    )
}
//頁面產生出來之後從params去找出特定需要的那一頁
export async function getStaticProps({ params }) {
    // 帳號設定抓的資料 (userBirthday有問題)
    const sq1 = `SELECT userId, userPassword, userName, useGender, userPhone, userEmail FROM usertable WHERE userId = "u123456789"`;
    // const sq1 = `SELECT * FROM usertable WHERE userId = "u123456789"`;
    // 我的收藏資料庫抓的
    const sq2 = `SELECT * FROM favorite , item WHERE favorite.itemId = item.itemId AND userId = 'u123456789';`;
    const sq3 = `SELECT * FROM itemimg`;
    const sq4 = `SELECT item.itemId , userId, orderNumber, orderReceipt,orderReview, orderStar, orderDate, orderQua, orderDeter , itemTitle, itemPrice FROM ordertable, item WHERE ordertable.itemId = item.itemId;`;
    // any是沒有定義的意思
    const imgList: any = [];
    const itemList: any = [];
    const orderList: any = [];

    const memberCentre = (await runSQL(sq1))[0]; // 帳號設定抓的資料
    const itemListRaw: any = await runSQL(sq2); // 我的收藏
    const imgListRaw: any = await runSQL(sq3); // item的圖片
    const orderListRaw: any = (await runSQL(sq4)); // 訂單管理抓的資料
    // forEach是在轉格式,原本出來是database物件
    imgListRaw.forEach((item: any) => {
        item.itemImgUrl = new TextDecoder("utf-8").decode(item.itemImgUrl);
        imgList.push({ ...item });
    });
    itemListRaw.forEach((item: any) => {
        item.itemListedDate = format(item.itemListedDate, "yyyy-MM-dd");
        item.itemStartDate = format(item.itemStartDate, "yyyy-MM-dd");
        item.itemEndDate = format(item.itemEndDate, "yyyy-MM-dd");
        itemList.push({ ...item });
    });
    orderListRaw.forEach((ordertable: any) => {
        ordertable.orderDate = format(ordertable.orderDate, "yyyy-MM-dd");
        orderList.push({ ...ordertable });
    });

    //把要的資料拿出來
    return {
        props: {
            // 帳號設定抓的資料
            memberCentre: { ...memberCentre },
            imgList,
            itemList,
            orderList,
        },
    };
}
