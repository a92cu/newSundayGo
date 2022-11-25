import React,{ useState } from "react";
// import { runSQL } from "../../../lib/mysql";

// 抓資料
var fetchHotItem = async () => {
    const response = await fetch("/api/HotItem").then(
        response=>{
            console.log(response);
            return response;
        }
    );
    const result = await response.json();
};
fetchHotItem();
// 貓頭鷹輪播
var $ = require("jquery");
if (typeof window !== "undefined") {
    // Client-side-only code
    window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Image from "next/image";
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


export default function HotItem () {
    return (
        <>
            <div className="cartcontainer">
                <div className="toMoreHot">更多推薦商品</div>
                <OwlCarousel
                    loop={true} // 循環播放
                    nav={false} // 顯示點點
                    autoplay={true} // 自動撥放
                    autoplayTimeout={2000} //每 2 秒滑到一個圖片
                    autoplaySpeed={600} // 滑動速度
                    responsive={Responsive}
                >
                    {/* {item.forEach((i)=>(
                        <div className="item">
                            <a href={`/CartDetails/+${i.itemId}`} style={fontstyles}>
                                <Image width={280} height={180} padding={10}
                                    border-radius={20}
                                    src={i.itemImgUrl} alt="img" />
                                <div>{i.itemTitle}</div>
                            </a>
                        </div>
                    ))} */}
                </OwlCarousel>
            </div>
        </>
    )
}

// export async function getStaticPaths(props) {
    
//     return {
//         paths,
//         fallback: false,
//     };
// }
// //頁面產生出來之後從params去找出特定需要的那一頁
// export async function getStaticProps({ params }) {
//     const sq1 = `SELECT * FROM item WHERE itemId = ${params.id}`;
//     const sq3 = `SELECT * FROM itemimg WHERE itemId = ${params.id}`;
//     // any是沒有定義的意思
//     const imgList= [];

//     const data = (await runSQL(sq1))[0];
//     const imgListRaw = await runSQL(sq3);
//     //forEach是在轉格式,原本出來是database物件
//     imgListRaw.forEach((item) => {
//         imgList.push({ ...item });
//     });
//     //把要的資料拿出來
//     return {
//         props: {
//             ...data,
//             imgList,
//         },
//     };
// }
