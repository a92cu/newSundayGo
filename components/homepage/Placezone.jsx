import React, { useEffect, useState } from "react";

export const Placezone = () => {
  const [homepagelist, setlist] = useState({});

  useEffect(() => {
    async function fetchData() {
      return await fetch("/api/home/homepage")
        .then((res) => res.json())
        .then((result) => setlist(result.data));
    }
    fetchData();
  }, []);
  return (
    <div style={{ width: "1280px", margin: "0 auto" }}>
      {/* <!-- 主要篩選區 --> */}
      <div className="hometop">
        {/* <!-- 左側篩選欄 --> */}
        <div id="main-content" className="main homeleft">
          <div id="sidebar" className="sidebar">
            <div className="sidebar__inner">
              篩選目的地
              <br />
              <button className="accordion">
                <input type="checkbox" className="allcheck" />
                北部
              </button>
              <div className="panel">
                <input type="checkbox" name="citys" />
                基隆市
                <br />
                <input type="checkbox" name="citys" />
                新北市
                <br />
                <input type="checkbox" name="citys" />
                台北市
                <br />
                <input type="checkbox" name="citys" />
                桃園市
              </div>
              <button className="accordion">
                <input type="checkbox" className="allcheck" />
                中部
              </button>
              <div className="panel">
                <input type="checkbox" name="citys" />
                新竹縣
                <br />
                <input type="checkbox" name="citys" />
                新竹市
                <br />
                <input type="checkbox" name="citys" />
                苗栗縣
                <br />
                <input type="checkbox" name="citys" />
                台中市
                <br />
                <input type="checkbox" name="citys" />
                雲林縣
                <br />
                <input type="checkbox" name="citys" />
                南投縣
                <br />
              </div>
              <button className="accordion">
                <input type="checkbox" className="allcheck" />
                南部
              </button>
              <div className="panel">
                <input type="checkbox" name="citys" />
                嘉義縣
                <br />
                <input type="checkbox" name="citys" />
                嘉義市
                <br />
                <input type="checkbox" name="citys" />
                台南市
                <br />
                <input type="checkbox" name="citys" />
                高雄市
                <br />
                <input type="checkbox" name="citys" />
                屏東縣
              </div>
              <button className="accordion">
                <input type="checkbox" className="allcheck" />
                東部
              </button>
              <div className="panel">
                <input type="checkbox" name="citys" />
                宜蘭縣
                <br />
                <input type="checkbox" name="citys" />
                花蓮縣
                <br />
                <input type="checkbox" name="citys" />
                台東縣
                <br />
              </div>
              <button className="accordion">
                <input type="checkbox" className="allcheck" />
                離島
              </button>
              <div className="panel">
                <input type="checkbox" name="citys" />
                澎湖
                <br />
                <input type="checkbox" name="citys" />
                金門
                <br />
                <input type="checkbox" name="citys" />
                馬祖
                <br />
                <input type="checkbox" name="citys" />
                綠島
                <br />
                <input type="checkbox" name="citys" />
                蘭嶼
              </div>
            </div>
            {/* <!-- 商品類別篩選 --> */}
            <div className="sidebar__inner2">
              商品類別篩選
              <br />
              <button className="accordion">
                <input type="checkbox" className="allcheck" />
                美食
              </button>
              <div className="panel">
                <input type="checkbox" name="citys" />
                餐廳
                <br />
                <input type="checkbox" name="citys" />
                甜點、飲料
              </div>
              <button className="accordion">
                <input type="checkbox" className="allcheck" />
                景點
              </button>
              <div className="panel">
                <input type="checkbox" name="citys" />
                觀光景點
                <br />
                <input type="checkbox" name="citys" />
                門票
              </div>
              <button className="accordion">
                <input type="checkbox" className="allcheck" />
                活動
              </button>
              <div className="panel">
                <input type="checkbox" name="citys" />
                戶外活動
                <br />
                <input type="checkbox" name="citys" />
                藝文活動
              </div>
              <button className="accordion">
                <input type="checkbox" className="allcheck" />
                住宿
              </button>
              <div className="panel">
                <input type="checkbox" name="citys" />
                民宿
                <br />
                <input type="checkbox" name="citys" />
                飯店
              </div>
              <button className="accordion">
                <input type="checkbox" className="allcheck" />
                交通
              </button>
              <div className="panel">
                <input type="checkbox" name="citys" />
                租車
                <br />
                <input type="checkbox" name="citys" />
                飛機
                <br />
                <input type="checkbox" name="citys" />
                船班
                <br />
                <input type="checkbox" name="citys" />
                高鐵
                <br />
                <input type="checkbox" name="citys" />
                客運
              </div>
            </div>
          </div>
        </div>
        {/* <!-- 右側顯示區 --> */}
        <div className="homeright">
          {/* <!-- 顯示篩選 --> */}
          <div className="homerightup">
            共篩選出
            <span style={{ color: "#F29F04" }}>{homepagelist.length}</span>
            項行程
            {homepagelist.map((item) => (
              <button className="filterBtn">
                {item.itemFilter2}
                <span className="delbtn">X</span>
              </button>
            ))}
            {homepagelist.map((item) => (
              <button className="filterBtn">
                {item.itemFilter4}
                <span className="delbtn">X</span>
              </button>
            ))}
            <hr />
            <span className="homerightup2">
              {" "}
              排序|<a href="">熱門程度</a>|<a href="">用戶評價</a>|
              <a href="">&#36;價格由低到高</a>
            </span>
          </div>
          <div id="content" className="content">
            {/* <!-- 商品顯示主體 --> */}
            {homepagelist.map((item, index) => {
              <div className="homeProduct">
                {/* <!-- 圖片框 --> */}
                <div className="picPlace">
                  <img className="proPic" src={item.itemImgUrl} alt="" />
                  {/* ))} */}
                </div>
                {/* <!-- 介紹欄 --> */}
                <div className="intro">
                  {item.itemTitle}
                  {/* <!-- 商品標題 --> */}
                  <span className="introp">
                    {/* <!-- 愛心圖案 --> */}
                    <a href="./index.html">
                      <img
                        className="introimg"
                        src="/images/heart.png"
                        style={{ width: "20px", marginLeft: "130px" }}
                        alt=""
                      />
                    </a>
                  </span>

                  {/* 商品標題 */}
                  <p className="iteminfo">{item.itemInfo}</p>
                  {/* <!-- 地區標籤 --> */}
                  <div>
                    <img
                      src="/images/place.jpg"
                      style={{ width: "20px", float: "left" }}
                      alt=""
                    />
                    {/* <span className="fa fa-tags" aria-hidden="true"></span>  */}
                    <div className="tagplace">{item.itemFilter1}</div>
                    <div className="tagplace">{item.itemFilter2}</div>

                    <div className="tagplace">{item.itemFilter3}</div>
                    <div className="tagplace">{item.itemFilter4}</div>
                    <span
                      className="fa fa-calendar-o"
                      aria-hidden="true"
                    ></span>
                    <span>
                      {/* 最早可預訂日 ：{item.itemListedDate} */}
                      銷售期間 ：{item.itemPeriod}
                    </span>
                  </div>
                  {/* <!-- 星星評價 --> */}
                  <div className="prostar">
                    {/* for(var i=1;i<{item.itemTotalStar};i++){ */}
                    <img src="/images/1.png" alt="" />
                    {/* } */}
                    <img src="/images/1.png" alt="" />
                    <img src="/images/1.png" alt="" />
                    <img src="/images/0.png" alt="" />
                    <img src="/images/0.png" alt="" />

                    <div className="homepri">
                      <p>TWD {item.itemPrice}</p>
                    </div>
                  </div>

                  {/* <!-- 星星圖樣 --> */}
                  {/* <div className="star" style="background-color: red;">
                                  <svg className="homestar" height="210" width="550">
                                      <polygon points="100,10 40,198 190,78 10,78 160,198"
                                          style="fill:#FAEF8B;stroke-width:5;fill-rule:nonzero;" />
                                      Sorry, your browser does not support inline SVG.
                                  </svg>
                              </div>  */}
                </div>
              </div>;
            })}
          </div>
        </div>

        {/* <!-- 頁籤 --> */}
        <ul className="pagination">
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a className="pagetag" href="#">
              2
            </a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li>
            <a href="#">6</a>
          </li>
          <li>
            <a href="#">7</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Placezone;
