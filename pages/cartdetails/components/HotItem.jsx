import React,{ useEffect,useState } from "react";
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
import { setSeconds } from "date-fns";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});
// 輪播圖片數量
const Responsive = {
    600: {
        items: 2, // 螢幕大小為 600~1000 顯示 3 個項目
        margin: 10
    },
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
const imgstyles={
    "width":"280px",
    "height":"180px",
    "padding":"10px",
    "margin":"auto",
    "display": "block",
    "borderRadius":"20",
    "object-fit": "cover",
    "object-position": "center"
}

export default function HotItem () {
    
    var [HotItemData, setHotItemData] = useState([]);
    function fetchData() {
        return (fetch("/api/Cart/HotItem",{next:{revalidate: 10}})
                .then((response) => response.json())
                .then((dataresult) => setHotItemData(dataresult.data))
                )
    }
    // 使用component渲染tsx會有一個問題，在你抓資料的同時他在渲染畫面，導致資料進不去畫面
    // 所以在使用 useEffect 把資料放進 return 的時候，先讓useEffect走setSeconds讓資料跑完
    // 再去跑return
    useEffect(() => {setSeconds( fetchData() ,10),[]})
    return(
        <>
            <div className="cartcontainer">
                <div className="toMoreHot">更多推薦商品</div>
                <span>{HotItemData.forEach((i)=>{i})}</span>
                <OwlCarousel
                    loop={true} // 循環播放
                    nav={false} // 顯示點點
                    autoplay={true} // 自動撥放
                    autoplayTimeout={2000} //每 2 秒滑到一個圖片
                    autoplaySpeed={600} // 滑動速度
                    responsive={Responsive}
                >
                    {HotItemData.map((i,index)=>
                        <div className="item" key={index}>
                            <a href={`/CartDetails/+${i.itemId}`} style={fontstyles}>
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
