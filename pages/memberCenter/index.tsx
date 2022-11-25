import Image from "next/image";
import { useState } from 'react';
function Footer() {
  return (
    <div className="footer">
      <div className="footerCenter">
        <div className="footerBody">
          <ul>
            <h4>認識我們</h4>
            <li>
              <a href="">關於我們</a>
            </li>
            <li>
              <a href="">使用者條款</a>
            </li>
            <li>
              <a href="">隱私權保護政策</a>
            </li>
            <li>
              <a href="">常見問題與幫助</a>
            </li>
          </ul>
        </div>
        <div className="footerBody">
          <ul>
            <h4>給旅行者們</h4>
            <li>
              <a href="">三大保證</a>
            </li>
            <li>
              <a href="">合作夥伴</a>
            </li>
            <li>
              <a href="">回饋金介紹</a>
            </li>
            <li>
              <a href="">賺取額外獎勵</a>
            </li>
          </ul>
        </div>
        <div className="footerBody">
          <ul>
            <h4>給合作夥伴</h4>
            <li>
              <a href="">成為供應商</a>
            </li>
            <li>
              <a href="">供應商登入</a>
            </li>
            <li>
              <a href="">同業合作</a>
            </li>
            <li>
              <a href="">聯盟行銷</a>
            </li>
          </ul>
        </div>
        <div className="footerBody">
          <div className="footerImg">
            <h4>付款方式</h4>
            <Image
              width={20}
              height={20}
              src="/images/MasterCard.png"
              alt="MasterCard"
            />
            <Image width={20} height={20} src="/images/JCB.jpg" alt="JCB" />
            <Image width={20} height={20} src="/images/visa.png" alt="visa" />
            <Image
              width={20}
              height={20}
              src="/images/googlepay.jpg"
              alt="googlepay"
            />
            <Image
              width={20}
              height={20}
              src="/images/apple-pay.png"
              alt="apple"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
function Header() {
  return (
    <div className="header">
      <img
        src="./images/群組 1.png"
        alt=""
        style={{ width: 90, top: -8, position: "relative" }}
      />
      <div className="header-right">
        <a href="#">美食</a>
        <a href="#">景點</a>
        <a href="#">活動</a>
        <a href="#">住宿</a>
        <a href="#">交通</a>
        <a href="#">
          <img src="./images/cart.png" style={{ width: 25 }} />
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
function MemberAccount() {
  return( <div id="information" className="tabcontent">
    <h2>帳號設定 </h2>
    <div className="setBodyB">
      <span style={{color: "#8C5C02"}}> <b>基本資料</b> </span>
      <br /><br />
      <div className="basic">
        <span>姓名<b>*</b> </span>
        <input type="text" value="王曉明" />
      </div>
      <div className="basic">
        <span>性別</span>
        <select name="" id="">
          <option value="man">男生</option>
          <option value="girl">女生</option>
          <option value="sec">保密</option>
        </select>
      </div>
      <br />
      <div className="basic">
        <span>出生日期</span>
        <input type="date" />
      </div>
      <br />
      <div className="basic">
        <span>電話號碼<b>*</b></span>
        <input type="tel" />
      </div>
      <br />
      <div className="basic">
        <span>連絡信箱<b>*</b></span>
        <input type="email" />
      </div>
      <br />
      <div className="basic">
        <span>密碼<b>*</b></span>
        <input type="password" />
      </div>
      <div className="basicBtn">
        <button className="informationBtn"> <b>儲存</b> </button>
      </div>
    </div>
  </div>
  );
}

export default function Company(props) {
  const [tab, setTab] = useState('account');
  return <>
    <Header />
    <div className="MemberCentre">
      <div className="tabb">
        <div className="MemberImg">
          <img id="MemberImgId" src="./images/cat.jpg" alt="" />
          <div>
            {/* onChange={upload()} */}
            <input id="chengImgBtn" type="file" style={{ display: "none" }} />
            {/* onClick={this.chengImgBtn} */}
            <button type="button" id="cameraBtn">
              <img src="./images/camera.png" alt="" style={{ width: "25px" }} />
            </button>
          </div>
          <p>王曉明</p>
        </div>
        <div className="tabBtnB">
          <button className="tablinks" onClick={() => setTab('information')} id="defaultOpen">
            <span><img src="./images/flower.png" style={{ width: "30px", verticalAlign: "middle" }} />&emsp;帳號設定</span>
          </button>
          <button className="tablinks" onClick={() => setTab('discount')}>
            <span><img src="./images/flower.png" style={{ width: "30px", verticalAlign: "middle " }} />&emsp; 折扣券</span>
          </button>
          <button className="tablinks" onClick={() => setTab('rebate')}>
            <span><img src="./images/flower.png" style={{ width: "30px", verticalAlign: "middle " }} />&emsp; 回饋金</span>
          </button>
          <button className="tablinks" onClick={() => setTab('sevenDay')}>
            <span><img src="./images/flower.png" style={{ width: "30px", verticalAlign: "middle " }} />&emsp;
              登入七天簽到活動</span>
          </button>
          <button className="tablinks" onClick={() => setTab('memberOrder')}>
            <span><img src="./images/flower.png" style={{ width: "30px", verticalAlign: "middle " }} />&emsp; 訂單管理</span>
          </button>
          <button className="tablinks" onClick={() => setTab('collect')}>
            <span><img src="./images/flower.png" style={{ width: "30px", verticalAlign: "middle " }} />&emsp; 我的收藏</span>
          </button>

        </div>

      </div>
    </div>

    {/* <MemberAccount /> */}
    {tab === "information" && <MemberAccount />}
    <Footer />

  </>

}
