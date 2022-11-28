import Image from "next/image";
import { useState } from 'react';
import Script from "next/script";
import { runSQL } from "../../lib/mysql";
import { format } from "date-fns";
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
function MemberAccount({
  userPassword,
  userName,
  useGender,
  userPhone,
  userEmail
}) {
  return (<div id="information" className="tabcontentB">
    <h2>帳號設定 </h2>
    <div className="setBodyB">
      <span style={{ color: "#8C5C02" }}> <b>基本資料</b> </span>
      <br /><br />
      <div className="basic">
        <span>姓名<b>*</b> </span>
        <input type="text" value={userName} />
      </div>
      <div className="basic">
        <span>性別</span>
        <select name="" id="">
          <option value="man">{useGender}</option>
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
        <input type="tel" value={userPhone} />
      </div>
      <br />
      <div className="basic">
        <span>連絡信箱<b>*</b></span>
        <input type="email" value={userEmail} />
      </div>
      <br />
      <div className="basic">
        <span>密碼<b>*</b></span>
        <input type="password" value={userPassword} />
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
  return (<div id="discount" className="tabcontentB">
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
    <div id="rebate" className="tabcontentB">
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
    <div id="sevenDay" className="tabcontentB">
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

//訂單管理
function MemberOrder() {
  const GoEvaluation = () => {
    // alert('ok');
    document.getElementById('id01').style.display = "block";
  }

  return (

    <div id="memberOrder" className="tabcontentB">
      <div className="setBodyB">
        <h2 className="memberOrderH2">訂單管理</h2>
        <div className="memberOrderBtn" style={{ width: "100% " }}>
          <div id="memberOrderReady" className="memberOrderBody">
            {/* 準備出發 */}
            <div className="OrderReadyDiv">
              <div className="OrderReadyImg"><img src="./images/商品暫用圖/A02.jpg" /></div>
              <div className="OrderReadyRight">
                <div className="ORRightName">
                  <button className="stateRight"><b>準備出發</b></button>
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
                    <button className="stateRight"><b>已取消</b></button>
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
                    <button className="stateRight"><b>已出發</b></button>
                    <h4>台灣宜蘭｜國立傳統藝術中心｜門票、畫舫船遊河券、遊程體驗遊程體驗遊程體驗</h4>
                    <span>訂單編號</span><span>#22KK250156250</span>
                  </div>
                  <div className="ORRightPrice">TWD<span>100</span></div>
                  <div className="ORRightBtn">
                    <button id="GoEvaluationBtn" onClick={() => GoEvaluation()}>前往評價</button>
                    <button>查看憑證</button>
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

// 評價
function Evaluation() {
  const evaluationX = () => {
    document.getElementById('id01').style.display = "none";
  };

  return (<div id="id01" className="modal">
    <form className="modal-content animate" method="post">
      <span onClick={() => evaluationX()} id="evaluationX" className="close" title="Close Modal">
        &times;
      </span>
      <p>桃園青埔|Xpark 都會型水生公園門票</p>
      <div className="evaluationStar">
        <div className="evaluationText"> 本次評價好感度
          <span style={{ color: "red" }}>*</span>
          <div className="star">
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
      <input type="text" style={{ width: "270px", height: "70px" }} />
      <button type="submit" className="evaluationSendBtn">送出</button>

    </form>
  </div>
  )
}

// 收藏頁面
function Collect({ itemList, imgList, setItemList }) {
  const collectDelete = () => {
    if (window.confirm("確認要從我的商品移除嗎") === true) {
      console.log('ok');
      // const newItemList = R.reject(R.propEq("itemId", itemId), itemList);
      // setItemList(newItemList);
      // fetch(`http://localhost:3000/api/item/${itemId}`, {
      //   method: "DELETE",
      // });
    }
  };
  return (
    <div id="collect" className="tabcontentB">
      <div className="setBodyB">
        <h2>我的收藏</h2>
        {itemList.map((i) => {
          // console.log(itemList); // {{},{}}
          return(
          <div className="collectDiv">
            <div className="collectImg"><img src="./images/商品暫用圖/A02.jpg" /></div>
            <div className="collectRight">
              <div className="collectName">
                <button className="collectHeart collectDelete" onClick={() => collectDelete()}><i className="fa fa-heart fa-2x"></i></button>
                <h3>{i.itemName}</h3>
                <p>
                  {i.itemNote}
                </p>
                <div className="collectNamePrice">
                  <div className="collectstar">
                    <img src="./images/1.png" />
                    <img src="./images/1.png" />
                    <img src="./images/1.png" />
                    <img src="./images/1.png" />
                    <img src="./images/1.png" />
                    <div>({i.itemTotalStar})</div>
                  </div>
                  <span>TWD<span>{i.itemPrice}</span></span>
                </div>
              </div>
            </div>
          </div>
          );

        })}

      </div>

    </div>
  )
}





export default function MemberCentre(props) {
  const [tab, setTab] = useState('information');
  const [itemList, setItemList] = useState(props.itemList);
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

      {tab === "information" && <MemberAccount {...props.memberCentre} />}
      {tab === "discount" && <Discount />}
      {tab === "rebate" && <Rebate />}
      {tab === "sevenDay" && <SevenDay />}
      {tab === "memberOrder" && <MemberOrder />}
      {tab === "collect" &&
        <Collect
          setItemList={setItemList}
          itemList={itemList}
          imgList={props.imgList} 
        />}

      <Evaluation />
    </div>
    <Footer />
    <Script src="/js/MemberCentre.js" />
  </>
}

//頁面產生出來之後從params去找出特定需要的那一頁
export async function getStaticProps({ params }) {
  // 帳號設定抓的資料 (userBirthday有問題)
  const sq1 = `SELECT userId, userPassword, userName, useGender, userPhone, userEmail FROM usertable WHERE userId = "u123456789"`;
  // const sq1 = `SELECT * FROM usertable WHERE userId = "u123456789"`;
  // const sq2 = `SELECT * FROM item`;
  // 我的收藏資料庫抓的
  const sq2 = `SELECT * FROM favorite , item WHERE favorite.itemId = item.itemId AND userId = 'u123456789';`;
  const sq3 = `SELECT * FROM itemimg`;
  // const sq4 = `SELECT * FROM favorite WHERE userId = "u123456789"`;
  // any是沒有定義的意思
  const imgList: any = [];
  const itemList: any = [];

  const memberCentre = (await runSQL(sq1))[0]; // 帳號設定抓的資料
  const itemListRaw: any = await runSQL(sq2); // 我的收藏
  const imgListRaw: any = await runSQL(sq3); // item的圖片
  // forEach是在轉格式,原本出來是database物件
  imgListRaw.forEach((item: any) => {
    item.itemImgUrl = new TextDecoder("utf-8").decode(item.itemImgUrl);
    imgList.push({ ...item });
  });
  itemListRaw.forEach((item: any) => {
    item.itemListedDate = format(item.itemListedDate, "yyyy-MM-dd");
    item.itemStartDate = format(item.itemStartDate, "yyyy-MM-dd");
    item.itemEndDate = format(item.itemEndDate, "yyyy-MM-dd");
    itemList.push({ ...item });
  });
  //把要的資料拿出來
  return {
    props: {
      // 帳號設定抓的資料
      memberCentre: { ...memberCentre },
      imgList,
      itemList,
    },
  };
}
