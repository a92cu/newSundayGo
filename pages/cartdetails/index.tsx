import Image from "next/image";
import CartItem from '../../components/cartdetails/CartItem'
import HotItem from '../../components/cartdetails/HotItem'
import { format } from "date-fns";
import { runSQL } from "../../lib/mysql";

function Header() {
  return (
    <div className="header ">
            <a href="/homepage">
                <img src="/images/群組 1.png"
                    alt=""
                    style={{ width: '90px', top: '-8px', position: 'relative' }} /></a>
            <div className="header-right">
                <a href="/homepage/food">美食</a>
                <a href="/homepage/sight">景點</a>
                <a href="/homepage/play">活動</a>
                <a href="/homepage/lodging">住宿</a>
                <a href="/homepage/traffic">交通</a>
                <a href="/cartdetails">
                    <img src="./images/cart.png" style={{ width: 25 }} />
                </a>
                <a href="#">會員中心</a>
                <a href="#divOne" className="loginbutton">登出</a>
            </div>
            <form className="example" action="/cartdetails/searchResult" target="_self">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
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

export default function CartDetails(props) {
  return (
    <>
      <Header />
      <CartItem shopItemList={props.shopItemList} />
      <HotItem hotItemData={props.hotItemList} />
      <Footer />
    </>
  );
}

//頁面產生出來之後從params去找出特定需要的那一頁
export async function getStaticProps({ params }) {
  // 抓資料
  const sq1 =
    "SELECT * FROM `itemimg` Left JOIN `item` ON itemimg.itemId=item.itemId WHERE imgLead=1 ORDER BY item.itemTotalStar DESC LIMIT 10;";
  const hotItemList: any = []; // 最終要放hotItem的地方
  const hotItemListRaw: any = await runSQL(sq1); // 獲得hotitem資料的地方

  const sq2 =
    "SELECT * FROM `itemimg` Left JOIN `item` ON itemimg.itemId=item.itemId WHERE imgLead=1 ;";
  const shopItemList: any = [];
  const shopItemListRaw: any = await runSQL(sq2);
  // 轉換圖片跟日期格式
  hotItemListRaw.forEach((item: any) => {
    item.itemImgUrl = new TextDecoder("utf-8").decode(item.itemImgUrl);
    item.itemListedDate = format(new Date(item.itemListedDate), "yyyy-MM-dd");
    item.itemStartDate = format(new Date(item.itemStartDate), "yyyy-MM-dd");
    item.itemEndDate = format(new Date(item.itemEndDate), "yyyy-MM-dd");
    hotItemList.push({ ...item });
  })
  shopItemListRaw.forEach((item: any)=>{
    item.itemImgUrl = new TextDecoder("utf-8").decode(item.itemImgUrl);
    item.itemListedDate = format(new Date(item.itemListedDate), "yyyy-MM-dd");
    item.itemStartDate = format(new Date(item.itemStartDate),"yyyy-MM-dd");
    item.itemEndDate = format(new Date(item.itemEndDate), "yyyy-MM-dd");
    shopItemList.push({ ...item });
  })
  //把要的資料拿出來
  return {
    props: {
      hotItemList,
      shopItemList,
    },
  };
}
