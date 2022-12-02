//嵌入img
import Image from "next/image";
//引入NEXT內建的script
import Script from "next/script";
//lib裡的指令重複使用
import { runSQL } from "../../lib/mysql";
//整理日期格式
import { format } from "date-fns";
import { useState } from "react";
import { none } from "ramda";
import Router from "next/router";
import useFile from "../../hook/useFile";




// function Footer() {
//     return (
//         <div className="footer">
//             <div className="footerCenter">
//                 <div className="footerBody">
//                     <ul>
//                         <h4>認識我們</h4>
//                         <li>
//                             <a href="">關於我們</a>
//                         </li>
//                         <li>
//                             <a href="">使用者條款</a>
//                         </li>
//                         <li>
//                             <a href="">隱私權保護政策</a>
//                         </li>
//                         <li>
//                             <a href="">常見問題與幫助</a>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="footerBody">
//                     <ul>
//                         <h4>給旅行者們</h4>
//                         <li>
//                             <a href="">三大保證</a>
//                         </li>
//                         <li>
//                             <a href="">合作夥伴</a>
//                         </li>
//                         <li>
//                             <a href="">回饋金介紹</a>
//                         </li>
//                         <li>
//                             <a href="">賺取額外獎勵</a>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="footerBody">
//                     <ul>
//                         <h4>給合作夥伴</h4>
//                         <li>
//                             <a href="">成為供應商</a>
//                         </li>
//                         <li>
//                             <a href="">供應商登入</a>
//                         </li>
//                         <li>
//                             <a href="">同業合作</a>
//                         </li>
//                         <li>
//                             <a href="">聯盟行銷</a>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="footerBody">
//                     <div className="footerImg">
//                         <h4>付款方式</h4>
//                         <Image
//                             width={20}
//                             height={20}
//                             src="/images/MasterCard.png"
//                             alt="MasterCard"
//                         />
//                         <Image width={20} height={20} src="/images/JCB.jpg" alt="JCB" />
//                         <Image width={20} height={20} src="/images/visa.png" alt="visa" />
//                         <Image
//                             width={20}
//                             height={20}
//                             src="/images/googlepay.jpg"
//                             alt="googlepay"
//                         />
//                         <Image
//                             width={20}
//                             height={20}
//                             src="/images/apple-pay.png"
//                             alt="apple"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
function Header() {
    return (
        <div className="header">
            <img
                src="/images/群組 1.png"
                alt=""
                // width={20} height={20}
                style={{
                    width: 90,
                    top: -8,
                    position: "relative"
                }}
            />
            <div className="header-right">
                <a href="#">美食</a>
                <a href="#">景點</a>
                <a href="#">活動</a>
                <a href="#">住宿</a>
                <a href="#">交通</a>
                <a href="#">
                    <img
                        src="/images/cart.png"
                        alt=""
                        width={20} height={20} />
                </a>
                <a href="#divOne" className="loginbutton">
                    登入|註冊
                </a>
            </div>
            <form className="example" action="">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </form>
        </div>
    );
}


function Login(props) {



    // //  hook寫法
    // const [userId, setuserId] = useState(props.userId);
    // const [userPassword, setuserPassword] = useState(props.userPassword);
    const [userId, setuserId] = useState("");
    const [userPassword, setuserPassword] = useState("");

    const regMember = () => {
        if (window.confirm("請確認是否要註冊帳號") === true) {

            fetch(`http://localhost:3000/api/login/${props.userId}`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId,
                    userPassword,
                }),
            });

            //註冊後跳轉到設定頁面
            setTimeout(() => {
                Router.replace("/login");
            }, 100);
        }
    };

    //登入判斷
    const handleSubmit = (e) => {
        // e.preventDefault();
        fetch(`http://localhost:3000/api/login/${userId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then(res => res.json())

            .then(data => {
                /*接到request data後要做的事情*/
                // console.log("輸入帳號",userId);
                console.log("資料庫使用者帳號", data);

                // console.log("使用者密碼", data.data[0].userPassword);
                // console.log(data.data.length);

                //判斷帳號密碼是否正確
                if (data.data.length == 0
                    || data.data[0].userId != `${userId}`
                    || data.data[0].userPassword != `${userPassword}`
                ) {
                    alert("帳號或密碼輸入錯誤");
                } else {
                    alert("登入成功");

                    //跳轉到會員頁
                    // setTimeout(() => {
                    //     Router.replace("/memberCenter");
                    // }, 100);
                }
            })
            .catch(e => {
                /*發生錯誤時要做的事情*/
                alert("帳號或密碼輸入錯誤");
                console.log(e);
            })
    }


    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     console.log(`${userId} ${userPassword}`);

    //   };



    return (

        <div className="login">
            <div className="loginoverlay" id="divOne">
                {/* <!-- pop up中層 --> */}
                <div className="loginwrapper">
                    {/* <!-- pop up的 X按鈕 --> */}
                    <a href="" className="close">&times;</a>
                    {/* <!-- pop up 內層 --> */}
                    <div className="logincontent">
                        {/* <!-- 這裡是最外層辨識的藍色框框 包住全部的大媽媽-->
                <!-- style="border:solid 3px ; color: blue;  width: 1000px; height: 1000px;" --> */}


                        {/* <!-- 這一層是綠色框框  有廠商跟會員的內容 +  廠商跟會員的切換按鈕  -->
                    <!-- style="border:solid 3px ; color: green; width: 400px; height: 600px;" className="greenLine" --> */}
                        <div>
                            <button className="Twotablink" onClick={() => TwoPage("member", "white")}
                                id="TwodefaultOpen">會員
                            </button>

                            <button className="Twotablink" onClick={() => TwoPage("company", "white")}>
                                廠商
                            </button>

                            {/* <!-- 這一層包住  廠商跟會員  的 登入及註冊 以及所有內容+按鈕  的中媽媽框  --> */}
                            <div >
                                {/* /* <!-- <div id="forgetInfo" className="ForgetTabcontent" style="display: none;"> *
                                    <p>忘記密碼資訊</p>
                                      </div> --> */}
                                <div id="forget" className="ForgetTabcontent"
                                    style={{
                                        display: "none",
                                        border: "solid 1px orange",
                                        height: 450,
                                        backgroundColor: "aliceblue",
                                    }} >

                                    <div className="forget">
                                        <div style={{
                                            display: " flex",
                                            justifyContent: "center",
                                            alignItems: " center",
                                        }}>
                                            <h3>重設密碼</h3>
                                        </div>

                                        <div style={{
                                            display: "flex",
                                            justifyContent: " center",
                                            alignItems: "center",
                                        }}>

                                            <form action="" >
                                                <label htmlFor="">確認帳號</label><br />
                                                <input type="text" placeholder="請輸入帳號" /><br />
                                                <label htmlFor="">請輸入有效信箱</label><br />
                                                <input type="email" placeholder="請輸入E-mail" /><br />
                                                <label htmlFor="">請輸入驗證碼</label><br />
                                                <input type="text" /><br />
                                                <canvas id="c1" ></canvas>
                                                <a href="javascript:void(0)" onClick={() => location.reload()}>返回</a>
                                                {/* <!-- 忘記密碼輸入成功的頁面 -->
                                            <!-- 包住忘記密碼的框style="border: solid 1px blueviolet;" --> */}
                                                <div id="forgetOk" className="ForgetTabcontentTwo" >
                                                    <button className="ForgetTablinkTwo"
                                                        // onClick="ForgetPageTwo('forgetOk', this)">確認
                                                        onClick={() => ForgetPageTwo("forgetOk")} >確認

                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- 這一層裡面放 "會員"的登入註冊 + 切換的按鈕  的小媽媽框 --> */}
                                <div id="member" className="Twotabcontent">

                                    {/* <!-- 這一層放 紅色框 是用來辨識 "會員"的登入註冊 + 切換的按鈕  的小小媽媽框-->
                                <!-- style="border:solid 3px ; color: red; display: flex; width: 300px; height: 400px;" className="redLine" --> */}
                                    <div>

                                        {/* <!-- 這一層包住了 "會員"的登入註冊 + 切換的按鈕 --> */}
                                        <div >
                                            <button className="tablink" onClick={() => openPage("login", "orange")}
                                                id="defaultOpen">登入</button>
                                            <button className="tablink"
                                                onClick={() => openPage("register", "orange")}>註冊</button>

                                            {/* <!-- 這裡放會員登入 --> */}
                                            <div id="login" className="loginTabContent">
                                                <br />
                                                <div>
                                                    <form action="" onSubmit={handleSubmit}>
                                                        <label htmlFor="">帳號</label>
                                                        <input
                                                            id=""
                                                            value={userId}
                                                            type="text"
                                                            placeholder="請輸入帳號"
                                                            onChange={(e) => setuserId(e.target.value)} />
                                                        <br />
                                                        <label htmlFor="">密碼</label>
                                                        <input
                                                            value={userPassword}
                                                            type="password"
                                                            placeholder="請輸入密碼"
                                                            onChange={(e) => setuserPassword(e.target.value)} />
                                                        <br />
                                                        <input type="submit" value="確認" />

                                                    </form>
                                                    <br />


                                                    {/* <!-- 忘記密碼的頁面 -->
                                                <!-- 包住忘記密碼的框style="border: solid 1px blueviolet;" --> */}
                                                    <div>
                                                        <button className="ForgetTablink"
                                                            style={{ float: "right" }}
                                                            onClick={() => ForgetPage("forget")}>忘記密碼
                                                        </button>
                                                    </div>
                                                    <br />
                                                    <br />
                                                    <hr />
                                                    <p>其他登入方式</p>
                                                    <div className="iconStyle">
                                                        <Image width={20} height={20} src="/images/facebook.png" alt="" />
                                                        <Image width={20} height={20} src="/images/instagram.png" alt="" />
                                                        <Image width={20} height={20} src="/images/google.png" alt="" />
                                                        <Image width={20} height={20} src="/images/line.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- 這裡放會員註冊 --> */}
                                            <div id="register" className="loginTabContent">
                                                <br />
                                                <div>
                                                    <form action="javascript:void(0)">
                                                        <label htmlFor="">帳號</label>
                                                        <input
                                                            type="text"
                                                            value={userId}
                                                            onChange={(e) => setuserId(e.target.value)}
                                                            placeholder="請輸入帳號" />
                                                        <br />
                                                        <label htmlFor="">密碼</label>
                                                        <input
                                                            type="password"
                                                            value={userPassword}
                                                            onChange={(e) => setuserPassword(e.target.value)}
                                                            placeholder="請輸入密碼" />
                                                        <br />
                                                        <input
                                                            type="submit"
                                                            value="確認"
                                                            onClick={() => regMember()}
                                                        />
                                                    </form>
                                                    <br />
                                                    <hr />
                                                    <p>其他註冊方式</p>
                                                    <div className="iconStyle">
                                                        <Image width={20} height={20} src="/images/facebook.png" alt="" />
                                                        <Image width={20} height={20} src="/images/instagram.png" alt="" />
                                                        <Image width={20} height={20} src="/images/google.png" alt="" />
                                                        <Image width={20} height={20} src="/images/line.png" alt="" />
                                                    </div>
                                                    <p>註冊即同意會員約定事項暨隱私權保護政策</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- 這一層裡面放 "廠商"的登入註冊 + 切換的按鈕  的小媽媽框 --> */}
                                <div id="company" className="Twotabcontent">

                                    {/* <!-- 這一層放 紅色框用來辨識 "廠商"的登入註冊 + 切換的按鈕  的小小媽媽框-->
                                <!-- style="border:solid 3px ; color: red; display: flex; width: 300px; height: 400px;" className="redLine" --> */}
                                    <div>

                                        {/* <!-- 這一層放 廠商的登入註冊 + 切換的按鈕  的小小媽媽框--> */}
                                        <div>
                                            <button className="Threetablink"
                                                onClick={() => ThreePage("companylogin", "orange")}
                                                id="ThreedefaultOpen">登入</button>
                                            <button className="Threetablink"
                                                onClick={() => ThreePage("companyregister", "orange")}>註冊</button>

                                            {/* <!-- 廠商的登入 --> */}
                                            <div id="companylogin" className="Threetabcontent">
                                                <br />
                                                <div>
                                                    <form action="javascript:void(0)">
                                                        <label htmlFor="">廠商登入帳號</label>
                                                        <input type="text" placeholder="請輸入帳號" /><br />
                                                        <label htmlFor="">廠商登入密碼</label>
                                                        <input type="password" placeholder="請輸入密碼" /><br />
                                                        <input type="submit" value="確認" />
                                                    </form>
                                                    <br />
                                                    <br />
                                                    <hr />
                                                    <p>其他登入方式</p>
                                                    <div className="iconStyle" >
                                                        <Image width={20} height={20} src="/images/facebook.png" alt="" />
                                                        <Image width={20} height={20} src="/images/instagram.png" alt="" />
                                                        <Image width={20} height={20} src="/images/google.png" alt="" />
                                                        <Image width={20} height={20} src="/images/line.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- 廠商的註冊 --> */}
                                            <div id="companyregister" className="Threetabcontent">
                                                <br />
                                                <div>
                                                    <form action="">
                                                        <label htmlFor="">廠商註冊帳號</label>
                                                        <input type="text" placeholder="請輸入帳號" /><br />
                                                        <label htmlFor="">廠商註冊密碼</label>
                                                        <input type="password" placeholder="請輸入密碼" /><br />
                                                        <input type="submit" value="確認" />
                                                    </form>
                                                    <br />
                                                    <hr />
                                                    <p>其他註冊方式</p>
                                                    <div className="iconStyle">
                                                        <Image width={20} height={20} src="/images/facebook.png" alt="" />
                                                        <Image width={20} height={20} src="/images/instagram.png" alt="" />
                                                        <Image width={20} height={20} src="/images/google.png" alt="" />
                                                        <Image width={20} height={20} src="/images/line.png" alt="" />
                                                    </div>
                                                    <p>註冊即同意會員約定事項暨隱私權保護政策</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}




export default function LoginPage(props) {
    const [tab, setTab] = useState("Login");
    const [itemList, setItemList] = useState(props.itemList);



    return (
        <>
            <Header />
            <Login />
            {/* <Footer />  */}
            {/* <div className="companyName">
        <span>{props.firmName}</span> &nbsp;<span>您好！</span>
      </div> */}


            {/* 測試翔哥tab做法 */}
            {/* <div className="MemberCentre">
                <div className="tab">
                    <div className="tabBtn">
                        <button
                            className="tablinks"
                            onClick={() => setTab("Login2")}
                            id="defaultOpen"
                        >
                            <span>
                                <img
                                    src="./images/flower.png"
                                    style={{ width: 30, verticalAlign: "middle" }}
                                />
                                &nbsp;會員登入
                            </span>
                        </button>
                        <button className="tablinks" onClick={() => setTab("memberOrder")}>
                            <span>
                                <img
                                    src="./images/flower.png"
                                    style={{ width: 30, verticalAlign: "middle" }}
                                />
                                &nbsp; 訂單管理
                            </span>
                        </button>
                    </div>
                </div>


                {tab === "Login2" && <Login2 {...props.company} />}
                {tab === "memberOrder" && (
                    <MemberOrder
                        setItemList={setItemList}
                        itemList={itemList}
                        imgList={props.imgList}
                    />
                )}
            </div> */}


            <Script src="/js/loginPage.js" />
        </>

    );

}
