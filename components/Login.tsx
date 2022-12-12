import React, { useState } from "react";
import { useCookies } from "react-cookie";
import Router from "next/router";

export default function Login(props) {
  const [cookie, setCookie] = useCookies(["firm"]);
  const [firmId, setfirmId] = useState("");
  const [firmPassword, setfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/api/firmlogin/${firmId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())

      .then((data) => {
        /*接到request data後要做的事情*/
        // console.log("輸入帳號",firmId);
        // console.log("資料庫使用者帳號", data);

        // console.log("使用者密碼", data.data[0].firmPassword);
        // console.log(data.data.length);

        //判斷帳號密碼是否正確
        if (
          data.data.length == 0 ||
          data.data[0].firmId != `${firmId}` ||
          data.data[0].firmPassword != `${firmPassword}`
        ) {
          console.log(Object.keys(cookie).length === 0);

          alert("帳號或密碼輸入錯誤");
        } else {
          alert("登入成功");

          //設定cookie
          setCookie("firm", JSON.stringify(data), {
            path: "/",
            maxAge: 36000, // cookeie 10小時後過期
            sameSite: true,
          });

          //存於cookie的值
          // console.log(cookie.firm.data[0].firmId);

          // cookie判斷是否存在
          // if (Object.keys(cookie).length!==0) {
          //     console.log("cookie已存");
          // }

          //跳轉到指定頁
          setTimeout(() => {
            Router.replace("/company");
          }, 10);
        }
      })

      .catch((e) => {
        /*發生錯誤時要做的事情*/
        // alert("帳號或密碼輸入錯誤2");
        console.log(e);
      });
  };

  return (
    <div className="auth-form-container">
      <h2>廠商登入</h2>
      <form className="login-form">
        <label htmlFor="firmId">帳號</label>
        <input
          value={firmId}
          onChange={(e) => setfirmId(e.target.value)}
          type="email"
          placeholder="輸入帳號"
          id="email"
          name="email"
        />
        <label htmlFor="firmPassword">密碼</label>
        <input
          value={firmPassword}
          onChange={(e) => setfirmPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button className="sub-btn" type="submit" onClick={handleSubmit}>
          送出
        </button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        沒有帳號？點此註冊
      </button>
      <button className="link-btn">
        <a href="http://localhost:3000/login">會員登入請按此</a>
      </button>
    </div>
  );
}
