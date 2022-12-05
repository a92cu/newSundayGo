import Image from "next/image";
import { useState,useEffect } from 'react';
import { runSQL } from "../../lib/mysql";
import { format, parseISO } from "date-fns";
import * as R from "ramda";
import Router, { useRouter } from 'next/router'
import ReactStars from 'react-stars'
import axios from "axios";

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
// 帳號設定修改 OK 性別暫時PASS 
function MemberAccount(props) {
  const { accountList } = props;
  const [userName, setuserName] = useState(props.accountList[0].userName);
  const [userBirthday, setuserBirthday] = useState(props.accountList[0].userBirthday);
  const [userPhone, setuserPhone] = useState(props.accountList[0].userPhone);
  const [userEmail, setuserEmail] = useState(props.accountList[0].userEmail);
  const [userPassword, setuserPassword] = useState(props.accountList[0].userPassword);

  const showPassword = () => {
    var x = document.getElementById("showPasswordInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  const saveAccount = () => {
    // console.log(accountList) // [{...}]
    // console.log(accountList[0]) // {}
    // console.log(userBirthday) // 
    fetch(`http://localhost:3000/api/memberCentre/accountPut`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        userName: userName,
        userBirthday: userBirthday,
        userPhone: userPhone,
        userEmail: userEmail,
        userPassword: userPassword,
      }),
    });
    // location.reload();
    // Router.replace('/memberCenter') ;
    window.location.replace('/memberCenter');

  }
  return (<div id="information" className="tabcontentB">
    <h2>帳號設定 </h2>
    <div className="setBodyB">
      <span style={{ color: "#8C5C02" }}> <b>基本資料</b> </span>
      <br /><br />
      <div className="basic">
        <span>姓名<b>*</b> </span>
        <input type="text"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />
      </div>
      <div className="basic">
        <span>性別</span>
        <select name="" id="">
          <option value="man">{accountList[0].useGender}</option>
          <option value="girl">女生</option>
          <option value="sec">保密</option>
        </select>
      </div>
      <br />
      <div className="basic">
        <span>出生日期</span>
        <input
          type="date"
          value={userBirthday}
          onChange={(e) => setuserBirthday(e.target.value)}
        />
      </div>
      <br />
      <div className="basic">
        <span>電話號碼<b>*</b></span>
        <input type="tel"
          value={userPhone}
          onChange={(e) => setuserPhone(e.target.value)}
        />
      </div>
      <br />
      <div className="basic">
        <span>連絡信箱<b>*</b></span>
        <input type="email"
          value={userEmail}
          onChange={(e) => setuserEmail(e.target.value)}
        />
      </div>
      <br />
      <div className="basic">
        <span>密碼<b>*</b></span>
        &emsp;&emsp;&emsp;&emsp;&emsp;
        <input
          id="showPasswordInput"
          type="password"
          value={userPassword}
          onChange={(e) => setuserPassword(e.target.value)}
        />
        <input
          style={{ 
            width: "15px" ,
            verticalAlign: "Middle",
            outline:"none"
          }}
          type="checkbox"
          onClick={() => showPassword()} />顯示密碼


      </div>
      <div className="basicBtn">
        <button className="informationBtn" onClick={() => saveAccount()}> <b>儲存</b> </button>
      </div>
    </div>
  </div>
  );
}
// 折扣券 OK 但可能有bug(要在測試)
function Discount(props) {
  // console.log(props.discountList);
  const theDate=format(new Date(),"yyyy-MM-dd");
  console.log(Math.abs(Date.parse(props.discountList[0].couponStartTime)-Date.parse(theDate))/ (1000 * 60 * 60 * 24))
  return (
  <div id="discount" className="tabcontentB">
    <h2>折扣券</h2>
    <div className="setBodyB">
      <div className="discountBtn" style={{ width: "100%" }}>
        <div id="discountUse" className="discountBody">
          {props.discountList.map((ele:any,idx:number)=>{
              return(
                <div className={(ele.couponUse>0? "discountDivUsed":"discountDiv")}key={idx}>
                  <span>{ele.couponName}</span> <br />
                  <span>訂單金額須滿100元</span> <br />
                  <span>有效期限: 剩餘{Math.abs(Date.parse(ele.couponStartTime)-Date.parse(theDate))/ (1000 * 60 * 60 * 24)}天</span> <br />
                </div>
              )
          })}
        </div>
      </div>
    </div>
  </div>
  );
}

// 回饋金 OK 可以正常運作
function Rebate(props) {
  console.log(props.orderListRebate)
  let allRebate=[];
  props.orderListRebate.forEach((e,i)=>{
  if(props.orderListRebate[i].userId=="u123456789"){
    let itemTitle=props.orderListRebate[i].itemTitle;
    let orderDate=props.orderListRebate[i].orderDate;
    let orderRebate=props.orderListRebate[i].orderRebate;
    allRebate.push({itemTitle,orderDate,orderRebate})
    }
  })
  // 計算回饋金加總
  let total=0;
  allRebate.forEach((e)=>{
    total+=e.orderRebate;
  })
  return (
    <div id="rebate" className="tabcontentB">
      <h2 className="rebateH2">回饋金</h2>
      <div style={{ textAlign: "center" }}>
        <img src="./images/p.png" style={{ width: "30px", verticalAlign: "middle" }} />&emsp;{total}
        <br />
        <br />
      </div>
      <div className="setBodyB">
        <div className="rebateBtn" style={{ width: "100%" }}>
          <div id="rebateUse" className="rebateBody">
            <table className="rebateGetTable">
              <tbody>
                {allRebate.map((e,i)=>{
                  return(
                  <tr className={(e.orderRebate>0)?"rebateGetTr":"rebateUsedTr"} key={i}>
                    <td>{e.itemTitle}</td>
                    <td>{e.orderDate}</td>
                    <td><img src="./images/p.png" style={{ width: "20px", verticalAlign: "middle" }} /> &ensp;{e.orderRebate}
                    </td>
                  </tr>
               )})}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}

// 七天簽到 OK 有bug尚未解決(當天註冊的會員會點到兩張)
function SevenDay() {
  let gotdate:Date;
  async function checkTime(e){
    let thisDate=new Date()
    let thisDate_ts=thisDate.getTime()
  let gotdate;
  async function checkTime() {
    let thisDate = format(new Date(), "yyyy-MM-dd");
    // console.log(thisDate)
    await axios.get("/api/memberCentre/taketime")
          .then((res)=>{
            let datedata=res.data.data[0].userLoginEventTime;
            console.log(datedata)
            gotdate=format(parseISO(datedata),"yyyy-MM-dd")
          })
    console.log(gotdate)
    if(thisDate>gotdate){
      console.log('thiDate farrrrr')
      axios.put(`/api/memberCentre/taketime`);
    }else{
      alert("尚未滿足條件")
    }
    e.target.style.filter="brightness(50%)"
  }
  return (
    <div id="sevenDay" className="tabcontentB">
      <h2>登入七天簽到活動</h2>
      <br />
      <div className="setBodyB">
        <div className="dayOneSeven">
          <img className="ImgPick" src="./images/day7/day1.png" alt="折扣券" onClick={checkTime}/>
          <img className="ImgPick" src="./images/day7/day2.png" alt="折扣券" />
          <img className="ImgPick" src="./images/day7/day3.png" alt="折扣券" />
          <img className="ImgPick" src="./images/day7/day4.png" alt="折扣券" />
        </div>
        <div className="dayOneSeven">
          <img className="ImgPick" src="./images/day7/day5.png" alt="折扣券" />
          <img className="ImgPick" src="./images/day7/day6.png" alt="折扣券" />
          <img className="ImgPick" src="./images/day7/day7.png" alt="折扣券" />
        </div>
      </div>

    </div>
  )
}

//訂單管理 OK
function MemberOrder(orderList, imgList) {
  // const GoEvaluation = () => {
  //   // alert('ok');
  //   document.getElementById('id01').style.display = "block";
  //   // console.log(orderList);//[{orderList} {imgList}]
  //   // console.log(orderList.orderList);//[{}{}]
  // }
  const router = useRouter()
  return (
    <div id="memberOrder" className="tabcontentB">
      <div className="setBodyB">
        <h2 className="memberOrderH2">訂單管理</h2>
        <div className="memberOrderBtn" style={{ width: "100% " }}>
          <div id="memberOrderReady" className="memberOrderBody">
            {/* 準備出發 */}
            {orderList.orderList.map((i) => {
              // console.log(i); //{}
              if (i.orderDeter === 1) {
                return (
                  <div className="OrderReadyDiv" key={i.itemId}>
                    <div className="OrderReadyImg">
                      <img src={
                        orderList.imgList?.find(
                          (j) => j.itemId === i.itemId && j.itemLead == 1
                        )?.itemImgUrl ?? ''
                      } />
                    </div>
                    <div className="OrderReadyRight">
                      <div className="ORRightName">
                        <button className="stateRight"><b>準備出發</b></button>
                        <h4>{i.itemTitle}</h4>
                        <span>訂單編號</span><span>#{i.orderReceipt}</span>
                      </div>
                      <div className="ORRightPrice">TWD<span>{i.itemPrice}</span></div>
                      <div className="ORRightBtn">
                        <button > <a href={`/receipt/${i.orderNumber}`} target="_blank">查看憑證</a> </button>
                      </div>
                    </div>
                  </div>
                )
              }
              {/* 已出發 */ }
              if (i.orderDeter === 2 && i.orderStar === 0) {
                return (
                  <div id="memberOrderGo" className="memberOrderBody" key={i.itemId}>
                    <div className="OrderReadyDiv">
                      <div className="OrderReadyImg">
                        <img src={
                          orderList.imgList?.find(
                            (j) => j.itemId === i.itemId && j.itemLead == 1
                          )?.itemImgUrl ?? ''
                        } />
                      </div>
                      <div className="OrderReadyRight">
                        <div className="ORRightName">
                          <button className="stateRight"><b>已出發</b></button>
                          <h4>{i.itemTitle}</h4>
                          <span>訂單編號</span><span>#{i.orderReceipt}</span>
                        </div>
                        <div className="ORRightPrice">TWD<span>{i.itemPrice}</span></div>
                        <div className="ORRightBtn">
                          {/* onClick={() => GoEvaluation()} */}
                          <button onClick={() => router.push(`/evaluation/${i.orderNumber}`)} id="GoEvaluationBtn" >前往評價</button>
                          <button><a href={`/receipt/${i.orderNumber}`} target="_blank">查看憑證</a></button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
              if (i.orderDeter === 2 && i.orderStar > 0) {
                return (
                  <div id="memberOrderGo" className="memberOrderBody" key={i.itemId}>
                    <div className="OrderReadyDiv">
                      <div className="OrderReadyImg">
                        <img src={
                          orderList.imgList?.find(
                            (j) => j.itemId === i.itemId && j.itemLead == 1
                          )?.itemImgUrl ?? ''
                        } />
                      </div>
                      <div className="OrderReadyRight">
                        <div className="ORRightName">
                          <button className="stateRight"><b>已出發</b></button>
                          <h4>{i.itemTitle}</h4>
                          <span>訂單編號</span><span>#{i.orderReceipt}</span>
                        </div>
                        <div className="ORRightPrice">TWD<span>{i.itemPrice}</span></div>
                        <div className="ORRightBtn">
                          <button id="GoEvaluationBtn" style={{ backgroundColor: "#DCDCDC" }}>已評價</button>
                          <button><a href={`/receipt/${i.orderNumber}`} target="_blank">查看憑證</a></button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>

    </div>

  );
}

// 收藏頁面 OK
function Collect({ itemList, imgList, setItemList }) {
  const router = useRouter()
  const collectDelete = (favId) => {
    console.log(favId);
    if (window.confirm("確認要從我的商品移除嗎") === true) {
      console.log('ok');
      const newItemList = R.reject(R.propEq("favId", favId), itemList);
      setItemList(newItemList);
      console.log(newItemList); // {{},{}}
      fetch(`http://localhost:3000/api/memberCentre/collectDel`, {
        method: "DELETE",
        body: favId

      });
    }
  };
  return (
    <div id="collect" className="tabcontentB">
      <div className="setBodyB">
        <h2>我的收藏</h2>
        {itemList.map((i) => {
          // console.log(itemList); // [{},{}]
          // console.log(imgList); //[{}{}]
          // console.log(i); // {}
          const star = (i.itemTotalStar)
          return (
            // onClick={() => router.push(`/item/${i.itemId}`)}
            <div className="collectDiv" key={i.favId}>
              <div className="collectImg">
                <img src={
                  imgList?.find(
                    (j) => j.itemId === i.itemId && j.itemLead == 1
                  )?.itemImgUrl ?? ''
                } /></div>
              <div className="collectRight">
                <div className="collectName">
                  <button className="collectHeart collectDelete" onClick={() => collectDelete(i.favId)}><i className="fa fa-heart fa-2x"></i></button>
                  <h3>{i.itemName}</h3>
                  <p>
                    {i.itemNote}
                  </p>
                  <div className="collectNamePrice">
                    <div className="collectstar">
                      <ReactStars
                        Rating
                        value={`${star}`}
                        edit={false} />
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
  const [userName, setuserName] = useState(props.accountList[0].userName);
  const [accountList, setaccountList] = useState(props.accountList);
  const [itemList, setItemList] = useState(props.itemList);
  const [orderList, setOrderList] = useState(props.orderList);
  const [discountList,setDiscountList]=useState(props.discountList)
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
          <p>{userName}</p>
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

      {/* {tab === "information" && <MemberAccount {...props.memberCentre} />} */}
      {tab === "information" &&
        <MemberAccount
          accountList={accountList}
        />}
      {tab === "discount" && 
        <Discount orderList
        discountList={discountList}
        />}
      {tab === "rebate" && 
      <Rebate 
        orderListRebate={orderList}
        />}
      {tab === "sevenDay" && <SevenDay />}
      {tab === "memberOrder" &&
        <MemberOrder
          orderList={orderList}
          imgList={props.imgList}
        />}
      {tab === "collect" &&
        <Collect
          setItemList={setItemList}
          itemList={itemList}
          imgList={props.imgList}
        />}

    </div>
    <Footer />
  </>
}


//頁面產生出來之後從params去找出特定需要的那一頁
export async function getStaticProps({ params }) {
  // 帳號設定抓的資料 (userBirthday有問題)
  // const sq1 = `SELECT userId, userPassword, userName, useGender, userPhone, userEmail FROM usertable WHERE userId = "u123456789"`;
  const sq1 = `SELECT * FROM usertable WHERE userId = "u123456789"`;
  // 我的收藏資料庫抓的
  const sq2 = `SELECT * FROM favorite , item WHERE favorite.itemId = item.itemId AND userId = 'u123456789';`;
  const sq3 = `SELECT * FROM itemimg`;
  const sq4 = `SELECT item.itemId , userId, orderNumber, orderReceipt,orderReview, orderStar, orderDate, orderQua, orderRebate , orderDeter , itemTitle, itemPrice FROM ordertable LEFT JOIN item ON ordertable.itemId=item.itemId;`;
  const sq5 = `SELECT  * FROM discountcoupon WHERE userId = "u123456789"`;
  // any是沒有定義的意思
  const accountList: any = []; // 帳號
  const imgList: any = [];   // 圖片
  const itemList: any = [];  // 收藏
  const orderList: any = []; // 訂單
  const discountList: any =[]; // 折扣券

  // const memberCentre = (await runSQL(sq1))[0]; // 帳號設定抓的資料  
  const accountListRaw: any = await runSQL(sq1); // 帳號設定
  const itemListRaw: any = await runSQL(sq2); // 我的收藏
  const imgListRaw: any = await runSQL(sq3); // item的圖片
  const orderListRaw: any = await runSQL(sq4); // 訂單管理抓的資料
  const discountListRaw: any= await runSQL(sq5); // 折扣券資料
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
  orderListRaw.forEach((ordertable: any) => {
    ordertable.orderDate = format(ordertable.orderDate, "yyyy-MM-dd");
    orderList.push({ ...ordertable });
  });
  accountListRaw.forEach((usertable: any) => {
    usertable.userBirthday = format(usertable.userBirthday, "yyyy-MM-dd");
    usertable.userRegisterDate = format(usertable.userRegisterDate, "yyyy-MM-dd");
    usertable.userLoginEventTime=format(usertable.userLoginEventTime,	"yyyy-MM-dd");
    accountList.push({ ...usertable });
  });
  discountListRaw.forEach((discounttable: any) => {
    discounttable.couponStartTime = format(discounttable.couponStartTime,"yyyy-MM-dd");
    discountList.push({...discounttable})
  });
  //把要的資料拿出來
  return {
    props: {
      // 帳號設定抓的資料
      // memberCentre: { ...memberCentre },
      accountList,
      imgList,
      itemList,
      orderList,
      discountList,
    },
  };
}
