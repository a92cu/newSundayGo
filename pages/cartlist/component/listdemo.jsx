import $ from 'jquery';
import { useEffect } from 'react';
// import { runSQL } from "/../../lib/mysql";

export const Listdemo = () => {
    useEffect(() => {
        var acc = $(".cartaccordion"); 
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }

        $(".allcheck").click(function () {
            if (this.checked) {
                $("input[name='citys']").each(function () {
                    $(this).prop("checked", true)
                });
            } else {
                $("input[name='citys']").each(function () {
                    $(this).prop("checked", false)
                })
            }
        })
    });
    return (
        <main style={{ width: '1280px', margin: '0 auto' }}>
            <form action="">
                {/* <!-- 訂購人 --> */}

                <section className="orderman" >
                    <div className="cartsidebar">
                        <div className="cartsidebar__inner">
                            <button className="cartaccordion">
                                <h3>訂購人資料</h3>
                                <hr />
                            </button>
                            <div className="cartpanel">
                                <div className="orderleft">
                                    <p>名字</p>
                                    <input type="text" name="userName" id="CartuserName" required />
                                    <p>地區</p>
                                    <input type="text" />
                                    <p>電子信箱</p>
                                    <input type="email" name="usermail" required />
                                </div>
                                <div class="orderright">
                                    <p>姓氏</p>
                                    <input type="text" name="username2" required />
                                    <p>連絡電話</p>
                                    <input type="tel" name="userPhone" pattern="[0-9]{10}" id="CartuserPhone" required />
                                </div>


                                {/* <!-- <input class="orderbtn" type="submit"> --> */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- 旅客資料 --> */}
                <section class="travelman">
                    <div class="cartsidebar">
                        <div class="cartsidebar__inner">
                            <button class="cartaccordion">
                                <h3>旅客資料</h3>
                                <hr />
                            </button>
                            <div class="cartpanel">
                                <div class="carthomeProduct">
                                    {/* <!-- 圖片框 --> */}
                                    <div class="cartpicPlace">
                                        <img class="cartproPic" src="/images/20220520170357-1298d211.jpg" alt="" />
                                    </div>
                                    {/* <!-- 介紹欄 --> */}
                                    <div class="cartinco">

                                        <h3>
                                            <p>屏東小琉球|高雄 - 東港接駁&小琉球船票接駁套餐&船票機車套餐|一人成行</p>

                                        </h3>

                                        {/* <!-- 地區標籤 --> */}
                                        <div>
                                            <div className="carttagplace">
                                                高雄
                                            </div>
                                            <div>
                                                活動日期 ：2022-11-08
                                                時間 : 16:00
                                                人數 : 1人
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <h4>特殊需求備註</h4>
                                <div>
                                    <textarea row="10" col="100" placeholder="此欄位僅限資料備註，不保證提供"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                {/* <!-- 付款方式 --> */}
                <section className="paylist">
                    <div className="cartsidebar">
                        <div className="cartsidebar__inner">
                            <button className="cartaccordion">
                                <h3>請選擇付款方式</h3>
                                <hr />
                            </button>
                            <div className="cartpanel">
                                <ul>
                                    <li>
                                        <label for="linepay">
                                            <input type="radio" id="linepay" />
                                            <span>LINE Pay</span>
                                            <img src="https://cdn.kkday.com/pc-web/assets/img/payment/ic_linepay_2.svg" alt="" />
                                        </label>
                                    </li>
                                    <li>
                                        <label for="cardeit">

                                            <input type="radio" id="cardeit" />
                                            <span>信用卡/簽帳金融卡</span>
                                            <img src="https://cdn.kkday.com/pc-web/assets/img/payment/ic_visa.svg" alt="" />
                                            <img src="https://cdn.kkday.com/pc-web/assets/img/payment/ic_master.svg" alt="" />
                                            <img src="https://cdn.kkday.com/pc-web/assets/img/payment/ic_jcb.svg" alt="" />
                                        </label>
                                        <br />
                                        <div className="toggle">
                                            信用卡號碼
                                            <input type="text" pattern="[0-9]{12}" placeholder="0000 0000 0000" required />
                                            有效期限
                                            <input type="text" name="" placeholder="MM/YY" required />
                                            背面末3碼
                                            <input type="text" placeholder="CVC/CCV" />
                                        </div>
                                    </li>
                                    <li>
                                        <label for="wedatm">
                                            <input type="radio" id="wedatm" />
                                            <span>網路ATM</span>
                                        </label>
                                    </li>
                                </ul>

                                <p>
                                    請注意本平台不會向您收取任何平台交易手續費，
                                    但你下單時使用的信用卡或第三方支付平台可能會向您收取相關手續費，
                                    請參考其相關服務政策和規定，並向你所選的交易服務商取得更多資訊。</p>


                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- 電子發票 --> */}
                <section className="billlist">
                    <div className="cartsidebar">
                        <div className="cartsidebar__inner">
                            <button className="cartaccordion">
                                <h3>電子發票</h3>
                                <hr />
                            </button>
                            <div className="cartpanel">
                                <p>電子收據寄送方式</p>
                                <select name="" id="" style={{width: '200px'}}>
                                    <option value="">寄送至信箱</option>
                                    <option value="">開立統編、收據</option>
                                </select>
                                <p>寄送信箱</p>
                                <input type="email" value="123@gmail.com" />
                                {/* <!-- <h6>地址</h6>
                                                                            <input type="text"> --> */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- 付款明細 --> */}
                <section className="billtotal">
                    <div className="cartsidebar">
                        <div className="cartsidebar__inner">
                            <button className="cartaccordion">
                                <h3>付款明細</h3>
                                <hr />
                            </button>
                            <div className="cartpanel">
                                <div className="carthomeProduct">
                                    {/* <!-- 圖片框 --> */}
                                    <div className="cartpicPlace">
                                        <img className="cartproPic" src="/images/20220520170357-1298d211.jpg" alt="" />
                                    </div>
                                    {/* <!-- 介紹欄 --> */}
                                    <div className="cartinco">

                                        <h3>
                                            <p>屏東小琉球|高雄 - 東港接駁&小琉球船票接駁套餐&船票機車套餐|一人成行</p>

                                        </h3>

                                        {/* <!-- 地區標籤 --> */}
                                        <div>
                                            <div className="carttagplace">
                                                高雄
                                            </div>
                                            <div>
                                                活動日期 ：2022-11-08
                                                時間 : 16:00
                                                人數 : 1人
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <span className="carthrline">總金額 </span><span>TWD1800</span>
                                <hr />
                                <span className="carthrline">點數折抵 </span><span>TWD100</span>
                                <hr />
                                <span className="carthrline">支付金額 </span><span>TWD1700</span>
                                <hr />
                            </div>
                        </div>
                    </div>

                </section>
                {/* <!-- 結帳區 --> */}
                <section className="paybill">
                    <span>商品合計 </span> <span class="prdtit">TWD 1700</span>
                    <br />
                    <span>訂單完成後回饋金</span><span>TWD 17</span>

                    <input type="submit" value="確認付款" id="billok" />
                </section>
            </form>
        </main>
    )
}
export default Listdemo;