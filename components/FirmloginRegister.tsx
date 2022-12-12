import React, { useState } from "react";
import Router from "next/router";

export default function FirmloginRegister(props) {
  const [firmId, setfirmId] = useState("");
  const [firmPassword, setfirmPassword] = useState("");

  //目前尚未加入判斷是否為已存在帳號
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firmId);

    fetch(`http://localhost:3000/api/firmlogin/${props.firmId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firmId,
        firmPassword,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("資料庫使用者帳號", res);
        alert("註冊成功");
      })

      .catch((e) => {
        console.log("錯誤:", e);
        alert("錯誤");
      });

    // 註冊後跳轉到設定頁面
    // setTimeout(() => {
    //     Router.replace("/memberCenter");
    // }, 100);
  };

  return (
    <div className="auth-form-container">
      <h2>註冊廠商會員</h2>
      <form className="register-form">
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
          type="輸入密碼"
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
