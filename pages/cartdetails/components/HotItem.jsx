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
    // var [HotItemData, setHotItemData] = useState([]);
    var [HotItemDataImg,setHotItemDataImg]=useState([]);
    // function fetchData() {
    //     return (fetch("/api/cart/HotItem",{next:{revalidate: 10}})
    //             .then((response) => response.json())
    //             .then((dataresult) => {
    //                 // setHotItemData(dataresult.data);
    //                 dataresult.data.forEach((item) => {
    //                     // 將圖片從buffer轉碼     
    //                     var binary="";
    //                     console.log(item.itemImgUrl)
    //                     var bytes = new Uint8Array(item.itemImgUrl.data);            
    //                     for (var len = bytes.byteLength, i = 0; i < len; i++) {                
    //                         binary += String.fromCharCode(bytes[i]);
    //                         item.itemImgUrl.data[len]=binary  
    //                     }
    //                     setHotItemData( dataresult.data )
    //                     console.log(binary);
    //                     }
    //                   );
    //                 }
    //                 ))
    //         }
    function fetchDataImgUrl() {
        return (fetch("/api/cart/HotItem",{next:{revalidate: 10}})
                .then((response) => response.json())
                .then((dataresult) => {
                        console.log(dataresult)
                        dataresult.data.forEach((i)=>{
                            var img=Buffer.from(i.itemImgUrl).toString('base64');
                            console.log(img);
                            var call=Buffer.from(img, 'base64').toString('ascii');
                            console.log(call);
                        })
                    })
                )
    }
    // 使用component渲染tsx會有一個問題，在你抓資料的同時他在渲染畫面，導致資料進不去畫面
    // 所以在使用 useEffect 把資料放進 return 的時候，先讓useEffect走setSeconds讓資料跑完
    // 再去跑return
    // useEffect(() => {fetchData()},[])
    useEffect(() =>{fetchDataImgUrl()},[])
    // useEffect(() => {setSeconds( fetchData() ,10),[]})
    // console.log(HotItemData)
    return (
        <>
            <div className="cartcontainer">
                <div className="toMoreHot">更多推薦商品</div>
                {/* <span>{HotItemData.forEach((i)=>{i})}</span> */}
                <img src="https://image.kkday.com/v2/image/get/h_650%2Cc_fit/s1.kkday.com/product_125748/20220103071938_8TSLy/png" alt="hi"/>
                <OwlCarousel
                    loop={true} // 循環播放
                    nav={false} // 顯示點點
                    autoplay={true} // 自動撥放
                    autoplayTimeout={2000} //每 2 秒滑到一個圖片
                    autoplaySpeed={600} // 滑動速度
                    responsive={Responsive}
                >
                    {/* {HotItemData.map((i,index)=>
                        <div className="item" key={index}>
                            <a href={`/CartDetails/+${i.itemId}`} style={fontstyles}>
                                <img src={i.itemImgUrl} style={imgstyles} alt="img" />
                                <div>{i.itemTitle}</div>
                            </a>
                        </div>
                    )} */}
                </OwlCarousel>
            </div>
        </>
    )
}
