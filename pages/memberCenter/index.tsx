import Image from "next/image";
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
export default function Company() {
    return <>

        <Header />
        <Footer />

    </>

}
