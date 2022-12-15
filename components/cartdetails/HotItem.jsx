import React from "react";
import dynamic from "next/dynamic";

// 貓頭鷹輪播
var $ = require("jquery");
if (typeof window !== "undefined") {
    // Client-side-only code
    window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


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
function HotItem(props) {
    // 如果今天不是用getStaticProps就走下方
    // let [HotItemData, setHotItemData] = useState([]);
    // // useEffect渲染會有一個問題，在你抓資料的同時他在渲染畫面，導致資料進不去畫面
    // // 因為是非同步進行，所以必須讓useEffect執行兩次
    // let [far,setfar]=useState(false);
    // useEffect(()=>{
    //     async function axiosdata(){
    //             await Axios.get("/api/cart/HotItem").then((dataresult) => {
    //                     dataresult.data.data.forEach((i)=>{
    //                     let img=Buffer.from(i.itemImgUrl).toString('base64');
    //                     let call=Buffer.from(img, 'base64').toString('ascii');
    //                     let replaceCallAll=call.replaceAll('\x00', '');
    //                     i.itemImgUrl=replaceCallAll;
    //                 })
    //                 setHotItemData(dataresult.data.data);
    //             })
    //     }
    //     axiosdata();
    //     setfar(true);
    // },[far])
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
                    autoplayTimeout={2500} //每 2 秒滑到一個圖片
                    autoplaySpeed={600} // 滑動速度
                    responsive={Responsive}
                >
                    {props.hotItemData.map((i,index)=>
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

export default HotItem;
