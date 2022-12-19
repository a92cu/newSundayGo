import { useEffect, useState } from "react";
import Paybill from "./Paybill";


// 付款資訊
export default function Billtotal(itemList) {
    let getAllItem = [];
    const [getItem, setGetItem] = useState([])
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let takeTotal = 0;
        let shopList = JSON.parse(window.localStorage.getItem("sureshopcar"));
        for (const key in shopList) {
            itemList.itemList.forEach(element => {
                if (shopList[key].itemId == element.itemId) {
                    // 秀出商品
                    let getOneItem = {
                        itemId: element.itemId,
                        itemPrice: element.itemPrice,
                        itemTitle: element.itemTitle,
                        itemImgUrl: element.itemImgUrl,
                        count: shopList[key].count,
                        date: shopList[key].date
                    }
                    getAllItem.push(getOneItem);
                    setGetItem(getAllItem);
                    // 計算金額
                    takeTotal += element.itemPrice * shopList[key].count;
                    setTotal(takeTotal);
                }
            });
        }
    }, [])
    return (
        <section className="billtotal">
            <div className="cartsidebar">
                <div className="cartsidebar__inner">
                    <button className="cartaccordion">
                        <h3>
                            <img className="shopimg" src="./images/flower.png" />
                            付款明細</h3>
                        <hr />
                    </button>
                    <div className="cartpanel">
                        <div className="billtotalleft">
                            {getItem.map((i, key) =>
                                <div className="carthomeProduct" key={key}>
                                    {/* <!-- 圖片框 --> */}
                                    <div className="cartpicPlace">
                                        <img className="cartproPic" src={i.itemImgUrl} alt="IMG" />
                                    </div>
                                    {/* <!-- 介紹欄 --> */}
                                    <div className="cartinco">
                                        <h3>
                                            <p>
                                                {i.itemTitle}
                                            </p>
                                        </h3>
                                        {/* <!-- 地區標籤 --> */}
                                        <div>
                                            <div className="carttagplace">
                                                {i.itemFilter2}
                                            </div>
                                            <div className="carttagplace2">
                                                活動日期 ：{i.date}
                                                <br />
                                                <span>人數 : 1人</span>

                                            </div>
                                            <div className="carttagplace3">
                                                商品數量:{i.count}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* 商品迴圈結束 */}
                        <div className="billtotalright">
                            <span className="carthrline paymoney3">總金額  </span>
                            {/* {itemList.itemList.map((i) => */}

                            <span className="paybill1"><span>TWD</span>&nbsp;&nbsp;{total}</span>
                            {/* )} */}
                            <hr />
                            <span className="carthrline paymoney2">點數折抵</span>
 
                            <span className="billcount "> <span>TWD</span> 0</span>
                            <hr />
                            <span className="carthrline paymoney">支付金額</span>

                            <span className="paybill2"><span>TWD</span>&nbsp;&nbsp;&nbsp;{total}</span>
                            <hr />
                            <Paybill />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}