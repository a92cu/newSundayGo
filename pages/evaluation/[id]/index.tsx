import Image from "next/image";
import { runSQL } from "../../../lib/mysql";
import Script from "next/script";
import { useRouter } from 'next/router'
import Router from "next/router";
import { useState } from "react";
import ReactStars from 'react-stars'
import { useCookies } from "react-cookie"




function Footer() {
    return (
        <div className="footer" style={{ position: "fixed" }}>
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
    const [cookie, setCookie] = useCookies(["user"])


    //判斷有無cookie 去切換登入登出
    if (Object.keys(cookie).length === 0) {
        return (
            <div className="header">
                <img
                    src="../images/群組 1.png"
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
                        <img src="../images/cart.png" style={{ width: 25 }} />
                    </a>

                    <a href="#divOne" className="loginbutton">
                        登出

                        {/* <a href="http://localhost:3000/login" className="loginbutton">
            登入|註冊 */}

                    </a>
                </div>
                <form className="example" action="">
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>
        )
    } else {
        return (
            <div className="header">
                <img
                    src="/images/群組 1.png"
                    alt=""
                    // width={20} height={20}
                    style={{
                        width: 90,
                        top: -8,
                        position: "relative"
                    }}
                />
                <div className="header-right">
                    <a href="#">美食</a>
                    <a href="#">景點</a>
                    <a href="#">活動</a>
                    <a href="#">住宿</a>
                    <a href="#">交通</a>
                    <a href="#">
                        <img
                            src="/images/cart.png"
                            alt=""
                            width={20} height={20} />
                    </a>
                    <a href="#divOne" className="loginbutton">
                        登出
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
}



export default function EvaluationB(props) {
    // const router = useRouter()
    const {
        itemTitle,
        orderNumber,

    } = props;
    const [orderStar, setorderStar] = useState(props.orderStar);
    const [orderReview, setorderReview] = useState(props.orderReview);



    const ratingChanged = (newRating) => {
        // console.log(newRating)
        fetch(`http://localhost:3000/api/evaluation/${orderNumber}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                orderStar: newRating,
            }),
        });
    }
    const evaluationSend = () => {
        // console.log('ok');
        // console.log(orderStar);
        // console.log(orderReview);
        fetch(`http://localhost:3000/api/evaluation/${orderNumber}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({
                orderReview: orderReview,
            }),
        });
        // Router.replace("/memberCenter");
    }

    return (
        <>
            <Header />
            <div id="id01" className="modal">
                <br />
                <form className="modal-content animate">
                    <br />
                    <img className="modalImg" src="../images/評價.png" alt="" />
                    <p>{itemTitle}</p>
                    <div className="evaluationStar">
                        <div className="evaluationText"> 本次評價好感度
                            <span style={{ color: "red" }}>*</span>
                            <div className="star">
                                <ReactStars
                                    count={5}
                                    size={16}
                                    value={orderStar}
                                    onChange={ratingChanged}
                                    style={{ float: "right" }}
                                />

                            </div>
                        </div>

                    </div>
                    <p>評論內容</p>
                    <input
                        type="text"
                        style={{ width: "270px", height: "70px" }}
                        value={orderReview}
                        onChange={(e) => setorderReview(e.target.value)}
                    />
                    <br /><br />
                    <button className="evaluationSendBtn" onClick={() => evaluationSend()}> <a href="/memberCenter">送出</a></button>
                </form>
            </div>
            <Footer />
        </>
    )
}
export async function getStaticPaths(props) {
    const sq1 = "SELECT * FROM ordertable";
    const data: any = await runSQL(sq1);
    const paths = data.map((ordertable) => ({
        params: { id: `${ordertable.orderNumber}` },
    }));
    return {
        paths,
        fallback: false,
    };
}
//頁面產生出來之後從params去找出特定需要的那一頁
export async function getStaticProps({ params }) {
    const sq1 = `SELECT orderNumber, orderReceipt, orderReview, orderStar , itemTitle FROM ordertable, item WHERE ordertable.itemId = item.itemId AND orderNumber = "${params.id}"`;
    const data = (await runSQL(sq1))[0];

    return {
        props: {
            ...data,

        },
    };
}
