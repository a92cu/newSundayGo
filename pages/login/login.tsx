import React, { useState } from "react";
import { useCookies } from "react-cookie"
import Router from "next/router";



export const Login = (props) => {
    const [cookie, setCookie] = useCookies(["user"])
    const [userId, setuserId] = useState("");
    const [userPassword, setuserPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userId);

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

                    //存於cookie的值
                    // console.log(cookie.user.data[0].userId);

                    // cookie判斷是否存在
                    // if (Object.keys(cookie).length!==0) {
                    //     console.log("cookie已存");
                    // }
                    //跳轉到會員頁  
                    setTimeout(() => {
                        Router.replace("/memberCenter");
                    }, 10);
                }
            })

            .catch(e => {
                /*發生錯誤時要做的事情*/
                // alert("帳號或密碼輸入錯誤2");
                console.log(e);
            })

    }

    return (
        <div className="auth-form-container">
            <h2>會員登入</h2>
            <form className="login-form" >
                <label htmlFor="userId">帳號</label>
                <input value={userId} onChange={(e) => setuserId(e.target.value)}type="email" placeholder="輸入帳號" id="email" name="email" />
                <label htmlFor="userPassword">密碼</label>
                <input value={userPassword} onChange={(e) => setuserPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="sub-btn" type="submit" onClick={handleSubmit}>送出</button>
            </form>
            <button    className="link-btn" onClick={() => props.onFormSwitch('register')}>沒有帳號？點此註冊</button>
            <button className="link-btn" onClick={() => window.location.href="http://localhost:3000/firmlogin"} >廠商登入請按此</button>

        </div>
    )
}