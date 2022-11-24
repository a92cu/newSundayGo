import Image from "next/image";
// import { runSQL } from "../../lib/mysql";
import Script from "next/script";
import Head from "next/head";
import HeadMeta from "../../public/js/HeadMeta.js";
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
function CartItem(){
    return(
        <>
            <div id="car"></div>
            {/* <!-- 最上面進度條 --> */}
            <div id="progressBar">
                {/* <!-- 進度條 --> */}
                <div>
                    <span></span>
                </div>
                {/* <!-- 花跟字 --> */}
                <ol className="cartList">
                    <li>
                        購物車
                        <img src="./images/flower.png" />
                    </li>
                    <li>
                        填寫資料及付款
                        <img src="./images/flower.png" />
                    </li>
                    <li>
                        訂購完成
                        <img src="./images/flower.png" />
                    </li>
                </ol>
            </div>
            <div className="container">
                <div className="carTitle">&diams;&diams;&diams;購物車清單</div>
                <div className="carHeader">
                    {/* <!-- 全選核取方塊 --> */}
                    <div className="carChecked"> <input type="checkbox" id="checkAll" /> 全選</div>
                    <div className="carDetail">商品圖片</div>
                    <div className="carDetail">商品名稱</div>
                    <div>單價</div>
                    <div className="count">數量</div>
                    <div className="amount">總計</div>
                    <div className="operate">刪除</div>
                </div>
                {/* <!-- 商品明細 --> */}
                <div className="carHeader carBody">
                    <div className="carChecked">
                        {/* <!-- 個別核取方塊 --> */}
                        <input type="checkbox" name="subItem" className="liCheck" />
                    </div>
                    <div className="carDetail">
                        <img src="./images/商品暫用圖/A04.jpg" />
                    </div>
                    <div className="carDetail">
                        <div className="name">饗食天堂｜饗賓餐飲電子餐券｜台灣</div>
                    </div>
                    <div>$ <span className="price">200</span> </div>
                    <div className="count">
                        {/* <!-- 商品個別+- --> */}
                        <button className="reduce">-</button>
                        <span className="count">1</span>
                        <button className="add">+</button>
                    </div>
                    {/* <!-- 商品個別小計 --> */}
                    <div className="amount"><span className="sub_total">200</span></div>
                    <div className="operate">
                        <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="carHeader carBody">
                    <div className="carChecked">
                        {/* <!-- 個別核取方塊 --> */}
                        <input type="checkbox" name="subItem" className="liCheck" />
                    </div>
                    <div className="carDetail">
                        <img src="./images/商品暫用圖/A04.jpg" />
                    </div>
                    <div className="carDetail">
                        <div className="name">饗食天堂｜饗賓餐飲電子餐券｜台灣</div>
                    </div>
                    <div>$ <span className="price">300</span> </div>
                    <div className="count">
                        {/* <!-- 商品個別+- --> */}
                        <button className="reduce">-</button>
                        <span className="count">1</span>
                        <button className="add">+</button>
                    </div>
                    {/* <!-- 商品個別小計 --> */}
                    <div className="amount"><span className="sub_total">300</span></div>
                    <div className="operate">
                        <i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="carTotal">
            <div>
                <div>
                    <span>總金額</span>
                    <span className="total">0</span>
                </div>
                <div>
                    <span>回饋金</span>
                    <span className="gold">0</span>
                </div>
            </div>
            <a href="#" >前往結帳</a>
        </div>

        <div className="continueBtn">
            <a href="">繼續購物
                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </a>
        </div>
        </>
    )
}
function HotItem(){
    return(
        <>
            <div className="toMoreHot">更多推薦商品</div>
                <div className="toMoreHot owl-carousel">
                <div className="item">
                    <a href="/CartDetails/">
                        <img src=""/>
                        <div></div>
                    </a>
                </div>
            </div>
        </>
    )
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

export default function CartDetails(){
    return(
        <>  
            <Head>
              <HeadMeta />
              <Script src="/js/cart.js"/>
            </Head>
            <Header/>
            <CartItem/>
            <HotItem/>
            <Footer/>
        </>
    )
}

    // export async function getStaticPaths(props) {
//     const sq1 = "SELECT * FROM item";
//     const data: any = await runSQL(sq1);
//     const paths = data.map((item) => ({
//       params: { id: `${item.itemId}` },
//     }));
//     return {
//       paths,
//       fallback: false,
//     };
//   }
//   //頁面產生出來之後從params去找出特定需要的那一頁
//   export async function getStaticProps({ params }) {
//     const sq1 = `SELECT * FROM item WHERE itemId = ${params.id}`;
//     const sq3 = `SELECT * FROM itemimg WHERE itemId = ${params.id}`;
//     // any是沒有定義的意思
//     const imgList: any = [];
  
//     const data = (await runSQL(sq1))[0];
//     const imgListRaw: any = await runSQL(sq3);
//   //forEach是在轉格式,原本出來是database物件
//     imgListRaw.forEach((item: any) => {
//       imgList.push({ ...item });
//     });
//   //把要的資料拿出來
//     return {
//       props: {
//         ...data,
//         imgList,
//       },
//     };
//   }