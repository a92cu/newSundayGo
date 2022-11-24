import { useRouter } from "next/router";
import Image from "next/image";
import { getItem } from "../../../lib/mysql";
import { format } from "date-fns";

function Calendar({ price, itemId }) {
  return (
    <div style={{ display: "flex" }}>
      <div className="wrapper">
        <div className="wrapperhead">
          <div className="icons">
            <span id="prev" className="material-symbols-rounded">
              chevron_left
            </span>
          </div>
          <p className="current-date"></p>
          <div className="icons">
            <span id="next" className="material-symbols-rounded">
              chevron_right
            </span>
          </div>
        </div>
        <div className="calendar">
          <ul className="weeks">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
          <ul className="days"></ul>
        </div>
      </div>
      <div className="addToCarPrice">
        <p>
          售價:<span id="itemPrice">{price}</span>
        </p>
        <br />
        <p>
          總計:<span id="itemTotal">0</span>
        </p>
        <br />
        <div className="counterBtn">
          <p id="plus">
            <input type="button" onClick={() => window.adder()} value="+" />
          </p>
          <p id="countCar">0</p>
          <p id="minus">
            <input type="button" onClick={() => window.minuser()} value="-" />
          </p>
        </div>
        <br />
        <p>
          <button
            className="addToCarBtn"
            onClick={() => window.addToCar(itemId)}
          >
            加入購物車
          </button>
        </p>
      </div>
    </div>
  );
}
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
function Carousel({ imgList }) {
  return (
    <div className="main-carousel" data-flickity='{ "wrapAround": true }'>
      {/* {props.imgList.map(
    (i) =>
      i.itemLead == "1" && (
        <div className="carousel-cell" key={i.imgId}>
          <img src={`${i.itemImgUrl}`} alt="" />
        </div>
      )
  )} */}
      {imgList.map((i) => (
        <div className="carousel-cell" key={i.imgId}>
          <img src={`${i.itemImgUrl}`} alt="" />
        </div>
      ))}
    </div>
  );
}
export default function ItemPage(props) {
  const router = useRouter();
  const id = router.query.id as string;
  return (
    <>
      <Header />
      <Carousel imgList={props.imgList} />
      <div className="item-container">
        <div>
          <h1>{props.itemTitle}</h1>
        </div>
        <div>
          <h3>
            地區:&nbsp;<span>{props.itemFilter2}</span>
          </h3>
        </div>
        <div>
          <h3>
            價錢:&nbsp;<span>{props.itemPrice}</span>元
          </h3>
        </div>
        <div>
          <h3>
            商品說明:&nbsp;
            <pre style={{ whiteSpace: "pre-line" }}>{props.itemInfo}</pre>
          </h3>
        </div>
        <div>
          <div>
            <h2>
              商品名稱:&nbsp;<span>{props.itemName}</span>
            </h2>
          </div>
          <div>
            <h3>
              銷售日期:&nbsp;<span>{props.itemPeriod}</span>
            </h3>
          </div>
          <div>
            <h2>請選擇日期</h2>
          </div>
          <Calendar price={props.itemPrice} itemId={props.itemId} />
        </div>
        <div>
          <h3>
            注意事項:
            <pre style={{ whiteSpace: "pre-line" }}>{props.itemNote}</pre>
          </h3>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h3>{props.itemAddr}</h3>
            <p>
              地址:&nbsp;<span>{props.itemLocation}</span>
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.8845360771206!2d121.22031161483552!3d24.730843984115214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346802cac6d3e685%3A0x99afbd6ecf270016!2z55-z5LiK5rmv5bGL!5e0!3m2!1szh-TW!2stw!4v1668581828726!5m2!1szh-TW!2stw"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <h3 style={{ padding: "0 20px" }}>
              交通資訊:
              <pre style={{ whiteSpace: "pre-line" }}>{props.itemTraffic}</pre>
            </h3>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}
export async function getStaticPaths(props) {
  const sq1 = "SELECT * FROM item";
  const data: any = await getItem(sq1);
  const paths = data.map((item) => ({
    params: { id: `${item.itemId}` },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const sq1 = `SELECT * FROM item WHERE itemId = ${params.id}`;
  const sq3 = `SELECT * FROM itemimg WHERE itemId = ${params.id}`;
  // The value of the `props` key will be
  const imgList: any = [];

  const data = (await getItem(sq1))[0];
  const imgListRaw: any = await getItem(sq3);

  imgListRaw.forEach((item: any) => {
    imgList.push({ ...item });
  });

  data.itemListedDate = format(data.itemListedDate, "yyyy-MM-dd");

  return {
    props: {
      ...data,
      imgList,
    },
  };
}
