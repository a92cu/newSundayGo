import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import ReactStars from "react-stars";
function Header() {
    return (
        <div className="header">
            <a href="/homepage">
                <img src="/images/群組 1.png"
                    alt=""
                    style={{ width: '90px', top: '-8px', position: 'relative' }} /></a>
            <div className="header-right">
                <a href="/homepage/food">美食</a>
                <a href="/homepage/sight">景點</a>
                <a href="/homepage/play">活動</a>
                <a href="/homepage/lodging">住宿</a>
                <a href="/homepage/traffic">交通</a>
                <a href="#"><img src="/images/cart.png" style={{ width: '25px' }} /></a>
                <a href="#">會員中心 &nbsp;&nbsp;&nbsp; 登出</a>
            </div>
            <form className="example" action="">
                <input type="text" placeholder="Search.." name="search"/>
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
    );
}
export default function searchResult() {
    const [List, setList] = useState([])
    useEffect(async () => {
        // 處理seach到的東西
        const getUrl=location.href
        const url = new URL(getUrl);
        let a=url.searchParams.get('search')
        console.log(getUrl,url,a)
        // 根據search到的東西改變資料
        await axios({
            url:'/api/cart/searchData',
            method:"POST",
            data:{
                searchResult:a||null
            }
        }).then((result2) => {
                result2.data.data.forEach((i) => {
                    var img2 = Buffer.from(i.itemImgUrl).toString('base64');
                    var call2 = Buffer.from(img2, 'base64').toString('ascii');
                    var replaceCallAll2 = call2.replaceAll('\x00', '');
                    i.itemImgUrl = replaceCallAll2;
                    var startDate=format(new Date(i.itemStartDate),"yyyy-MM-dd");
                    var EndDate=format(new Date(i.itemEndDate),"yyyy-MM-dd");
                    i.itemStartDate=startDate;
                    i.itemEndDate=EndDate
                })
                setList(result2.data.data);
            })
    },[])
    return (
        <>
        <Header/>
        <div id="content" className="content">
            {/* <!-- 商品顯示主體 --> */}
            {List.map((item,key) =>
                <div className="homeProduct" key={key}>
                    {/* <!-- 圖片框 --> */}
                    <div className="picPlace">
                        <img className="proPic" src={item.itemImgUrl} alt="" onClick={() => router.push(`/item/${item.itemId}`)} />
                    </div>
                    {/* <!-- 介紹欄 --> */}
                    <div className="intro">
                        <b>{item.itemTitle}</b>
                        {/* <!-- 商品標題 --> */}
                        <button className="introp collectHeart" style={{ zIndex: '99' }}>
                            {/* onClick={() => favIdsend(item.itemId)} */}
                            {/* <!-- 愛心圖案 --> */}
                            <img className="introimg" src="/images/heart.png"
                                style={{ width: '20px', marginLeft: '130px' }} alt="" />
                        </button>
                        {/* 商品標題 */}
                        <p className="iteminfo">
                            {item.itemInfo}
                        </p>
                        {/* <!-- 地區標籤 --> */}
                        <div>
                            <img src="/images/place.jpg" style={{ width: '20px', float: 'left' }} alt="" />
                            <div className="tagplace">
                                {item.itemFilter1}
                            </div>
                            <div className="tagplace">
                                {item.itemFilter2}
                            </div>

                            <div className="tagplace">
                                {item.itemFilter3}
                            </div>
                            <div className="tagplace">
                                {item.itemFilter4}
                            </div>
                            <span className="fa fa-calendar-o" aria-hidden="true"></span>
                            <span>
                                銷售期間 ：{item.itemStartDate}至{item.itemEndDate}
                            </span>
                        </div>
                        {/* <!-- 星星評價 --> */}
                        <div className="prostar">
                            <div className="collectstar">
                                <ReactStars
                                    Rating
                                    value={item.itemTotalStar}
                                    edit={false} />
                                <div className="collectstarnum">({item.itemTotalStar})</div>
                            </div>
                            <div className="homepri">
                                <p>TWD {item.itemPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </>
    )
}