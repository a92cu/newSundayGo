import Image from "next/image";
import { useState, useEffect } from 'react';
import Script from "next/script";
import { runSQL } from "../../lib/mysql";

// 將功能做成component 兩邊都能使用
import Travelman from "./component/Travelman.jsx";
import Billtotal from "./component/Billtotal.jsx";
import Paybill from "./component/Paybill.jsx";

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
                <a href="#">
                    <img src="./images/cart.png" style={{ width: 25 }} />
                </a>
                <a href="#">會員中心</a>
                <a href="#divOne" className="loginbutton">登出</a>
            </div>
            <form className="example" action="">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
    );
}

//進度條
function Titlebar() {
    return (
        <>
            <div id="progressBar">
                {/* <!-- 進度條 --> */}
                <div>
                    <span></span>
                </div>
                {/* <!-- 花跟字 --> */}
                <ol className="cartList">
                    <li>
                        購物車
                        <img src="./images/flower.png" />
                    </li>
                    <li>
                        填寫資料及付款
                        <img src="./images/flower.png" />
                    </li>
                    <li>
                        訂購完成
                        <img src="./images/flower.png" />
                    </li>
                </ol>
            </div>
        </>
    )
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
//訂購人
function Orderman({
    userName,
    userPhone,
    userEmail,
    userGender }
) {
    return (
        <section className="orderman" >
            <div className="cartsidebar">
                <div className="cartsidebar__inner">
                    <button className="cartaccordion ">
                        <h3>
                            <img className="shopimg" src="./images/flower.png" />
                            訂購人資料</h3>
                        <hr />
                    </button>
                    <div className="cartpanel">
                        <div className="orderleft">
                            <span>名字</span>
                            <br />
                            <input type="text" name="userName" id="CartuserName" value={userName} required />
                            <div>
                                <span>電子信箱</span>
                                <br />
                                <input type="email" name="usermail" value={userEmail} required />
                            </div>
                        </div>
                        <div className="orderright">
                            <div>
                                <span>性別</span>
                                <br />
                                <input type="text" name="username2" value={userGender} required />
                            </div>
                            <div>
                                <span>連絡電話</span>
                                <br />
                                <input type="tel" name="userPhone" pattern="[0-9]{10}" id="CartuserPhone" value={userPhone} required />
                            </div>
                        </div>
                        <br />
                        {/* <!-- <input class="orderbtn" type="submit"> --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
// //旅客資料
// function Travelman(itemList) {
//     const [getItem,setGetItem]=useState([])
//     useEffect(()=>{
//         let shopList=JSON.parse(window.localStorage.getItem("sureshopcar"));
//         for (const key in shopList) {
//             itemList.itemList.forEach(element => {
//                 if(shopList[key].itemId==element.itemId){
//                     let getOneItem=[{
//                         itemId:element.itemId,
//                         itemPrice:element.itemPrice,
//                         itemTitle:element.itemTitle,
//                         itemImgUrl:element.itemImgUrl,
//                         count:shopList[key].count,
//                         date:shopList[key].date
//                     }]
//                     setGetItem(getOneItem);
//                 }
//             });
//         }
//     },[])
    
//     // useEffect(() => {
//     //     let shopcar = JSON.parse(localStorage.getItem("sureshopcar"))||[]; // 如果購物車沒有東西就空[]
//     //     // console.log(1, shopcar);
//     //     // console.log(2, shopcar[1]);
//     //     // console.log(2, shopcar[1]);
//     //     let shoplist = [];
//     //     let dataAll = itemList.itemList
//     //     var dataint = dataAll.map(x => x.itemId).indexOf();
//     //     // //得到item1的圖片
//     //     // console.log(3, dataAll[dataint].itemImgUrl)
//     //     // console.log(3, dataAll[dataint].itemImgUrl)
//     //     // // 商品標題
//     //     // console.log(4, dataAll[dataint].itemTitle)
//     //     // //價格
//     //     // console.log(5, shopcar[1].price, shopcar[1].date)

//     //     itemList.itemList.push({
//     //         itemTitle: dataAll[dataint].itemTitle,
//     //         itemPrice: dataAll[dataint].total,
//     //         itemImgUrl: dataAll[dataint].itemImgUrl,
//     //     })
//     //     let new1 = itemList.itemList.slice(73, 74)
//     //     console.log(6, itemList);
//     //     console.log(8, new1);
//     //     setshoplist(shoplist)
//     //     console.log(7, shoplist);
//     //     var app = itemList.itemList.splice(0, 73)
//     //     console.log(app)
//     // }, []);

//     return (
//         <section className="travelman">
//             <div className="cartsidebar">
//                 <div className="cartsidebar__inner">
//                     <button className="cartaccordion">
//                         <h3>
                        // <img className="shopimg" src="./images/flower.png" />
                        //     旅客資料</h3>
//                         <hr />
//                     </button>
//                     <div className="cartpanel">
//                         {getItem.map((i) =>
//                             <div className="carthomeProduct">
//                                 {/* <!-- 圖片框 --> */}
//                                 <div className="cartpicPlace">
//                                     <img className="cartproPic" src={i.itemImgUrl} alt="" />
//                                     {/* {i.itemImgUrl} */}
//                                 </div>
//                                 {/* <!-- 介紹欄 --> */}
//                                 <div className="cartinco">
//                                     <h3>
//                                         <p>
//                                             {i.itemTitle}
//                                         </p>
//                                     </h3>
//                                     {/* <!-- 地區標籤 --> */}
//                                     <div>
//                                         <div className="carttagplace">
//                                             新竹市
//                                         </div>
//                                         <div>
//                                             活動日期 ：2022-12-07
//                                             {/* {i.date} */}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                         )}
//                         {/* 迴圈結束 */}
//                         <h4>特殊需求備註</h4>
//                         <div>
//                             <textarea placeholder="此欄位僅限資料備註，不保證提供"></textarea>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

//付款方式 
function Paylist() {
    return (
        <section className="paylist">
            <div className="cartsidebar">
                <div className="cartsidebar__inner">
                    <button className="cartaccordion">
                        <h3>
                        <img className="shopimg" src="./images/flower.png" />
                            請選擇付款方式</h3>
                        <hr />
                    </button>
                    <div className="cartpanel">
                        <ul>
                            <li className="payway">
                                <label htmlFor="linepay">
                                    <input type="radio" id="linepay" name="payway" className="payway" />
                                    <span>LINE Pay</span>
                                    <img src="https://cdn.kkday.com/pc-web/assets/img/payment/ic_linepay_2.svg" alt="" />
                                </label>
                            </li>
                            <li className="payway">
                                <label htmlFor="cardeit">

                                    <input type="radio" id="cardeit" name="payway" />
                                    <span className="">信用卡/簽帳金融卡</span>
                                    <img src="https://cdn.kkday.com/pc-web/assets/img/payment/ic_visa.svg" alt="" />
                                    <img src="https://cdn.kkday.com/pc-web/assets/img/payment/ic_master.svg" alt="" />
                                    <img src="https://cdn.kkday.com/pc-web/assets/img/payment/ic_jcb.svg" alt="" />
                                </label>
                                <br />
                                <div className="carttoggle">
                                    信用卡號碼
                                    <input type="text" className="cardint" pattern="[0-9]{12}" placeholder="0000 0000 0000" required />
                                    <br />
                                    有效期限 &nbsp; &nbsp;
                                    <input type="text" className="cardint" name="" placeholder="MM/YY" required />
                                    <br />
                                    背面末3碼
                                    <input type="text" className="cardint" placeholder="CVC/CCV" />
                                </div>
                            </li>
                            <li className="payway">
                                <label htmlFor="webatm">
                                    <input type="radio" id="webatm" name="payway" />
                                    <span>網路ATM</span>
                                </label>
                            </li>
                            <li className="payway">
                                <b>
                                    請注意本平台不會向您收取任何平台交易手續費，
                                    但你下單時使用的信用卡或第三方支付平台可能會向您收取相關手續費，
                                    請參考其相關服務政策和規定，並向你所選的交易服務商取得更多資訊。</b>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
//電子發票(未使用)
// function Billlist({ userEmail }) {
//     return (
//         <section className="billlist">
//             <div className="cartsidebar">
//                 <div className="cartsidebar__inner">
//                     <button className="cartaccordion">
//                         <h3>電子發票</h3>
//                         <hr />
//                     </button>
//                     <div className="cartpanel">
//                         <p>電子收據寄送方式</p>
//                         <select name="" id="" style={{ width: '200px' }}>
//                             <option >寄送至信箱</option>
//                             <option >開立統編、收據</option>
//                         </select>
//                         <p>寄送信箱</p>
//                         <input type="email" value={userEmail} />
//                         {/* <!-- <h6>地址</h6>
//                                                                 <input type="text"> --> */}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// //付款明細
// function Billtotal(itemList) {
//     const [getItem,setGetItem]=useState([])
//     useEffect(()=>{
//         let shopList=JSON.parse(window.localStorage.getItem("sureshopcar"));
//         for (const key in shopList) {
//             itemList.itemList.forEach(element => {
//                 if(shopList[key].itemId==element.itemId){
//                     let getOneItem=[{
//                         itemId:element.itemId,
//                         itemPrice:element.itemPrice,
//                         itemTitle:element.itemTitle,
//                         itemImgUrl:element.itemImgUrl,
//                         count:shopList[key].count,
//                         date:shopList[key].date
//                     }]
//                     setGetItem(getOneItem);
//                 }
//             });
//         }
//     },[])
//     return (
//         <section className="billtotal">
//             <div className="cartsidebar">
//                 <div className="cartsidebar__inner">
//                     <button className="cartaccordion">
//                         <h3>付款明細</h3>
//                         <hr />
//                     </button>
//                     <div className="cartpanel">
//                         {getItem.map((i,key) =>
//                             <div className="carthomeProduct" key={key}>
//                                 {/* <!-- 圖片框 --> */}
//                                 <div className="cartpicPlace">
//                                     <img className="cartproPic" src={i.itemImgUrl} alt="IMG" />
//                                 </div>
//                                 {/* <!-- 介紹欄 --> */}
//                                 <div className="cartinco">
//                                     <h3>
//                                         <p>
//                                             {i.itemTitle}
//                                             {/* {itemList.itemList[73].itemTitle} */}
//                                         </p>
//                                     </h3>
//                                     {/* <!-- 地區標籤 --> */}
//                                     <div>
//                                         <div className="carttagplace">
//                                             {/* {i.itemFilter2} */}
//                                         </div>
//                                         <div>
//                                             活動日期 ：2022-12-07
//                                             {i.date}
//                                             <br />
//                                             人數 : 1人
//                                         </div>
//                                         <div>
//                                             商品數量:{i.count}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                         {/* 商品迴圈結束 */}
//                         <span className="carthrline">總金額 TWD</span>
//                         {/* {itemList.itemList.map((i) => */}
//                         <span className="paybill1">{getItem.map(i=>i.itemPrice*i.count)}</span>
//                         {/* )} */}
//                         <hr />
//                         <span className="carthrline">點數折抵 TWD</span>
//                         <span className="billcount">{getItem.map(i=>Math.floor(i.itemPrice*i.count*0.02))}</span>
//                         <hr />
//                         <span className="carthrline">支付金額 TWD</span>
//                         <span className="paybill2">{getItem.map(i=>i.itemPrice*i.count)}</span>
//                         <hr />
//                     </div>
//                 </div>
//             </div>

//         </section>
//     )
// }
// export const CartItem = (itemList) => {
//     const [shoplist, setshoplist] = useState([]);
//     useEffect(() => {
//         let shopcar = JSON.parse(localStorage.getItem("sureshopcar"));
//         console.log(1, shopcar);
//         console.log(2, shopcar[1]);
//         // console.log(2, shopcar[1]);
//         let shoplist = [];
//         let dataAll = itemList.itemList
//         var dataint = dataAll.map(x => x.itemId).indexOf();
//         //得到item1的圖片
//         console.log(3, dataAll[dataint].itemImgUrl)
//         // 商品標題
//         console.log(4, dataAll[dataint].itemTitle)
//         //價格
//         console.log(5, shopcar[1].price, shopcar[1].date)
//         shoplist.push({
//             itemTitle: dataAll[dataint].itemTitle,
//             itemPrice: dataAll[dataint].itemPrice,
//             itemImgUrl: dataAll[dataint].itemImgUrl,
//         })
//         let new1 =itemList.itemList.slice(73,74)
//         console.log(6, itemList);
//         console.log(8, new1);
//         setshoplist(shoplist)
//         console.log(7, shoplist);
//     }, []);
// }



//結帳區
// function Paybill() {
//     const favIdsend = async () => { 
//         await fetch("/api/cartlist/cartlist", {
//             method: "post",
//             // body:imgId
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json;charset=utf-8",
//             },
//             body: JSON.stringify({
//                 userId: 'u123456789',
//                 itemId: 1,
//                 orderReceipt: 'order000012',
//                 orderDate: '2022-12-12',
//                 orderQua: 3
//             })
//         }).then((res) => res.json())
//         // .then(alert('已成功付款'))
//         // .then(console.log('已加入最愛'))

//         // console.log(5, favId)
//         // .then(data => {
//         //     /*接到request data後要做的事情*/
//         //     console.log("使用者資料",data.data[0].imgId);

//         // })
        
//     }
//     //POST結束

//     return (
//         <section className="paybill">
//             <span>商品合計      </span> <span className="cartprdtit">TWD 1760</span>
//             <br /><br />
//             <span className="prdtit2">訂單完成後回饋金 TWD</span><span className="prdtit3">35</span>

//             <input type="submit" value="確認付款" id="billok" onClick={() => favIdsend()} />
//             {/* onClick={() => { setNewLocalS() }} */}
//         </section>
//     )

// }




export default function cartlist(props) {
    const [userName, setuserName] = useState(props.userName);
    const [itemList, setItemList] = useState(props.itemList);
    // const setNewLocalS = () => {
    //     //塞資料進去
    //     localStorage.setItem("newData", JSON.stringify(newData));
    // }
    return (
        <>
            <Header />
            <Titlebar />
            {/* <Listdemo /> */}
            <main style={{ width: '1280px', margin: '0 auto' }}>
                <form action="">
                    <Orderman
                        {...props.memberCentre} />
                    <Travelman
                        itemList={itemList} />
                    <Paylist />
                    {/* <Billlist
                        {...props.memberCentre} /> */}
                    <Billtotal
                        itemList={itemList}
                    // onCalculate={calculate}
                    />
                    <Paybill />
                </form>
            </main>
            <Footer />
            <Script src="/js/home.js" />
        </>
    )
}

export async function getStaticProps({ params }) {
    // const itemList: any = [];
    const sq1 = `SELECT item.itemId,item.itemPrice, item.itemTitle, item.itemFilter2, itemimg.itemImgUrl FROM item LEFT JOIN itemimg ON itemimg.itemId=item.itemId where imgLead=1;`;
    const sq2 = `SELECT userId, userPassword, userName, userGender, userPhone, userEmail FROM usertable WHERE userId = "u123456789"`;
    const itemList: any = [];
    // itemTitle itemFilter2 itemImgUrl
    const imgListRaw: any = await runSQL(sq1); // 所有項目
    const memberCentre = (await runSQL(sq2))[0]; // 帳號設定抓的資料
    imgListRaw.forEach((item: any) => {
        item.itemImgUrl = new TextDecoder("utf-8").decode(item.itemImgUrl);
        itemList.push({ ...item });
    });
    //把要的資料拿出來
    return {
        props: {
            //所有項目
            itemList,
            memberCentre: { ...memberCentre },
        },
    };

}
