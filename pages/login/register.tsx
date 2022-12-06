import React, { useState } from "react";
import Router from "next/router";

export const Register = (props) => {
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
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" >
            <label htmlFor="email">email</label>
            <input value={userId} onChange={(e) => setuserId(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={userPassword} onChange={(e) => setuserPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button className="sub-btn" type="submit" onClick={handleSubmit}>Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}


// export default Register;