import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import ReactStars from "react-stars";
import Image from "next/image";
import router from "next/router";
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

function Footer(props) {
    // 判斷有無資料時footer的CSS
    console.log(props.style)
    if(props.style){
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
    )}else{
        return (
            <div className="footer" style={{position: "fixed"}}>
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
}

export default function searchResult() {
    let a;
    const [List, setList] = useState([])
    useEffect( () => {
        // 處理seach到的東西
        const getUrl=location.href
        const url = new URL(getUrl);
        a=url.searchParams.get('search')
        console.log(getUrl,url,a)
        // 根據search到的東西改變資料
        axios({
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
    console.log(List.length)
    
    if(List.length!==0){
        return (
            <>
            <Header/>
            <br/>
            <div className="content">
                {/* <!-- 商品顯示主體 --> */}
                {List.map((item,key) =>
                    <div className="homeProduct" key={key} style={{margin:"auto",marginBottom:"10px"}}>
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
            <br/>
            <Footer style={true}/>
        </>
        )
    }else{
        return(
            <>
                <Header/>
                <br/>
                <div className="content">
                    <div style={{marginLeft:"40%",marginTop:"1%",fontSize:"24px"}}>
                    查無資料，請確認查詢文字無誤!!!!
                    </div>
                </div>
                <br/>
                <Footer style={false}/>
            </>
        )
    }

}