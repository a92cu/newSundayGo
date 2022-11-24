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
        test
        <Footer />

    </>

}

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="header.css">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
//     <link rel="stylesheet" type="text/css" href="./css/loading.css" />
//     <link rel="stylesheet" href="cart.css">


// </head>

// <body>
//     <!-- header -->
//     <div class="header ">
//         <img src="./images/群組 1.png" alt="" style="width: 90px ;top: -8px; position: relative;">
//         <div class="header-right">
//             <a href="#">美食</a>
//             <a href="#">景點</a>
//             <a href="#">活動</a>
//             <a href="#">住宿</a>
//             <a href="#">交通</a>
//             <a href="#"><img src="./images/cart.png" style="width: 25px ;"></a>
//             <a href="#">登入|註冊</a>
//         </div>
//         <form class="example" action="">
//             <input type="text" placeholder="Search.." name="search">
//             <button type="submit"><i class="fa fa-search"></i></button>
//         </form>
//     </div>

    
//     <div id="progressBar">
//         <!-- 進度條 -->
//         <div>
//             <span style="width: 100%"></span>
//         </div>
//         <!-- 花跟字 -->
//         <ol class="cartList">
//             <li>
//                 購物車
//                 <img src="./images/flower.png">
//             </li>
//             <li>
//                 填寫資料及付款
//                 <img src="./images/flower.png" style="filter: grayscale(0%);">
//             </li>
//             <li>
//                 訂購完成
//                 <img src="./images/flower.png" style="filter: grayscale(0%);">
//             </li>
//         </ol>
//     </div>
//     <br><br>
//     <div class="okOrderBody">
//         <br>
//         <img src="./images/check.png" class="ld ld-surprise" style="animation-iteration-count:1;" alt="">
//         <h2>感謝您的訂購</h2>
//         <h5>訂購人：王曉明</h5>
//         <h5>訂單編號：21KK218456622</h5>
//         <a href="">回到首頁</a>
//         <br><br>
//     </div>
//     <!-- footer -->
//     <div class="footer" style="position: fixed;">
//         <div class="footerCenter">
//             <div class="footerBody">
//                 <ul>
//                     <h4>認識我們</h4>
//                     <li><a href="">關於我們</a></li>
//                     <li><a href="">使用者條款</a></li>
//                     <li><a href="">隱私權保護政策</a></li>
//                     <li><a href="">常見問題與幫助</a></li>
//                 </ul>
//             </div>
//             <div class="footerBody">
//                 <ul>
//                     <h4>給旅行者們</h4>
//                     <li><a href="">三大保證</a></li>
//                     <li><a href="">合作夥伴</a></li>
//                     <li><a href="">回饋金介紹</a></li>
//                     <li><a href="">賺取額外獎勵</a></li>
//                 </ul>
//             </div>
//             <div class="footerBody">
//                 <ul>
//                     <h4>給合作夥伴</h4>
//                     <li><a href="">成為供應商</a></li>
//                     <li><a href="">供應商登入</a></li>
//                     <li><a href="">同業合作</a></li>
//                     <li><a href="">聯盟行銷</a></li>
//                 </ul>
//             </div>
//             <div class="footerBody">
//                 <div class="footerImg">
//                     <h4>付款方式</h4>
//                     <img src="./images/MasterCard.png">
//                     <img src="./images/JCB.jpg">
//                     <img src="./images/visa.png">
//                     <img src="./images/googlepay.jpg">
//                     <img src="./images/apple-pay.png">
//                 </div>

//             </div>
//         </div>

//     </div>

// </body>

// </html>