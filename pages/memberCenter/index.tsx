import Image from "next/image";
import { useState } from 'react';
import Script from "next/script";
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
// 帳號設定
function MemberAccount() {
  return (<div id="information" className="tabcontent">
    <h2>帳號設定 </h2>
    <div className="setBodyB">
      <span style={{ color: "#8C5C02" }}> <b>基本資料</b> </span>
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
// 折扣券
function Discount() {
  return (<div id="discount" className="tabcontent">
    <h2>折扣券</h2>
    <div className="setBodyB">
      <div className="discountBtn" style={{ width: "100%" }}>
        {/* <div className="discountTab">
          <button className="discountlinks" onClick={this.discountOpen discountUse}
            id="discountOpen">可使用</button> 
          <button className="discountlinks" onClick={this.discountOpen discountUsed}>已使用</button>
        </div> */}
        <div id="discountUse" className="discountBody">
          <div className="discountDiv">
            <span>95折</span> <br />
            <span>訂單金額須滿100元</span> <br />
            <span>有效期限: 剩餘20天12hr</span> <br />
          </div>
          <div className="discountDivUsed">
            <span>95折</span> <br />
            <span>訂單金額須滿100元</span> <br />
            <span>有效期限: 剩餘20天12hr</span> <br />
          </div>


        </div>

        {/* <div id="discountUsed" className="discountBody">
          <div className="discountDivUsed">
            <span>95折</span> <br/>
            <span>訂單金額須滿100元</span> <br/>
            <span>有效期限: 剩餘20天12hr</span> <br/>
          </div>
        </div> */}
      </div>
    </div>
  </div>
  );
}

// 回饋金
function Rebate() {
  return (
    <div id="rebate" className="tabcontent">
      <h2 className="rebateH2">回饋金</h2>
      <div style={{ textAlign: "center" }}>
        <img src="./images/p.png" style={{ width: "30px", verticalAlign: "middle" }} />&emsp;123
        <br />
        <span className="poindDayline">有效期限:最近一筆訂單時間+1Y</span>
      </div>
      <div className="setBodyB">
        <div className="rebateBtn" style={{ width: "100%" }}>
          {/* <div className="rebateTab">
            <button className="rebatelinks " onClick={()=>rebateOpen(event, 'rebateUse')}
              id="rebateOpen ">獲得紀錄</button>
            <button className="rebatelinks" onClick={()=>rebateOpen(event, 'rebateUsed')}>使用紀錄</button>
          </div> */}

          <div id="rebateUse" className="rebateBody">
            <table className="rebateGetTable">
              <tbody>
                {/* 獲取點數 */}
                <tr className="rebateGetTr">
                  <td>桃園青埔|Xpark 都會型水生公園門票</td>
                  <td>2022-10-25</td>
                  <td><img src="./images/p.png" style={{ width: "20px", verticalAlign: "middle" }} /> &ensp;3
                  </td>
                </tr>
                {/* 使用點數 */}
                <tr className="rebateUsedTr">
                  <td>桃園青埔|Xpark 都會型水生公園門票</td>
                  <td>2022-10-25</td>
                  <td><img src="./images/p.png" style={{ width: "20px", verticalAlign: "middle" }} /> &ensp;-3
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* <div id="rebateUsed" className="rebateBody">
            <table className="rebateUsedTable">
              <tbody>
                <tr className="rebateUsedTr">
                  <td>桃園青埔|Xpark 都會型水生公園門票</td>
                  <td>2022-10-25</td>
                  <td><img src="./images/p.png" style={{ width: "20px", verticalAlign: "middle" }} /> &ensp;-3
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}
        </div>
      </div>

    </div>
  )
}

// 七天簽到
function SevenDay() {
  return (
    <div id="sevenDay" className="tabcontent">
      <h2>登入七天簽到活動</h2>
      <br />
      <div className="setBodyB">
        <div className="dayOneSeven">
          <img className="ImgPick" src="./images/day7/day1.png" alt="" />
          <img className="ImgPick" src="./images/day7/day2.png" alt="" />
          <img className="ImgPick" src="./images/day7/day3.png" alt="" />
          <img className="ImgPick" src="./images/day7/day4.png" alt="" />
        </div>
        <div className="dayOneSeven">
          <img className="ImgPick" src="./images/day7/day5.png" alt="" />
          <img className="ImgPick" src="./images/day7/day6.png" alt="" />
          <img className="ImgPick" src="./images/day7/day7.png" alt="" />
        </div>
      </div>

    </div>
  )
}

function MemberOrder() {
  return (
    <div id="memberOrder" className="tabcontent">
      <div className="setBodyB">
        <h2 className="memberOrderH2">訂單管理</h2>
        <div className="memberOrderBtn" style={{ width: "100% " }}>
          {/* <div className="memberOrderTab">
                <button className="memberOrderlinks" onclick="memberOrderOpen(event, 'memberOrderReady')"
                    id="memberOrderOpen">準備出發</button>
                <button className="memberOrderlinks" onclick="memberOrderOpen(event, 'memberOrderGo')">已出發</button>
                <button className="memberOrderlinks"
                    onclick="memberOrderOpen(event, 'memberOrderCancel')">已取消</button>
            </div> */}
          <div id="memberOrderReady" className="memberOrderBody">
            {/* 準備出發 */}
            <div className="OrderReadyDiv">
              <div className="OrderReadyImg"><img src="./images/商品暫用圖/A02.jpg" /></div>
              <div className="OrderReadyRight">
                <div className="ORRightName">
                  <h4>台灣宜蘭｜國立傳統藝術中心｜門票、畫舫船遊河券、遊程體驗遊程體驗遊程體驗</h4>
                  <span>訂單編號</span><span>#22KK250156250</span>
                </div>
                <div className="ORRightPrice">TWD<span>100</span></div>
                <div className="ORRightBtn">
                  <button> <a href="Receipt.html">查看憑證</a> </button>
                </div>
              </div>
            </div>
            {/* 已取消 */}
            <div id="memberOrderCancel" className="memberOrderBody">
              <div className="OrderReadyDiv">
                <div className="OrderReadyImg"><img src="./images/商品暫用圖/A02.jpg" /></div>
                <div className="OrderReadyRight">
                  <div className="ORRightName">
                    <h4>台灣宜蘭｜國立傳統藝術中心｜門票、畫舫船遊河券、遊程體驗遊程體驗遊程體驗</h4>
                    <span>訂單編號</span><span>#22KK250156250</span>
                  </div>
                  <div className="ORRightPrice">TWD<span>100</span></div>
                  <div className="ORRightBtn">
                    <button>重新訂購</button>
                  </div>
                </div>
              </div>
            </div>

            {/* 已出發 */}
            <div id="memberOrderGo" className="memberOrderBody">
              <div className="OrderReadyDiv">
                <div className="OrderReadyImg"><img src="./images/商品暫用圖/A02.jpg" /></div>
                <div className="OrderReadyRight">
                  <div className="ORRightName">
                    <h4>台灣宜蘭｜國立傳統藝術中心｜門票、畫舫船遊河券、遊程體驗遊程體驗遊程體驗</h4>
                    <span>訂單編號</span><span>#22KK250156250</span>
                  </div>
                  <div className="ORRightPrice">TWD<span>100</span></div>
                  <div className="ORRightBtn">
                    <button id="GoEvaluationBtn">前往評價</button>
                    <button>查看憑證</button>
                  </div>
                </div>
              </div>

            </div>
            {/* <!-- 前往評價燈箱 -->
                <div id="id01" className="modal">
                    <form className="modal-content animate" method="post">
                        <span id="evaluationX" className="close" title="Close Modal">
                            &times;
                        </span>
                        <p>桃園青埔|Xpark 都會型水生公園門票</p>
                        <div className="evaluationStar">
                            <div className="evaluationText"> 本次評價好感度
                                <span style="color: red;">*</span>
                                <div className="star">
                                    <!-- 主體 -->
                                    <div className="box1">
                                    </div>
                                    <div className="box1">
                                    </div>
                                    <div className="box1">
                                    </div>
                                    <div className="box1">
                                    </div>
                                    <div className="box1">
                                    </div>
                                </div>
                            </div>

                        </div>
                        <p>評論內容</p>
                        <textarea name="" id="" cols="35" rows="5"></textarea>
                        <button type="submit" className="evaluationSendBtn">送出</button>

                    </form>
                </div>
                <!--前往評價燈箱結束 --> */}



          </div>
        </div>
      </div>

    </div>

  );
}

// 收藏頁面
function Collect() {
  return (
    <div id="collect" className="tabcontent">
      <div className="setBodyB">
        <h2>我的收藏</h2>
        <div className="collectDiv">
          <div className="collectImg"><img src="./images/商品暫用圖/A02.jpg" /></div>
          <div className="collectRight">
            <div className="collectName">
              <button className="collectHeart collectDelete"><i className="fa fa-heart fa-2x"></i></button>
              <h3>台中 | 幻覺博物館門票台中 | 幻覺博物館門票台中 | 幻覺博物館門票</h3>
              <p>
                位於台中精明商圈，現場提供導覽解說，讓您在每一區都能有完整體驗多主題體驗區，變大變小、萬花筒鏡、閃閃燈光屋、漂浮等，邊玩邊拍照，兼具教育、啟發、創造、娛樂體驗，適合大小朋友一同探索
              </p>
              <div className="collectNamePrice">
                <div className="collectstar">
                  <img src="./images/1.png" />
                  <img src="./images/1.png" />
                  <img src="./images/1.png" />
                  <img src="./images/1.png" />
                  <img src="./images/1.png" />
                  <div>(46)</div>
                </div>
                <span>TWD<span>630</span></span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}



export default function MemberCentre(props) {
  const [tab, setTab] = useState('information');
  return <>
    {/* <Script src="/js/MemberCentre.js" /> */}

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
          <button className="tablinks" onClick={() => setTab('information')} id="defaultOpenB">
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
      {tab === "information" && <MemberAccount />}
      {tab === "discount" && <Discount />}
      {tab === "rebate" && <Rebate />}
      {tab === "sevenDay" && <SevenDay />}
      {tab === "memberOrder" && <MemberOrder />}
      {tab === "collect" && <Collect />}

    </div>

    <Footer />

  </>

}
