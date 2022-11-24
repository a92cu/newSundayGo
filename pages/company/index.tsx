
import { useState } from 'react';

function MemberOrder() {
    return <div id="memberOrder" className="tabcontent">
        <div className="setBody">
            <h2 className="memberOrderH2">訂單管理</h2>
            <a href="/companyUpItem" className="addCommodity">+上架新商品</a>
            <br />
            <div className="memberOrderBtn" style={{ width: "100%" }}>
                <table className="companyTb">
                    <tbody>
                        <tr>
                            <td>
                                <div className="OrderReadyImg"><img src="" /></div>
                            </td>
                            <td></td>
                            <td></td>
                            <td>
                                <p>庫存 <span></span></p>
                                <p>銷售數 <span></span></p>
                                <p>上架時間 <br /><span></span></p>
                            </td>
                            <td>
                                <button><a href="/companyEdit">編輯</a></button> <br />
                                <button className="companyDelete">刪除</button>
                            </td>

                        </tr>
                        <tr >
                            <td>
                                <div className="OrderReadyImg"><img src="/images/商品暫用圖/A02.jpg" /></div>
                            </td>
                            <td>桃園青埔|Xpark 都會型水生公園門票</td>
                            <td>$762</td>
                            <td>
                                <p>庫存 <span>12</span></p>
                                <p>銷售數 <span>18</span></p>
                                <p>上架時間 <br /><span>2022-11-08</span></p>
                            </td>
                            <td>
                                <button>編輯</button> <br />
                                <button className="companyDelete">刪除</button>
                            </td>

                        </tr>

                    </tbody>

                </table>
            </div>
        </div>

    </div>
}
function Account() {
    return <div id="information" className="tabcontent">
        <h2>帳號設定 </h2>
        <div className="setBody">
            <span style={{ color: "#8C5C02" }}> <b>基本資料</b> </span>
            <br /><br />
            <div className="basic">
                <span>公司名稱</span>
                <input type="text" value="" />
            </div>
            <div className="basic">
                <span>統一編號</span>
                <input type="text" value="" />
            </div>
            <div className="basic">
                <span>負責人</span>
                <input type="text" value="" />
            </div>
            <div className="basic">
                <span>公司聯絡號碼<b>*</b></span>
                <input type="tel" value="" />
            </div>
            <div className="basic">
                <span>公司所在地<b>*</b></span>
                <input type="text" value="" />
            </div>
            <div className="basic">
                <span>公司E-mail<b>*</b></span>
                <input type="email" value="" />
            </div>
            <div className="basic">
                <span>密碼<b>*</b></span>
                <input type="password" value="" />
            </div>

        </div>
        <div className="basicBtn">
            <button className="informationBtn"> <b>儲存</b> </button>
        </div>
    </div>
}
export default function Company(props) {
    const [tab, setTab] = useState('account');

    return <>
        <div className="companyName"><span></span> &nbsp;<span>您好！</span></div>
        <div className="MemberCentre">
            <div className="tab">
                <div className="tabBtn">
                    <button className="tablinks" onClick={() => setTab('account')} id="defaultOpen">
                        <span><img src="./images/flower.png" style={{ width: 30, verticalAlign: "middle" }} />&nbsp;帳號設定</span>
                    </button>
                    <button className="tablinks" onClick={() => setTab('memberOrder')}>
                        <span><img src="./images/flower.png" style={{ width: 30, verticalAlign: "middle" }} />&nbsp; 訂單管理</span>
                    </button>
                </div>
            </div>
            {tab === "account" && <Account />}
            {tab === "memberOrder" && <MemberOrder />}
        </div>
    </>
}
export async function getStaticProps({ params }) {

    return {
        props: {

        },
    };
}