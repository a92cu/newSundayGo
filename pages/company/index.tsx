import { useState } from "react";
import { runSQL } from "../../lib/mysql";
import { format } from "date-fns";
import * as R from "ramda";

function MemberOrder({ itemList, imgList, setItemList }) {
  const deleteItem = (itemId) => {
    if (window.confirm("請確認你要刪除項目") === true) {
      const newItemList = R.reject(R.propEq("itemId", itemId), itemList);
      setItemList(newItemList);
      fetch(`http://localhost:3000/api/item/${itemId}`, {
        method: "DELETE",
      });
    }
  };
  return (
    <div id="memberOrder" className="tabcontent">
      <div className="setBody">
        <h2 className="memberOrderH2">訂單管理</h2>
        <a href="/companyUpItem" className="addCommodity">
          +上架新商品
        </a>
        <br />
        <div className="memberOrderBtn" style={{ width: "100%" }}>
          <table className="companyTb">
            <tbody>
              {itemList.map((i) => {
                return (
                  <tr>
                    <td>
                      <div className="OrderReadyImg">
                        <img
                          src={
                            imgList.find(
                              (j) => j.itemId === i.itemId && j.itemLead == 1
                            ).itemImgUrl
                          }
                        />
                      </div>
                    </td>
                    <td>{i.itemName}</td>
                    <td>{i.itemPrice}</td>
                    <td>
                      <p>
                        庫存 <span>{i.itemInvent}</span>
                      </p>
                      <p>
                        銷售數 <span>{i.itemSales}</span>
                      </p>
                      <p>
                        上架時間 <br />
                        <span>{i.itemPeriod}</span>
                      </p>
                    </td>
                    <td>
                      <button>
                        <a href="/companyEdit">編輯</a>
                      </button>{" "}
                      <br />
                      <button >
                        <a href="#" onClick={() => deleteItem(i.itemId)}>刪除</a>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
function Account({
  firmName,
  taxId,
  firmHeadName,
  firmPhone,
  firmLocation,
  firmEmail,
  firmPassword,
}) {
  return (
    <div id="information" className="tabcontent">
      <h2>帳號設定 </h2>
      <div className="setBody">
        <span style={{ color: "#8C5C02" }}>
          {" "}
          <b>基本資料</b>{" "}
        </span>
        <br />
        <br />
        <div className="basic">
          <span>公司名稱</span>
          <input type="text" value={firmName} />
        </div>
        <div className="basic">
          <span>統一編號</span>
          <input type="text" value={taxId} />
        </div>
        <div className="basic">
          <span>負責人</span>
          <input type="text" value={firmHeadName} />
        </div>
        <div className="basic">
          <span>
            公司聯絡號碼<b>*</b>
          </span>
          <input type="tel" value={firmPhone} />
        </div>
        <div className="basic">
          <span>
            公司所在地<b>*</b>
          </span>
          <input type="text" value={firmLocation} />
        </div>
        <div className="basic">
          <span>
            公司E-mail<b>*</b>
          </span>
          <input type="email" value={firmEmail} />
        </div>
        <div className="basic">
          <span>
            密碼<b>*</b>
          </span>
          <input type="password" value={firmPassword} />
        </div>
      </div>
      <div className="basicBtn">
        <button className="informationBtn">
          {" "}
          <b>儲存</b>{" "}
        </button>
      </div>
    </div>
  );
}
export default function Company(props) {
  const [tab, setTab] = useState("account");
  const [itemList, setItemList] = useState(props.itemList);
  return (
    <>
      <div className="companyName">
        <span>{props.firmName}</span> &nbsp;<span>您好！</span>
      </div>
      <div className="MemberCentre">
        <div className="tab">
          <div className="tabBtn">
            <button
              className="tablinks"
              onClick={() => setTab("account")}
              id="defaultOpen"
            >
              <span>
                <img
                  src="./images/flower.png"
                  style={{ width: 30, verticalAlign: "middle" }}
                />
                &nbsp;帳號設定
              </span>
            </button>
            <button className="tablinks" onClick={() => setTab("memberOrder")}>
              <span>
                <img
                  src="./images/flower.png"
                  style={{ width: 30, verticalAlign: "middle" }}
                />
                &nbsp; 訂單管理
              </span>
            </button>
          </div>
        </div>
        {tab === "account" && <Account {...props.company} />}
        {tab === "memberOrder" && (
          <MemberOrder
            setItemList={setItemList}
            itemList={itemList}
            imgList={props.imgList}
          />
        )}
      </div>
    </>
  );
}
//頁面產生出來之後從params去找出特定需要的那一頁
export async function getStaticProps({ params }) {
  const sq1 = `SELECT * FROM firm WHERE firmId = "firm001"`;
  const sq2 = `SELECT * FROM item`;
  const sq3 = `SELECT * FROM itemimg`;
  // any是沒有定義的意思
  const imgList: any = [];
  const itemList: any = [];

  const company = (await runSQL(sq1))[0];
  const itemListRaw: any = await runSQL(sq2);
  const imgListRaw: any = await runSQL(sq3);
  //forEach是在轉格式,原本出來是database物件
  imgListRaw.forEach((item: any) => {
    imgList.push({ ...item });
  });
  itemListRaw.forEach((item: any) => {
    item.itemListedDate = format(item.itemListedDate, "yyyy-MM-dd");
    itemList.push({ ...item });
  });
  //把要的資料拿出來
  return {
    props: {
      company: { ...company },
      imgList,
      itemList,
    },
  };
}
