import { useEffect, useState } from 'react';

// 旅客資料 成功
export default function Travelman(itemList) {
    let getAllItem = [];
    const [getItem, setGetItem] = useState([])
    useEffect(() => {
        let shopList = JSON.parse(window.localStorage.getItem("sureshopcar"));
        for (const key in shopList) {
            itemList.itemList.forEach(element => {
                if (shopList[key].itemId == element.itemId) {
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
                }
            });
        }
    }, [])
    return (
        <section className="travelman">
            <div className="cartsidebar">
                <div className="cartsidebar__inner">
                    <button className="cartaccordion">
                        <h3>
                            <img className="shopimg" src="./images/flower.png" />
                            旅客資料</h3>
                        <hr />
                    </button>
                    <div className="cartpanel">
                        {getItem.map((i, key) =>
                            <div className="carthomeProduct" key={key}>
                                {/* <!-- 圖片框 --> */}
                                <div className="cartpicPlace">
                                    <img className="cartproPic" src={i.itemImgUrl} alt="" />
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
                                            新竹市
                                        </div>
                                        <div>
                                            活動日期 ：2022-12-07
                                            {/* {i.date} */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )}
                        {/* 迴圈結束 */}
                        <h4>特殊需求備註</h4>
                        <div>
                            <textarea placeholder="此欄位僅限資料備註，不保證提供"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}