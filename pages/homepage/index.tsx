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
import Placezone from "./component/Placezone2.jsx";



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
            <Placezone/>
         
            <Footer />
            {/* <Script src="/js/home.js" /> */}
        </>
    )
}


