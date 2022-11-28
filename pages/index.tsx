import React from 'react';
import Link from 'next/link';
//嵌入img
import Image from "next/image";
//引入NEXT內建的script
import Script from "next/script";
// import "../public/images/taiwan.mp4";
// import  withVideos from "/next.config.js";


function Header() {
  return (
    <>
      <div className="header ">
        <img src="l.png" alt="" style={{ width: '30px' }} />
        <div className="header-right">
          <a href="#contact">登入|註冊</a>
          {/* <button className="openbtn" onclick="myFunction()">&#9776; </button> */}
        </div>
      </div>

      <div id="myLinks">
        <a href="#">美食</a>
        <a href="#">景點</a>
        <a href="#">活動</a>
        <a href="#">住宿</a>
        <a href="#">交通</a>
      </div>
    </>
  )

}

function Homevideo() {
  return (
    <>
      {/* <video className="videotest" src="../public/images/taiwan.mp4" loop autoPlay muted width="1440"></video> */}
      <div className="table_image">
        <video className="video-player" src={'./public/images/taiwan.mp4'} ></video>
      </div>
    </>
  )
}

export default function Home() {
  return (
    <>
      <Header />
      <Homevideo />

      <button className="homebtn" type="button"><a href="./homepage">出發吧&gt;&gt;&gt;</a></button>

    </>
  )
};
