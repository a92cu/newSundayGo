import React from 'react';
import Link from 'next/link';
//嵌入img
import Image from "next/image";
//引入NEXT內建的script
import Script from "next/script";
// import "../public/images/taiwan.mp4";
// import  withVideos from "/next.config.js";
import { useRouter } from 'next/router';



function Header() {
  return (
    <>
      <div className="header ">
        <img src="l.png" alt="" style={{ width: '30px' }} />
        <div className="header-right">
          <a href="#contact">會員中心 &nbsp;&nbsp;&nbsp; 登出</a>
          <button className="openbtn" onClick={() => Function()}>&#9776; </button>
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
      {/* <video className="videotest" src="../public/images/taiwan.mp4" loop autoPlay muted width="1440"></video>
      <div className="table_image">
        <video className="video-player" src={'/public/images/taiwan.mp4'} ></video>
      </div> */}
      <div className="table_image">
        <video className="video-player" x5-video-player-type="h5" x-webkit-airplay="true" webkit-playsinline="true" loop autoPlay muted
          style={{ width: '1500px' ,marginLeft: 'auto',marginRight:"auto" }}
        >
          <source src={require('/public/images/taiwan.mp4')} type="video/mp4" />
        </video>
      </div>

    </>
  )
}

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Header />
      
      <Homevideo />

      <button className="homebtn " type="button">
        <img className="homeimg " src="./images/flower.png" />
        <a href='/homepage' >出發吧
        <span className="homebtn2 ">&gt;&gt;&gt;</span>
        </a>
      </button>
      <Script src="/js/homepage.js" />
    </>
  )
};

// export default () => (
//   <div>
//     <video src={require('./video.mp4')} />
//   </div>
// )