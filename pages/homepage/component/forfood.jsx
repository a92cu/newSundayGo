import $ from 'jquery';
import React, { useEffect, useState } from 'react';
// import { runSQL } from "/../../lib/mysql";
import { setSeconds } from "date-fns";
import { useRouter } from 'next/router';
import ReactStars from 'react-stars';
import { format } from "date-fns";



//商品加入最愛連結
export const Forfood = (porps) => {
    const router = useRouter();
    // const renderRef=useRef(true)
    var [homepagelist, setlist] = useState([]);
    const [favId, setfavId] = useState("");
    const [userId, setuserId] = useState("");
    const [itemId, setitemId] = useState("");
    const [imgId, setimgId] = useState([porps.imgId]);
    //點擊隱藏
    // const [show, setShow] = useState(true);
    // function clickButton(){
    //     setShow(false)
    //   }

    const handleclick = (e) => {
      var wantdel=  document.getElementsByClassName('delbtn');
      wantdel.style.display ='none';
    }

    // useEffect(() => {fetchdata()}, []);
    useEffect(() => {
        // if(renderRef.current){
        //     renderRef.current=false
        // }
        // console.log(1,setlist)
        fetchdata();
        //加入最愛
        favIdsend();
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
            if (this.checked) {
                $("input[name='citys']").each(function () {
                    $(this).prop("checked", true)
                });
            } else {
                $("input[name='citys']").each(function () {
                    $(this).prop("checked", false)
                })
            }
        });
        // document.getElementsByClassName('delbtn')
        // function myFunction() {
        //     document.getElementsByClassName('delbtn').style.display = 'none'
        // }
        // myFunction()
        // $(".delbtn").click(function () {
        //     console.log(this)
        //     // $(this)(".filterBtn").hide()
        //     $(this).parent('button').hide()
        // });

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
        function test(){
           var app= document.getElementsByClassName('homeProduct');
           app.addEventListener('click',function(){
            alert('ok')
           })
        }

        function cekbox() {
            var arr = [];
            $('input[type="checkbox"]').on('click', function () {

                $(this).each(function (i) {
                    arr.push($(this).parent().text());
                    console.log(arr);
                    $(".homerightup").append(`<input type="button"  value="${arr}" class="filterBtn">`)

                })
                // var text = "";
                // text += $(this).parent().text();

            })
        }
        cekbox();
        // return()=>{
        //     console.log(4,'ok')
        //     // setlist(result.data)
        // }
        // useeffect結束    
    }, [])
    // const handleForm = () => {
    // $(".delbtn").click(function () {
    //     // console.log(this)
    //     // $(this)(".filterBtn").hide()
    //     $(this).parent('button').hide()
    // });

    // }

    // handleForm();
    // setlist(result.data)

    const fetchdata = async () => {
        console.log(2, setlist)
    

        return (await fetch("/api/home/food")
            .then((res) => res.json())
            .then((result) => {
                result.data.forEach((i) => {
                    var img = Buffer.from(i.itemImgUrl).toString('base64');
                    var call = Buffer.from(img, 'base64').toString('ascii');
                    var replaceCallAll = call.replaceAll('\x00', '');
                    i.itemImgUrl = replaceCallAll;
                })
                // console.log(3, result.data)
                setlist(result.data);
                //
            })
        );
        // if (setlist !== "") {
        //     [...setlist]
        // }
    }

    const favIdsend = async (i) => {
        console.log(4, i)
        await fetch("/api/home/food",{
            method: "post",
            // body:imgId
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                favId:6,
                userId:'u123456789',
                itemId:10
            })
        })
        .then((res) => res.json())
        .then(console.log('已加入最愛'))
        
        console.log(5, favId)       
            // .then(data => {
            //     /*接到request data後要做的事情*/
            //     console.log("使用者資料",data.data[0].imgId);
             
            // })
       }
    //POST結束

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
    // console.log(only);
    // console.log(result.data)
    // const fetcher = (user, page) =>
    //     fetch("../api/homepage").then((res) => res.json()).then((result) => setlist(result.data))
    //轉換時間
    const itemList = [];
    homepagelist.forEach(function(item)  {
        console.log(1,item.itemListedDate)
        // item.itemListedDate = item.itemListedDate.replace("Z","UTC");
        // let  date2= (item.itemListedDate +8*3600*1000);
        // date2=date2.JSON();
        // console.log(22,date2)
        // console.log(2,item.itemListedDate)   
        // let date = moment(item.itemListedDate).toDate();
        // item.itemListedDate = format(item.itemListedDate, "yyyy-MM-dd");
        // item.itemStartDate = format(item.itemStartDate, "yyyy-MM-dd");
        // item.itemEndDate = format(item.itemEndDate, "yyyy-MM-dd");
        itemList.push({ ...item });
        return itemList
        console.log(itemList)
      });


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
                                <input type="checkbox" className="allcheck" />北部
                            </button>
                            <div className="panel" >
                                <input type="checkbox" name="citys" value={'基隆市'} className="ckbox" />基隆市
                                <br />
                                <input type="checkbox" name="citys" />新北市
                                <br />
                                <input type="checkbox" name="citys" />台北市
                                <br />
                                <input type="checkbox" name="citys" />桃園市
                            </div>

                            <button className="accordion">
                                <input type="checkbox" className="allcheck" />中部
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" />新竹縣
                                <br />
                                <input type="checkbox" name="citys" />新竹市
                                <br />
                                <input type="checkbox" name="citys" />苗栗縣
                                <br />
                                <input type="checkbox" name="citys" />台中市
                                <br />
                                <input type="checkbox" name="citys" />雲林縣
                                <br />
                                <input type="checkbox" name="citys" />南投縣
                                <br />
                            </div>

                            <button className="accordion">
                                <input type="checkbox" className="allcheck" />南部
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" />嘉義縣
                                <br />
                                <input type="checkbox" name="citys" />嘉義市
                                <br />
                                <input type="checkbox" name="citys" />台南市
                                <br />
                                <input type="checkbox" name="citys" />高雄市
                                <br />
                                <input type="checkbox" name="citys" />屏東縣
                            </div>
                            <button className="accordion">
                                <input type="checkbox" className="allcheck" />東部
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" />宜蘭縣
                                <br />
                                <input type="checkbox" name="citys" />花蓮縣
                                <br />
                                <input type="checkbox" name="citys" />台東縣
                                <br />
                            </div>
                            <button className="accordion">
                                <input type="checkbox" className="allcheck" />離島
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" />澎湖
                                <br />
                                <input type="checkbox" name="citys" />金門
                                <br />
                                <input type="checkbox" name="citys" />馬祖
                                <br />
                                <input type="checkbox" name="citys" />綠島
                                <br />
                                <input type="checkbox" name="citys" />蘭嶼
                            </div>


                        </div>
                        {/* <!-- 商品類別篩選 --> */}
                        <div className="sidebar__inner2">
                            商品類別篩選
                            <br />
                            <button className="accordion">
                                <input type="checkbox" className="allcheck" checked="checked" />美食
                            </button>
                            <div className="panel">
                                <input type="checkbox" name="citys" />餐廳
                                <br />
                                <input type="checkbox" name="citys" />甜點、飲料
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
                        共篩選出
                        < span style={{ color: '#F29F04' }}>{homepagelist.length}</span>
                        項行程
                        {noredata.map((i) =>

                            <button className="filterBtn" onClick={() =>  handleclick() }>
                                {i}<span className="delbtn">X</span>
                            </button>
                        )}
                        {homepagelist.map((item) =>
                            <button className="filterBtn">
                                {item.itemFilter3}<span className="delbtn">X</span>
                            </button>
                        )}
                        <hr />
                        <span className="homerightup2"> 排序|<a href="">熱門程度</a>|<a href="">用戶評價</a>|<a
                            href="">&#36;價格由低到高</a></span>

                    </div >
                    <div id="content" className="content">
                        {/* <!-- 商品顯示主體 --> */}
                        {homepagelist.map((item) =>
                            // const star = (item.itemTotalStar)
                            <div className="homeProduct" onClick={() => router.push(`/item/${item.itemId}`)}>
                                {/* <!-- 圖片框 --> */}
                                <div className="picPlace">

                                    <img className="proPic" src={item.itemImgUrl} alt="" />
                                    {/* ))} */}
                                </div>
                                {/* <!-- 介紹欄 --> */}
                                <div className="intro">
                                    {item.itemTitle}
                                    {/* <!-- 商品標題 --> */}
                                    <span className="introp">
                                        {/* <!-- 愛心圖案 --> */}
                                        {/* <a href="/memberCenter"> */}
                                            <img className="introimg" src="/images/heart.png"
                                                style={{ width: '20px', marginLeft: '130px' }} alt=""
                                                onClick={(item) =>  favIdsend(item.itemId) } />
                                        {/* </a> */}
                                    </span>

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
                                        <span>
                                            {/* 最早可預訂日 ：{item.itemListedDate} */}
                                            銷售期間 ：{item.itemPeriod}
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
export default Forfood;