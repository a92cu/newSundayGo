import { format } from "date-fns";
import { runSQL } from "../../../../lib/mysql";
import { useState, useEffect } from "react";
import useFile from "../../../../hook/useFile";
export default function UpdateItemPage(props) {
  const {
    itemId,
    firmId,
    itemListedDate,
    itemPeriod,
    itemSales,
    itemInvent,
    itemTotalStar,
    itemFilter1,
    itemFilter2,
    itemFilter3,
    itemFilter4,
    imgList,
  } = props;
  const { image1Url, image2Url, image3Url, changeHandler } = useFile();
  const [itemTitle, setItemTitle] = useState(props.itemTitle);
  const [itemPrice, setItemPrice] = useState(props.itemPrice);
  const [itemLocation, setItemLocation] = useState(props.itemLocation);
  const [itemInfo, setItemInfo] = useState(props.itemInfo);
  const [itemName, setItemName] = useState(props.itemName);
  const [itemAddr, setItemAddr] = useState(props.itemAddr);
  const [itemTraffic, setItemTraffic] = useState(props.itemTraffic);
  const [itemNote, setItemNote] = useState(props.itemNote);
  const [itemStartDate, setItemStartDate] = useState(props.itemStartDate);
  const [itemEndDate, setItemEndDate] = useState(props.itemEndDate);

  const getUrl = (index, originUrl) => {
    if (index === 0) return image1Url === null ? originUrl : image1Url;
    if (index === 1) return image2Url === null ? originUrl : image2Url;
    if (index === 2) return image3Url === null ? originUrl : image3Url;
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
        <h1>廠商上傳商品頁面</h1>
      </div>
      <div className="container">
        {imgList.map((i, index) => (
          <div>
            <button>刪除</button>
            <img className="itemImg" src={getUrl(index, i.itemImgUrl)} alt="" />
            <br />
            <input
              type="file"
              onChange={(e) => changeHandler(index, i.imgId, e)}
              // onChange={(e) => setImage(index, i.imgId, e.target.files)}
            />
          </div>
        ))}
      </div>
      <div className="content">
        <div className="container">
          <form action="">
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
              value={itemLocation}
              onChange={(e) => setItemLocation(e.target.value)}
            />
            <br />
            <label>商品金額:</label>
            <input
              type="number"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
            />
            <br />
            <label>商品說明:</label>
            <input
              type="text"
              style={{ height: 200, whiteSpace: "pre-line" }}
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
              style={{ height: 200 }}
              value={itemTraffic}
              onChange={(e) => setItemTraffic(e.target.value)}
            />
            <br />
            <label>注意事項:</label>
            <input
              type="text"
              style={{ height: 500 }}
              value={itemNote}
              onChange={(e) => setItemNote(e.target.value)}
            />
            <br />
            <input type="submit" value="確認上傳"  />
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
  console.log(params);
  const sq1 = `SELECT * FROM item WHERE itemId = ${params.id}`;
  const sq3 = `SELECT * FROM itemimg WHERE itemId = ${params.id}`;
  const data = (await runSQL(sq1))[0];
  const imgListRaw: any = await runSQL(sq3);
  //forEach是在轉格式,原本出來是database物件
  imgListRaw.forEach((item: any) => {
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
