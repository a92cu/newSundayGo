//嵌入img
import Image from "next/image";
//引入NEXT內建的script
import Script from "next/script";
//lib裡的指令重複使用
import { runSQL } from "../../lib/mysql";
//整理日期格式
import { format } from "date-fns";
// 帶入react 與 axios 套件
import React, { Component } from 'react';
// import Link from 'next/link';s
import Mapselect from "./component/Taiwanmap.jsx";
// import Placezone from "./component/Placezone.jsx";



//   header
function Header() {
    return (
        <div className="header ">
            <a href="/home">
                <img src="/images/群組 1.png"
                    alt=""
                    style={{ width: '90px', top: '-8px', position: 'relative' }} /></a>
            <div className="header-right">
                <a href="/homepage/food">美食</a>
                <a href="/homepage/place">景點</a>
                <a href="/homepage/play">活動</a>
                <a href="/homepage/living">住宿</a>
                <a href="/homepage/car">交通</a>
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

//homepage 畫面路由
export default function homepage({data}) {
    return (
        <>
            <Header />
            <Mapselect />
            {/* <Placezone/> */}
            <div style={{ width: '1280px', margin: '0 auto' }} >
            {/* <!-- 主要篩選區 --> */}
            <div className="hometop" >
                {/* <!-- 左側篩選欄 --> */}
                <div id="main-content" className="main homeleft" >
                    <div id="sidebar" className="sidebar" >
                        <div className="sidebar__inner" >
                            篩選目的地
                            <br />
                            <button className="accordion">
                                <input type="checkbox" className="allcheck" />北部
                            </button>
                            <div className="panel" >
                                <input type="checkbox" name="citys" />基隆市
                                <br />
                                <input type="checkbox" name="citys" />新北市
                                <br />
                                <input type="checkbox" name="citys" />台北市
                                <br />
                                <input type="checkbox" name="citys" />桃園市
                            </div>

                            <button className="accordion">
                                <input type="checkbox" className="allcheck" />中部
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" />新竹縣
                                <br />
                                <input type="checkbox" name="citys" />新竹市
                                <br />
                                <input type="checkbox" name="citys" />苗栗縣
                                <br />
                                <input type="checkbox" name="citys" />台中市
                                <br />
                                <input type="checkbox" name="citys" />雲林縣
                                <br />
                                <input type="checkbox" name="citys" />南投縣
                                <br />
                            </div>

                            <button className="accordion">
                                <input type="checkbox" className="allcheck" />南部
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" />嘉義縣
                                <br />
                                <input type="checkbox" name="citys" />嘉義市
                                <br />
                                <input type="checkbox" name="citys" />台南市
                                <br />
                                <input type="checkbox" name="citys" />高雄市
                                <br />
                                <input type="checkbox" name="citys" />屏東縣
                            </div>
                            <button className="accordion">
                                <input type="checkbox" className="allcheck" />東部
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" />宜蘭縣
                                <br />
                                <input type="checkbox" name="citys" />花蓮縣
                                <br />
                                <input type="checkbox" name="citys" />台東縣
                                <br />
                            </div>
                            <button className="accordion">
                                <input type="checkbox" className="allcheck" />離島
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" />澎湖
                                <br />
                                <input type="checkbox" name="citys" />金門
                                <br />
                                <input type="checkbox" name="citys" />馬祖
                                <br />
                                <input type="checkbox" name="citys" />綠島
                                <br />
                                <input type="checkbox" name="citys" />蘭嶼
                            </div>


                        </div>
                        {/* <!-- 商品類別篩選 --> */}
                        <div className="sidebar__inner2">
                            商品類別篩選
                            <br />
                            <button className="accordion">
                                <input type="checkbox" className="allcheck" />美食
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" />餐廳
                                <br />
                                <input type="checkbox" name="citys" />甜點、飲料
                            </div>
                            <button className="accordion">
                                <input type="checkbox" className="allcheck" />景點
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" />觀光景點
                                <br />
                                <input type="checkbox" name="citys" />門票
                            </div>

                            <button className="accordion">
                                <input type="checkbox" className="allcheck" />活動
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" />戶外活動
                                <br />
                                <input type="checkbox" name="citys" />藝文活動

                            </div>

                            <button className="accordion">
                                <input type="checkbox" className="allcheck" />住宿
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" />民宿
                                <br />
                                <input type="checkbox" name="citys" />飯店

                            </div>
                            <button className="accordion">
                                <input type="checkbox" className="allcheck" />交通
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" />租車
                                <br />
                                <input type="checkbox" name="citys" />飛機
                                <br />
                                <input type="checkbox" name="citys" />船班
                                <br />
                                <input type="checkbox" name="citys" />高鐵
                                <br />
                                <input type="checkbox" name="citys" />客運
                            </div>
                        </div>
                    </div >
                </div>
                {/* <!-- 右側顯示區 --> */}
                < div className="homeright" >
                    {/* <!-- 顯示篩選 --> */}
                    < div className="homerightup" >
                        共篩選出
                        < span style={{ color: '#F29F04' }}>XX</span>
                        項行程

                        <button className="filterBtn" > 55</button>

                        <button className="filterBtn">美食餐廳</button>
                        <hr />
                        <span className="homerightup2"> 排序|<a href="">熱門程度</a>|<a href="">用戶評價</a>|<a
                            href="">&#36;價格由低到高</a></span>

                    </div >
                    <div id="content" className="content">
                        {/* <!-- 商品顯示主體 --> */}
                        {/* {homepagelist.map((item, index) =>{  */}
                            <div className="homeProduct">
                                {/* <!-- 圖片框 --> */}
                                <div className="picPlace">

                                    {/* <img className="proPic" src={item.itemImgUrl} alt="" /> */}
                                    <img className="proPic" src="/images/20220520170357-1298d211.jpg" alt="" />
                                    {/* ))} */}
                                </div>
                                {/* <!-- 介紹欄 --> */}
                                <div className="intro">
                                    {/* {item.itemTitle} */}
                                        1   
                                    {/* <!-- 商品標題 --> */}
                                    <span className="introp">
                                        {/* <!-- 愛心圖案 --> */}
                                        <a href="./index.html">
                                            <img className="introimg" src="/images/heart.png"
                                                style={{ width: '20px', marginLeft: '130px' }} alt="" />
                                        </a>
                                    </span>

                                    {/* 商品標題 */}
                                    <p className="iteminfo">
                                        {/* {item.itemInfo} */}22

                                    </p>
                                    {/* <!-- 地區標籤 --> */}
                                    <div>
                                        <img src="/images/place.jpg" style={{ width: '20px', float: 'left' }} alt="" />
                                        {/* <span className="fa fa-tags" aria-hidden="true"></span>  */}
                                        <div className="tagplace">
                                            {/* {item.itemFilter1} */}
                                            33
                                        </div>
                                        <div className="tagplace">
                                            {/* {item.itemFilter2} */}
                                            44
                                        </div>

                                        <div className="tagplace">
                                            {/* {item.itemFilter3} */}
                                            55
                                        </div>
                                        <div className="tagplace">
                                            {/* {item.itemFilter4} */}
                                            66
                                        </div>
                                        <span className="fa fa-calendar-o" aria-hidden="true"></span>
                                        <span>
                                            {/* 最早可預訂日 ：{item.itemListedDate} */}
                                            銷售期間 ：77
                                            {/* {item.itemPeriod} */}
                                        </span>
                                    </div>
                                    {/* <!-- 星星評價 --> */}
                                    <div className="prostar">
                                        {/* for(var i=1;i<{item.itemTotalStar};i++){ */}
                                        <img src="/images/1.png" alt="" />
                                        {/* } */}
                                        <img src="/images/1.png" alt="" />
                                        <img src="/images/1.png" alt="" />
                                        <img src="/images/0.png" alt="" />
                                        <img src="/images/0.png" alt="" />

                                        <div className="homepri">
                                            {/* <p>TWD {item.itemPrice}</p> */}
                                            <p>TWD 888</p>
                                        </div>
                                    </div>

                                    {/* <!-- 星星圖樣 --> */}
                                    {/* <div className="star" style="background-color: red;">
                                  <svg className="homestar" height="210" width="550">
                                      <polygon points="100,10 40,198 190,78 10,78 160,198"
                                          style="fill:#FAEF8B;stroke-width:5;fill-rule:nonzero;" />
                                      Sorry, your browser does not support inline SVG.
                                  </svg>
                              </div>  */}
                                </div>

                            </div>
{/* })} */}
                    </div>
                </div >

                {/* <!-- 頁籤 --> */}
                < ul className="pagination" >

                    <li><a href="#">1</a></li>
                    <li><a className="pagetag" href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">6</a></li>
                    <li><a href="#">7</a></li>

                </ul >

            </div >
        </div >
            <Footer />
            <Script src="/js/home.js" />
        </>
    )
}


