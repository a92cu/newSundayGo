import React, { useState } from "react";
import Router from "next/router";

export default function Register(props) {
  const [userId, setuserId] = useState("");
  const [userPassword, setuserPassword] = useState("");

  //目前尚未加入判斷是否為已存在帳號
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userId);

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
      .then((res) => res.json())
      .then((res) => {
        console.log("資料庫使用者帳號", res);
        alert("註冊成功");
        
        //成功後跳轉login
        props.onFormSwitch('login')

      })


      
      .catch((e) => {
        console.log("錯誤:", e);
        alert("錯誤");
      });

      // Router.replace("/login")
  };


  return (
    <div className="auth-form-container">
      <h2>註冊會員</h2>
      <form className="register-form">
        <label htmlFor="userId">帳號</label>
        <input
          value={userId}
          onChange={(e) => setuserId(e.target.value)}
          type="email"
          placeholder="輸入帳號"
          id="email"
          name="email"
        />
        <label htmlFor="userPassword">密碼</label>
        <input
          value={userPassword}
          onChange={(e) => setuserPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button className="sub-btn" type="submit" onClick={handleSubmit}>
          送出
        </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        已有帳號？點此登入
      </button>
    </div>
  );
}
