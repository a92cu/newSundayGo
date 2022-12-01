import { format } from "date-fns";
import { runSQL } from "../../../lib/mysql";
import Script from "next/script";
import { useRouter } from 'next/router'
import Router from "next/router";
import { useState } from "react";

function Evaluation(
    {
    itemTitle,
    
    }
) {
    const router = useRouter()
    const evaluationSend = () => {
        console.log('ok');
        //   fetch(`http://localhost:3000/api/receiptQr/${orderNumber}`, {
        //     method: "PUT",
        //     headers: {
        //       "Content-Type": "application/json;charset=utf-8",
        //     },
        //     body: JSON.stringify({
        //       orderDeter: 2,
        //     }),
        //   });    


    };
    return (
        <div id="id01" className="modal">
            <form className="modal-content animate">
                <span onClick={() => router.push(`/memberCenter`)} id="evaluationX" className="close" title="Close Modal">
                    &times;
                </span>
                <p>{itemTitle}</p>
                <div className="evaluationStar">
                    <div className="evaluationText"> 本次評價好感度
                        <span style={{ color: "red" }}>*</span>
                        <div className="star">
                            <div className="box1">
                            </div>
                            <div className="box1">
                            </div>
                            <div className="box1">
                            </div>
                            <div className="box1">
                            </div>
                            <div className="box1">
                            </div>
                        </div>
                    </div>

                </div>
                <p>評論內容</p>
                <input type="text" style={{ width: "270px", height: "70px" }} />
                <button className="evaluationSendBtn" onClick={() => evaluationSend()}>送出</button>
            </form>
        </div>

    )

}


export default function EvaluationB(props) {
    return (
        <>
            <Evaluation {...props.data} />
            <Script src="/js/MemberCentre.js" />

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
    const sq1 = `SELECT orderReceipt, orderReview, orderStar , itemTitle FROM ordertable, item WHERE ordertable.itemId = item.itemId AND orderNumber = "${params.id}"`;
    const data = (await runSQL(sq1))[0];


    return {
        props: {
            data: { ...data },
        },
    };
}
