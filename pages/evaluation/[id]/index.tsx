import { format } from "date-fns";
import { runSQL } from "../../../lib/mysql";
import Script from "next/script";
import { useRouter } from 'next/router'
import Router from "next/router";
import { useState } from "react";
import ReactStars from 'react-stars'

export default function EvaluationB(props) {
    // const router = useRouter()
    const {
        itemTitle,
        orderNumber
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
            <div id="id01" className="modal">
                <form className="modal-content animate">
                    <span onClick={() => Router.push(`/memberCenter`)} id="evaluationX" className="close" title="Close Modal">
                        &times;
                    </span>
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
                    <button className="evaluationSendBtn" onClick={() => evaluationSend()}> <a href="/memberCenter">送出</a></button>
                </form>
            </div>
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
