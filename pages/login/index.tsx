//嵌入img
import Image from "next/image";
//引入NEXT內建的script
import Script from "next/script";
//lib裡的指令重複使用
import { runSQL } from "../../lib/mysql";
import { useEffect, useState } from 'react'
import Router from "next/router";
import { useCookies } from "react-cookie"



function Header() {
const [cookie, setCookie] = useCookies(["user"])

    if (Object.keys(cookie).length===0) {
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
        )
    } else {
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
                        登出
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
    
    
}


function Login(props) {

    // //  hook寫法
    // const [userId, setuserId] = useState(props.userId);
    // const [userPassword, setuserPassword] = useState(props.userPassword);
    const [userId, setuserId] = useState("");
    const [userPassword, setuserPassword] = useState("");


    const [cookie, setCookie] = useCookies(["user"])

    // 送出註冊資料
    // 目前需加入判斷是否已存在此帳號 但因server有回應 所以.catch 不會執行
    const regMember = () => {
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
        })
            .then(res => res.json())
            .then(res => {
                console.log("資料庫使用者帳號", res);
                alert("註冊成功");
            })

            .catch(e => {
                console.log('錯誤:', e);
                alert("錯誤");
            })

        // 註冊後跳轉到設定頁面
        // setTimeout(() => {
        //     Router.replace("/memberCenter");
        // }, 100);

    };

    

    //登入及註冊的切換 */
    
    const openPage=(pageName)=> {
        var i, loginTabContent;
        loginTabContent = document.getElementsByClassName("loginTabContent");
        for (i = 0; i < loginTabContent.length; i++) {
            loginTabContent[i].style.display = "none";
        }
        document.getElementById(pageName).style.display = "block";
        
        // elmnt.style.backgroundColor = color;
    }
    //最先開啟顯示的頁面
    if (typeof window !== 'undefined') {
    document.getElementById("defaultOpen").click();}

    //最上層 會員 廠商的切換
        const TwoPage=(pageName) =>{
           
            console.log(pageName);
            var i, loginTabContent;

            loginTabContent = document.getElementsByClassName("Twotabcontent");

            for (i = 0; i < loginTabContent.length; i++) {
                loginTabContent[i].style.display = "none";
            }
            document.getElementById(pageName).style.display = "block";
            
            //  elmnt.style.backgroundColor = color;
        }

        // TwoPage最先開啟顯示的頁面
        if (typeof window !== 'undefined') {
        document.getElementById("TwodefaultOpen").click();}


        ////廠商 登入註冊 的切換
        const ThreePage=(pageName)=> {

            var i, loginTabContent;
            loginTabContent = document.getElementsByClassName("Threetabcontent");
            console.log(loginTabContent);
            for (i = 0; i < loginTabContent.length; i++) {
                loginTabContent[i].style.display = "none";
                console.log(loginTabContent[i].style.display);
            }
            document.getElementById(pageName).style.display = "block";
            // elmnt.style.backgroundColor = color;
        }
    //     //ThreePage最先開啟顯示的頁面
    if (typeof window !== 'undefined') {
        document.getElementById("ThreedefaultOpen").click();
    }

        //忘記密碼的切換
       const ForgetPage=(pageName)=> {
            //將member以下的所有資訊隱藏
        
          document.getElementById("member").style.opacity = "0";
            
            //顯示廠商頁面的html
            document.getElementById("company").innerHTML = "<h3>廠商忘記密碼請聯繫總公司!!</h3>";
            var i, loginTabContent, tablinks;
            loginTabContent = document.getElementsByClassName("ForgetTabcontent");
            for (i = 0; i < loginTabContent.length; i++) {
                loginTabContent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("ForgetTablink");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].style.backgroundColor = "";
            }
            document.getElementById(pageName).style.display = "block";
            // elmnt.style.backgroundColor = color;
        }

        //忘記密碼輸入成功的切換
        const ForgetPageTwo=(pageName) =>{
            //將forget以下的所有資訊隱藏
            document.getElementById("forget").style.opacity = "0";
            //顯示忘記密碼輸入完成的資料
            document.getElementById("apple").innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; 
            border: solid 1px orange; height: 300px; background-color: aliceblue;">
            <img src="/img/icons/checked.png" alt="">
            <h3>臨時密碼已發送至信箱<br>請至信箱內收取密碼並重新登入</h3>
            </div>`;
            var i, loginTabContent, tablinks;
            loginTabContent = document.getElementsByClassName("ForgetTabcontentTwo");
            for (i = 0; i < loginTabContent.length; i++) {
                loginTabContent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("ForgetTablinkTwo");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].style.backgroundColor = "";
            }
            document.getElementById(pageName).style.display = "block";
            // elmnt.style.backgroundColor = color;
        }






    //登入判斷
    const handleSubmit = (e) => {
        e.preventDefault();
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
                // console.log("資料庫使用者帳號", data);

                // console.log("使用者密碼", data.data[0].userPassword);
                // console.log(data.data.length);

                //判斷帳號密碼是否正確
                if (data.data.length == 0
                    || data.data[0].userId != `${userId}`
                    || data.data[0].userPassword != `${userPassword}`
                ) {
                    console.log(Object.keys(cookie).length===0);

                    alert("帳號或密碼輸入錯誤");


                } else {
                    alert("登入成功");

                    //設定cookie
                    setCookie("user", JSON.stringify(data), {
                        path: "/",
                        maxAge: 36000, // cookeie 10小時後過期
                        sameSite: true,
                    })

                    console.log(cookie);
                    //存於cookie的值
                    console.log(cookie.user.data[0].userId);

                    // cookie判斷是否存在
                    if (Object.keys(cookie).length!==0) {
                        console.log("cookie已存");
                    }
                    //跳轉到會員頁  
                    setTimeout(() => {
                        Router.replace("/memberCenter");
                    }, 100);
                }
            })

            .catch(e => {
                /*發生錯誤時要做的事情*/
                // alert("帳號或密碼輸入錯誤2");
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
                        {/* <!-- 這一層是綠色框框  有廠商跟會員的內容 +  廠商跟會員的切換按鈕  -->
                    <!-- style="border:solid 3px ; color: green; width: 400px; height: 600px;" className="greenLine" --> */}
                        <div>
                            <button className="Twotablink" onClick={() => TwoPage("member")}
                                id="TwodefaultOpen">會員
                            </button>

                            <button className="Twotablink" onClick={() => TwoPage("company")}>
                                廠商
                            </button>

                            {/* <!-- 這一層包住  廠商跟會員  的 登入及註冊 以及所有內容+按鈕  的中媽媽框  --> */}
                            <div >
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
                                                {/* <label htmlFor="">請輸入驗證碼</label><br />
                                                <input type="text" /><br />
                                                <canvas id="c1" ></canvas> */}
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
                                            <button className="tablink" onClick={() => openPage("login")}
                                                id="defaultOpen">登入</button>
                                            <button className="tablink"
                                                onClick={() => openPage("register")}>註冊</button>

                                            {/* <!-- 這裡放會員登入 --> */}
                                            <div id="login" className="loginTabContent">
                                                <br />
                                                <div>
                                                    <form action="" >
                                                        <label htmlFor="">會員登入帳號</label>
                                                        <input
                                                            id=""
                                                            value={userId}
                                                            type="text"
                                                            placeholder="請輸入帳號"
                                                            onChange={(e) => setuserId(e.target.value)} 
                                                            />
                                                        <br />
                                                        <label htmlFor="">會員登入密碼</label>
                                                        <input
                                                            value={userPassword}
                                                            type="password"
                                                            placeholder="請輸入密碼"
                                                            onChange={(e) => setuserPassword(e.target.value)} 
                                                            />
                                                        <br />
                                                        <input type="submit" value="確認"   onClick={(e) => handleSubmit(e)}/>
                                                        

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
                                            <div id="register" className="loginTabContent" style={{ display: "none" }}>
                                                <br />
                                                <div>
                                                    <form action="">
                                                        <label htmlFor="">會員註冊帳號</label>
                                                        <input
                                                            type="text"
                                                            value={userId}
                                                            onChange={(e) => setuserId(e.target.value)}
                                                            placeholder="請輸入帳號" />
                                                        <br />
                                                        <label htmlFor="">會員註冊密碼</label>
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
                                                    <p>註冊即同意會員約定事項</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- 這一層裡面放 "廠商"的登入註冊 + 切換的按鈕  的小媽媽框 --> */}
                                <div id="company" className="Twotabcontent">

                                    {/* <!-- 這一層放 紅色框用來辨識 "廠商"的登入註冊 + 切換的按鈕  的小小媽媽框-->
                                <!-- style="border:solid 3px ; color: red; display: flex; width: 300px; height: 400px;" className="redLine" --> */}
                                    

                                        {/* <!-- 這一層放 廠商的登入註冊 + 切換的按鈕  的小小媽媽框--> */}
                                        <div  >
                                            <button className="Threetablink"
                                                onClick={() => ThreePage("companylogin")}
                                                id="ThreedefaultOpen">登入</button>
                                            <button className="Threetablink"
                                                onClick={() => ThreePage("companyregister")}>註冊</button>

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
                                                    <form action="" >
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
                                                    <p>註冊即同意會員約定事項</p>
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




export default function LoginPage() {
    return (
        <>
            <Header />
            <Login />
            {/* <Script src="/js/loginPage.js" /> */}
        </>

    );

}
