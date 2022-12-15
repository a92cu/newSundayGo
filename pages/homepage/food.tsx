//嵌入img
import Image from "next/image";
//引入NEXT內建的script
import Script from "next/script";
//lib裡的指令重複使用
import { runSQL } from "../../lib/mysql";
//整理日期格式
import { format } from "date-fns";
// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
// import Link from 'next/link';s
// import Mapselect from "./component/Taiwanmap.jsx";
// import Forfood from "./component/forfood.jsx";
import ReactStars from 'react-stars';
import { useRouter } from 'next/router';
import $ from 'jquery';
import axios from "axios";


//   header
function Header() {
    return (
        <div className="header ">
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
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
    );
}

// footer  
function Footer() {
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
    )
}

function Food(dateList) {
    const router = useRouter();
    // const renderRef=useRef(true)
    var [homepagelist, setlist] = useState([]);
    const [favId, setfavId] = useState("");
    const [userId, setuserId] = useState("");
    const [itemId, setitemId] = useState("");
    // const [imgId, setimgId] = useState([porps.imgId]);
    //點擊隱藏
    // const [show, setShow] = useState(true);
    // function clickButton(){
    //     setShow(false)
    //   }

    // const handleclick = (e) => {
    //     var wantdel = document.getElementsByClassName('delbtn');
    //     wantdel.style.display = 'none';
    // }

    // useEffect(() => {fetchdata()}, []);
    useEffect(() => {
        // if(renderRef.current){
        //     renderRef.current=false
        // }
        // console.log(1,setlist)
        fetchdata();
        //加入最愛
        // favIdsend(i);
        // $(function (){
        // console.log(homepagelist)
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }

        $(".allcheck").click(function () {
            $("input[name='citys']").prop("checked", true)
        })

        // $(".allcheck").click(function () {
        //     if (this.checked) {
        //         $("input[name='citys']").each(function () {
        //             $(this).prop("checked", true)
        //         });
        //     } else {
        //         $("input[name='citys']").each(function () {
        //             $(this).prop("checked", false)
        //         })
        //     }
        // });
        // document.getElementsByClassName('delbtn')
        // function myFunction() {
        //     document.getElementsByClassName('delbtn').style.display = 'none'
        // }
        // myFunction()
        $(".delbtn").click(function () {
            console.log(this)
            // $(this)(".filterBtn").hide()
            $(this).parent('button').hide()
        });

        // $("input[type='checkbox']").on('click',function(){
        //     var item = $(":radio:checked"); 
        //     var len=item.length; 
        //     if(len>0){ 
        //       alert("yes--："+$(":radio:checked").val());
        //     }
        //     // $(".homerightup").append(`<input type="button"  value="${this.citys}" className="filterBtn">`)
        //   console.log(this)  
        // })
        //    $('.ckbox').on('click',function(){
        //     alert()
        //    })
        // function test(){
        //    var app= document.getElementsByClassName('homeProduct');
        //    app.addEventListener('click',function(){
        //     alert('ok')
        //    })
        // }
        // 點擊隱藏
        // const handleForm = () => {
        $(".delbtn").click(function () {
            // console.log(this)
            // $(this)(".filterBtn").hide()
            $(this).parent('button').hide()
        });

        // }

        // handleForm();
        // setlist(result.data)
        // 點擊新增對應按鈕
        // function cekbox() {
        //     var arr = [];
        //     $('input[type="checkbox"]').on('click', function () {

        //         $(this).each(function (i) {
        //             arr.push($(this).parent().text());
        //             console.log(arr);
        //             $(".homerightup").append(`<input type="button"  value="${arr}" class="filterBtn">`)

        //         })
        //         // var text = "";
        //         // text += $(this).parent().text();

        //     })
        // }
        // cekbox();


        // return()=>{
        //     console.log(4,'ok')
        //     // setlist(result.data)
        // }
        // useeffect結束    
    }, [])


    const fetchdata = async () => {
        console.log(2, setlist)
        // if (homepagelist == "") 
        await axios("/api/home/food")

            .then((result) => {
                result.data.data.forEach((i) => {
                    var img = Buffer.from(i.itemImgUrl).toString('base64');
                    var call = Buffer.from(img, 'base64').toString('ascii');
                    var replaceCallAll = call.replaceAll('\x00', '');
                    i.itemImgUrl = replaceCallAll;
                })
                // console.log(3, result.data)
                setlist(result.data.data);
            });
        // if (setlist !== "") {
        //     [...setlist]
        // }
    }

    //傳送資料庫資料
    const favIdsend = async (i) => {
        console.log(4, i)
        if (window.confirm("已加入最愛") === true) 
        await fetch("/api/home/food", {
            method: "post",
            // body:imgId
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                // favId: 7,
                userId: 'u123456789',
                itemId: 4
            })
        })
            .then((res) => res.json())
        // .then(console.log('已加入最愛'))
        console.log(5, favId)
        // .then(data => {
        //     /*接到request data後要做的事情*/
        //     console.log("使用者資料",data.data[0].imgId);
        // })
    }
    //POST結束
    //按星星排序
    const restar = () => {
        axios(`/api/sort/food/star`)
            .then((result2) => {
                console.log(33, result2)
                result2.data.data.forEach((i) => {
                    var img2 = Buffer.from(i.itemImgUrl).toString('base64');
                    var call2 = Buffer.from(img2, 'base64').toString('ascii');
                    var replaceCallAll2 = call2.replaceAll('\x00', '');
                    i.itemImgUrl = replaceCallAll2;
                })
                // console.log(3, result.data)
                setlist(result2.data.data);
                //
            })

        // if (setlist !== "") {
        //     [...setlist]
        // }
    }
    //按價格排序
    const reprice = () => {
        axios('/api/sort/food/price')
            .then((result2) => {
                console.log(33, result2)
                result2.data.data.forEach((i) => {
                    var img2 = Buffer.from(i.itemImgUrl).toString('base64');
                    var call2 = Buffer.from(img2, 'base64').toString('ascii');
                    var replaceCallAll2 = call2.replaceAll('\x00', '');
                    i.itemImgUrl = replaceCallAll2;
                })
                // console.log(3, result.data)
                setlist(result2.data.data);
            })
    }
    //按地區排序
    const rearea = () => {
        axios('/api/sort/food/area')
            .then((result2) => {
                console.log(33, result2)
                result2.data.data.forEach((i) => {
                    var img2 = Buffer.from(i.itemImgUrl).toString('base64');
                    var call2 = Buffer.from(img2, 'base64').toString('ascii');
                    var replaceCallAll2 = call2.replaceAll('\x00', '');
                    i.itemImgUrl = replaceCallAll2;
                })
                // console.log(3, result.data)
                setlist(result2.data.data);
            })
    }

    //加入最愛
    // const newfav = (favId) => {
    //     console.log(favId);

    //       console.log('ok');
    //       const newItemList = R.reject(R.propEq("favId", favId), itemList);
    //       setItemList(newItemList);
    //       console.log(newItemList); // {{},{}}
    //       fetch("/api/home/food", {
    //         method: "POST",
    //         body: favId

    //       });
    //     }

    //篩選不重覆項目
    var redata = homepagelist.map(function (item) {
        return item.itemFilter2;
    });
    var noredata = redata.filter(function (item, index, array) {
        return array.indexOf(item) === index;
        // console.log(only);
    });

    var redata2 = homepagelist.map(function (item) {
        return item.itemFilter3;
    });
    var noredata2 = redata2.filter(function (item, index, array) {
        return array.indexOf(item) === index;
        // console.log(only);
    });
    // console.log(only);
    // console.log(result.data)
    // const fetcher = (user, page) =>
    //     fetch("../api/homepage").then((res) => res.json()).then((result) => setlist(result.data))


    return (
        <div style={{ width: '1280px', margin: '0 auto' }} >
            {/* <!-- 主要篩選區 --> */}
            <div className="hometop" >
                {/* <!-- 左側篩選欄 --> */}
                <div id="main-content" className="main homeleft" >
                    <div id="sidebar" className="sidebar" >
                        <div className="sidebar__inner" >
                            篩選目的地
                            <br />
                            <button className="accordion">
                                <input type="checkbox" className="allcheck" checked/>北部
                            </button>
                            <div className="panel" >
                                <input type="checkbox" name="citys" value={'基隆市'} className="ckbox" checked/>基隆市
                                <br />
                                <input type="checkbox" name="citys" checked/>新北市
                                <br />
                                <input type="checkbox" name="citys" checked/>台北市
                                <br />
                                <input type="checkbox" name="citys" checked/>桃園市
                            </div>

                            <button className="accordion">
                                <input type="checkbox" className="allcheck" checked/>中部
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" checked/>新竹縣
                                <br />
                                <input type="checkbox" name="citys" checked/>新竹市
                                <br />
                                <input type="checkbox" name="citys" checked/>苗栗縣
                                <br />
                                <input type="checkbox" name="citys" checked/>台中市
                                <br />
                                <input type="checkbox" name="citys" checked/>雲林縣
                                <br />
                                <input type="checkbox" name="citys" checked/>南投縣
                                <br />
                            </div>

                            <button className="accordion">
                                <input type="checkbox" className="allcheck" checked/>南部
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" checked/>嘉義縣
                                <br />
                                <input type="checkbox" name="citys" checked/>嘉義市
                                <br />
                                <input type="checkbox" name="citys" checked/>台南市
                                <br />
                                <input type="checkbox" name="citys" checked/>高雄市
                                <br />
                                <input type="checkbox" name="citys" checked/>屏東縣
                            </div>
                            <button className="accordion">
                                <input type="checkbox" className="allcheck" checked/>東部
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" checked/>宜蘭縣
                                <br />
                                <input type="checkbox" name="citys" checked/>花蓮縣
                                <br />
                                <input type="checkbox" name="citys" checked/>台東縣
                                <br />
                            </div>
                            <button className="accordion">
                                <input type="checkbox" className="allcheck" checked/>離島
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" checked/>澎湖
                                <br />
                                <input type="checkbox" name="citys" checked/>金門
                                <br />
                                <input type="checkbox" name="citys" checked/>馬祖
                                <br />
                                <input type="checkbox" name="citys" checked/>綠島
                                <br />
                                <input type="checkbox" name="citys" checked/>蘭嶼
                            </div>


                        </div>
                        {/* <!-- 商品類別篩選 --> */}
                        <div className="sidebar__inner2">
                            商品類別篩選
                            <br />
                            <button className="accordion">
                                <input type="checkbox" className="allcheck" checked />美食
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" checked/>餐廳
                                <br />
                                <input type="checkbox" name="citys" checked/>甜點、飲料
                            </div>
                            <button className="accordion">
                                <input type="checkbox" className="allcheck" />景點
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" />觀光景點
                                <br />
                                <input type="checkbox" name="citys" />門票
                            </div>

                            <button className="accordion">
                                <input type="checkbox" className="allcheck" />活動
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" />戶外活動
                                <br />
                                <input type="checkbox" name="citys" />藝文活動

                            </div>

                            <button className="accordion">
                                <input type="checkbox" className="allcheck" />住宿
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" />民宿
                                <br />
                                <input type="checkbox" name="citys" />飯店

                            </div>
                            <button className="accordion">
                                <input type="checkbox" className="allcheck" />交通
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" />租車
                                <br />
                                <input type="checkbox" name="citys" />飛機
                                <br />
                                <input type="checkbox" name="citys" />船班
                                <br />
                                <input type="checkbox" name="citys" />高鐵
                                <br />
                                <input type="checkbox" name="citys" />客運
                            </div>
                        </div>
                    </div >
                </div>
                {/* <!-- 右側顯示區 --> */}
                < div className="homeright" >
                    {/* <!-- 顯示篩選 --> */}

                    < div className="homerightup" >
                        <b className="areanum">
                            共篩選出
                            < span style={{ color: '#F29F04' }}>{homepagelist.length}</span>
                            項行程</b>

                        {noredata.map((i) =>
                            <button className="filterBtn" >
                                {/* onClick={() => handleclick(e)} */}
                                {i}<span className="delbtn">X</span>
                            </button>
                        )}
                        {/* {noredata2.map((item) => */}
                        <button className="filterBtn">
                            {/* {item.itemFilter3} */}
                            餐廳
                            <span className="delbtn">X</span>
                        </button>
                        <button className="filterBtn">
                            {/* {item.itemFilter3} */}
                            甜點飲品
                            <span className="delbtn">X</span>
                        </button>
                        {/* )} */}
                        <hr />
                        <span className="homerightup2"><b className="areanum">排序方式</b> |
                            <button type="button" className="sortBtn" onClick={() => restar()}>
                                <img className="homeimg2" src="../images/star.png" />評價
                            </button>|
                            <button type="button" className="sortBtn" onClick={() => reprice()}>
                                <img className="homeimg2" src="../images/money.png" />商品價格
                            </button>|
                            <button type="button" className="sortBtn" onClick={() => rearea()}>
                                <img className="homeimg2" src="../images/area.png" />地區
                            </button>
                        </span>
                    </div >
                    <div id="content" className="content">
                        {/* <!-- 商品顯示主體 --> */}
                        {homepagelist.map((item) =>
                            // const star = (item.itemTotalStar)
                            <div className="homeProduct" >
                                {/* <!-- 圖片框 --> */}
                                <div className="picPlace">

                                    <img className="proPic" src={item.itemImgUrl} alt="" onClick={() => router.push(`/item/${item.itemId}`)}/>
                                    {/* ))} */}
                                </div>
                                {/* <!-- 介紹欄 --> */}
                                <div className="intro">
                                    <b>{item.itemTitle}</b>
                                    {/* <!-- 商品標題 --> */}
                                    <button className="introp collectHeart" onClick={() => favIdsend(item.itemId)} style={{ zIndex: '99' }}>
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
                                        {/* <span className="fa fa-tags" aria-hidden="true"></span>  */}
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
                                        {/* {dateList.dateList.map((i)=> */}
                                        <span>
                                            {/* 最早可預訂日 ：{item.itemListedDate} */}
                                            銷售期間 ：{dateList.dateList[0].itemStartDate}至{dateList.dateList[0].itemEndDate}

                                        </span>
                                        {/* // )}  */}
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


                                        {/* <img src="/images/1.png" alt="" />
                                        <img src="/images/1.png" alt="" />
                                        <img src="/images/0.png" alt="" />
                                        <img src="/images/0.png" alt="" /> */}

                                        <div className="homepri">
                                            <p>TWD {item.itemPrice}</p>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        )}
                        {/* map結尾 */}
                    </div>
                </div >
                {/* <!-- 頁籤 --> */}
                {/* 消失會讓footer跑版 */}
                < ul className="pagination" >

                    {/* <li><a href="#">1</a></li>
                    <li><a className="pagetag" href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">6</a></li>
                    <li><a href="#">7</a></li> */}

                </ul >



            </div >
        </div >
    )

    // })
}
//homepage 畫面路由
export default function homepage(props) {
    const [dateList, setdateList] = useState(props.dateList)

    return (
        <>
            <Header />

            <Food
                dateList={dateList} />

            <Footer />
            {/* <Script src="/js/home.js" /> */}
        </>
    )
}

export async function getStaticProps({ params }) {
    // const itemList: any = [];
    const sq1 = `SELECT  item.itemTitle, item.itemFilter2, itemimg.itemImgUrl FROM item LEFT JOIN itemimg ON itemimg.itemId=item.itemId where imgLead=1;`;
    // const sq1 = 'SELECT * FROM item LEFT JOIN itemimg ON itemimg.itemId=item.itemId where imgLead=1 and itemFilter3 = "美食";';
    const sq2 = 'SELECT itemFilter2 FROM item LEFT JOIN itemimg ON itemimg.itemId=item.itemId where imgLead=1;';
    const sq3 = `SELECT  itemListedDate, itemStartDate, itemEndDate FROM item LEFT JOIN itemimg ON itemimg.itemId=item.itemId where imgLead=1 and itemFilter3 = "美食";`;
    const sq4 = `SELECT userId, userPassword, userName, userGender, userPhone, userEmail FROM usertable WHERE userId = "u123456789"`;

    const itemList: any = [];
    const dateList: any = [];

    // itemTitle itemFilter2 itemImgUrl
    const imgListRaw: any = await runSQL(sq1); // 所有項目
    const dateListRaw: any = await runSQL(sq3); // 日期
    const memberCentre = (await runSQL(sq2))[0]; // 帳號設定抓的資料

    imgListRaw.forEach((item: any) => {
        item.itemImgUrl = new TextDecoder("utf-8").decode(item.itemImgUrl);
        itemList.push({ ...item });
    });
    dateListRaw.forEach((item: any) => {
        item.itemListedDate = format(item.itemListedDate, "yyyy-MM-dd");
        item.itemStartDate = format(item.itemStartDate, "yyyy-MM-dd");
        item.itemEndDate = format(item.itemEndDate, "yyyy-MM-dd");
        dateList.push({ ...item });
    });


    //把要的資料拿出來
    return {
        props: {
            //所有項目
            itemList,
            dateList,
            memberCentre: { ...memberCentre },

        },
    };

}

