import React, { useEffect, useState } from "react";
// import { runSQL } from "../../../lib/mysql";
// 貓頭鷹輪播
var $ = require("jquery");
if (typeof window !== "undefined") {
    // Client-side-only code
    window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});
// 輪播圖片數量
const Responsive = {
    1000: {
        items: 4, // 螢幕大小為 1000 以上 顯示 4 個項目
        margin: 25
    }
}
// 文字數量
const fontstyles = {
    "fontSize": "20px",
    "textDecoration": "none",
    "textAlign": "center",
}
const imgstyles = {
    "width": "280px" ,
    "height": "180px",
    "padding": "10px",
    "margin": "auto",
    "display": "block",
    "borderRadius": "20",
    "objectFit": "cover",
    "objectPosition": "center"
}
export default function HotItem() {
    var [HotItemData, setHotItemData] = useState([]);
    // 使用component渲染tsx會有一個問題，在你抓資料的同時他在渲染畫面，導致資料進不去畫面
    // 所以在使用 useEffect 把資料放進 return 的時候，多跑幾次迴圈，讓他重複執行6次
    useEffect(()=>{
        didTake();
        for(var i=0;i<6;i++){
            if(HotItemData!==""){
                didTake();
            }
        }
    },[]);

    function didTake(){
        if(HotItemData==""){
        fetch("/api/cart/HotItem",{next:{revalidate: 10}})
        .then((response) => response.json())
        .then((dataresult) => {
                dataresult.data.forEach((i)=>{
                    var img=Buffer.from(i.itemImgUrl).toString('base64');
                    var call=Buffer.from(img, 'base64').toString('ascii');
                    var replaceCallAll=call.replaceAll('\x00', '');
                    i.itemImgUrl=replaceCallAll;
                })
                console.log(dataresult.data)
                setHotItemData(dataresult.data);
            })
        }
    }
    
    return (
        <>
            <div className="cartcontainer">
                <div className="toMoreHot">更多推薦商品</div>
                {/* <span>{HotItemData.forEach((i)=>{i})}</span> */}
                <OwlCarousel
                    dots={false} // 取消下方按鈕
                    loop={true} // 循環播放
                    nav={false} // 顯示點點
                    autoplay={true} // 自動撥放
                    autoplayTimeout={2000} //每 2 秒滑到一個圖片
                    autoplaySpeed={600} // 滑動速度
                    responsive={Responsive}
                >
                    {HotItemData.map((i,index)=>
                        <div className="item" key={index}>
                            <a href={`/item/${i.itemId}`} style={fontstyles}>
                                <img src={i.itemImgUrl} style={imgstyles} alt="img" />
                                <div>{i.itemTitle}</div>
                            </a>
                        </div>
                    )}
                </OwlCarousel>
            </div>
        </>
    )
}
