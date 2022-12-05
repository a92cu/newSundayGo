//嵌入img
import Image from "next/image";
//引入NEXT內建的script
import Script from "next/script";
//lib裡的指令重複使用
import { runSQL } from "../lib/mysql";
//整理日期格式
import Router from "next/router";
import { useEffect, useState } from "react";
import { props } from "ramda";

function Carousel() {
    return (
      <div className="main-carousel">
          <div className="carousel-cell" key="">
            <img src="../public/images/20220520170357-1298d211.jpg" alt="" />
          </div>
      </div>
    );
  }

  export default function ItemPage(props) {
    const [orderList, setOrderList] = useState(props.orderList);
    useEffect(() => {
      const Flickity = require("flickity");
      new Flickity(".main-carousel");
    }, []);
    return (
      <>
        <Carousel/>
      </>
    );
  }