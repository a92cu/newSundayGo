import { format } from "date-fns";
import { runSQL } from "../../../../lib/mysql";
import Router from "next/router";
import { useState } from "react";
import useFile from "../../../../hook/useFile";

export default function UpdateItemPage(props) {
  const {
    itemId,
    firmId,
    itemListedDate,
    itemPeriod,
    //itemInvent,
    itemTotalStar,
    itemFilter1,
    itemFilter3,
    itemFilter4,
    imgList,
    // itemSales,
  } = props;
  const { image1Url, image2Url, image3Url, changeHandler } = useFile();
  const [itemTitle, setItemTitle] = useState(props.itemTitle);
  const [itemPrice, setItemPrice] = useState(props.itemPrice);
  const [itemFilter2, setItemFilter2] = useState(props.itemFilter2);
  const [itemLocation, setItemLocation] = useState(props.itemLocation);
  const [itemInfo, setItemInfo] = useState(props.itemInfo);
  const [itemName, setItemName] = useState(props.itemName);
  const [itemAddr, setItemAddr] = useState(props.itemAddr);
  const [itemTraffic, setItemTraffic] = useState(props.itemTraffic);
  const [itemNote, setItemNote] = useState(props.itemNote);
  const [itemStartDate, setItemStartDate] = useState(props.itemStartDate);
  const [itemEndDate, setItemEndDate] = useState(props.itemEndDate);
  const [itemSales, setItemSales] = useState(props.itemSales);
  const [itemInvent, setItemInvent,] = useState(props.itemInvent);

  const getUrl = (index, originUrl) => {
    if (index === 0) return image1Url === null ? originUrl : image1Url;
    if (index === 1) return image2Url === null ? originUrl : image2Url;
    if (index === 2) return image3Url === null ? originUrl : image3Url;
  };
  const updateItem = () => {
    if (window.confirm("請確認是否要修改商品") === true) {
      if (image1Url) {
        fetch(`http://localhost:3000/api/itemimg/${imgList[0].imgId}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            itemImgUrl: image1Url,
          }),
        });
      }
      if (image2Url) {
        fetch(`http://localhost:3000/api/itemimg/${imgList[1].imgId}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            itemImgUrl: image2Url,
          }),
        });
      }
      if (image3Url) {
        fetch(`http://localhost:3000/api/itemimg/${imgList[2].imgId}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            itemImgUrl: image3Url,
          }),
        });
      }
      fetch(`http://localhost:3000/api/item/${props.itemId}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          itemFilter2,
          itemTitle,
          itemPrice,
          itemTotalStar,
          itemLocation,
          itemInfo,
          itemName,
          itemAddr,
          itemTraffic,
          itemNote,
          itemStartDate,
          itemEndDate,
          itemSales,
          itemInvent,
        }),
      });
      Router.replace("/company");
    }
  };
  return (
    <div
      style={{
        border: "1px solid black",
        width: 1280,
        margin: "0 auto",
        padding: "0 10px",
      }}
    >
      <div>
        <h1>廠商編輯商品頁面</h1>
      </div>
      <div className="container">
        {imgList.map((i, index) => (
          <div>
            {/* <button>刪除</button> */}
            <img className="itemImg" src={getUrl(index, i.itemImgUrl)} alt="" />
            <br />
            <input
              type="file"
              onChange={(e) => changeHandler(index, e)}
              // onChange={(e) => setImage(index, i.imgId, e.target.files)}
            />
          </div>
        ))}
      </div>
      <div className="companyContent">
        <div className="container">
          <form action="javascript:void(0)">
            <label>商品標題:</label>
            <input
              type="text"
              value={itemTitle}
              onChange={(e) => setItemTitle(e.target.value)}
            />
            <br />
            <label>商品地區:</label>
            <input
              type="text"
              value={itemFilter2}
              onChange={(e) => setItemFilter2(e.target.value)}
            />
            <br />
            <label>商品金額:</label>
            <input
              type="number"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
            />
            <br />
            <label>銷售數量:</label>
            <input
              type="text"
              value={itemSales}
              onChange={(e) => setItemSales(e.target.value)}
            />
            <br />
            <label>庫存數量:</label>
            <input
              type="text"
              value={itemInvent}
              onChange={(e) => setItemInvent(e.target.value)}
            />
            <br />
            <label>商品說明:</label>
            <input
              type="text"
              style={{ height: 100, whiteSpace: "pre-line" }}
              value={itemInfo}
              onChange={(e) => setItemInfo(e.target.value)}
            />
            <br />
            <label>商品名稱:</label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <br />
            <label>銷售期間:</label>
            &nbsp;
            <span>
              起始:&nbsp;
              <input
                type="date"
                value={itemStartDate}
                onChange={(e) => setItemStartDate(e.target.value)}
              />
            </span>
            &nbsp;
            <span>
              截止:&nbsp;
              <input
                type="date"
                value={itemEndDate}
                onChange={(e) => setItemEndDate(e.target.value)}
              />
            </span>
            <br />
            <br />
            <label>使用地點:</label>
            <input
              type="text"
              value={itemAddr}
              onChange={(e) => setItemAddr(e.target.value)}
            />
            <br />
            <label>使用地址:</label>
            <input
              type="text"
              value={itemLocation}
              onChange={(e) => setItemLocation(e.target.value)}
            />
            <br />
            <label>如何抵達:</label>
            <input
              type="text"
              style={{ height: 100 }}
              value={itemTraffic}
              onChange={(e) => setItemTraffic(e.target.value)}
            />
            <br />
            <label>注意事項:</label>
            <input
              type="text"
              style={{ height: 100 }}
              value={itemNote}
              onChange={(e) => setItemNote(e.target.value)}
            />
            <br />
            <input
              type="submit"
              value="確認修改"
              onClick={() => updateItem()}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths(props) {
  const sq1 = "SELECT * FROM item";
  const data: any = await runSQL(sq1);
  const paths = data.map((item) => ({
    params: { id: `${item.itemId}` },
  }));
  return {
    paths,
    fallback: false,
  };
}
//頁面產生出來之後從params去找出特定需要的那一頁
export async function getStaticProps({ params }) {
  const id = params.id;
  const imgList: any = [];
  const sq1 = `SELECT * FROM item WHERE itemId = "${params.id}"`;
  const sq3 = `SELECT * FROM itemimg WHERE itemId = "${params.id}"`;
  const data = (await runSQL(sq1))[0];
  const imgListRaw: any = await runSQL(sq3);
  //forEach是在轉格式,原本出來是database物件
  imgListRaw.forEach((item: any) => {
    item.itemImgUrl = new TextDecoder("utf-8").decode(item.itemImgUrl);
    imgList.push({ ...item });
  });
  data.itemListedDate = format(data.itemListedDate, "yyyy-MM-dd");
  data.itemStartDate = format(data.itemStartDate, "yyyy-MM-dd");
  data.itemEndDate = format(data.itemEndDate, "yyyy-MM-dd");

  return {
    props: {
      ...data,
      imgList,
    },
  };
}
