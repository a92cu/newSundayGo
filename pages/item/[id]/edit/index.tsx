import { format } from "date-fns";
import { runSQL } from "../../../../lib/mysql";
import Router from "next/router";
import { useEffect, useState } from "react";
import useFile from "../../../../hook/useFile";

export default function UpdateItemPage(props) {

  const { image1Url, image2Url, image3Url, changeHandler } = useFile();
  const [imgList, setImgList] = useState([]);
  const [itemTitle, setItemTitle] = useState('');
  const [itemPrice, setItemPrice] = useState(0);
  const [itemFilter2, setItemFilter2] = useState('');
  const [itemLocation, setItemLocation] = useState('');
  const [itemInfo, setItemInfo] = useState('');
  const [itemName, setItemName] = useState('');
  const [itemAddr, setItemAddr] = useState('');
  const [itemTraffic, setItemTraffic] = useState('');
  const [itemNote, setItemNote] = useState('');
  const [itemStartDate, setItemStartDate] = useState('');
  const [itemEndDate, setItemEndDate] = useState('');
  const [itemSales, setItemSales] = useState(0);
  const [itemInvent, setItemInvent,] = useState('');

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
      fetch(`http://localhost:3000/api/item/${props.id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          itemFilter2,
          itemTitle,
          itemPrice,
          itemTotalStar: 0,
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

  useEffect(() => {
    const initData = async () => {
      const id = props.id;
      const { data: imgListRaw } = await fetch(`/api/itemimg/${id}`).then((i) =>
        i.json()
      );
      const { data: data } = await fetch(`/api/item/${id}`).then((i) =>
        i.json()
      );
      //下面是在轉日期格式
      data.itemListedDate = format(new Date(data.itemListedDate), "yyyy-MM-dd");
      data.itemStartDate = format(new Date(data.itemStartDate), "yyyy-MM-dd");
      data.itemEndDate = format(new Date(data.itemEndDate), "yyyy-MM-dd");
      setImgList(imgListRaw);
      setItemTitle(data.itemTitle);
      setItemPrice(data.itemPrice);
      setItemFilter2(data.itemFilter2);
      setItemLocation(data.itemLocation);
      setItemInfo(data.itemInfo);
      setItemName(data.itemName);
      setItemAddr(data.itemAddr);
      setItemTraffic(data.itemTraffic);
      setItemNote(data.itemNote);
      setItemStartDate(data.itemStartDate);
      setItemEndDate(data.itemEndDate);
      setItemSales(data.itemSales);
      setItemInvent(data.itemInvent)
    }
    initData();
  }, [])
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
              onChange={(e) => setItemPrice(Number(e.target.value))}
            />
            <br />
            <label>銷售數量:</label>
            <input
              type="text"
              value={itemSales}
              onChange={(e) => setItemSales(Number(e.target.value))}
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
  return {
    props: {
      id: params.id
    },
  };
}
