import $ from "jquery";
import { useEffect } from "react";
export const CartItem = () => {
    useEffect(() => {
        // // 購物車明細+-

        /****點擊增加按钮****/
        $('.add').click(function () {
            //修改数量
            var n = $(this).prev().html();
            var num = parseInt(n) + 1;
            // console.log(num);
            $(this).prev().html(num);
            //計算小計
            var c = $(this).parent().siblings().children('.price').html();
            // console.log(parseInt(c)); //1197
            parseInt(c);
            var subPrice = num * c;
            $(this).parent().siblings().children('.sub_total').html(subPrice);

            //計算總價及回饋金
            CountTotal();
        });

        /****點擊减少按钮****/

        $('.reduce').click(function () {
            //修改数量
            var n = $(this).next().html();
            var num = parseInt(n) - 1;
            if (num == 0) { return; }//數量减到0就不能再减了
            $(this).next().html(num);

            //計算價格
            var c = $(this).parent().siblings().children('.price').html();
            parseInt(c);
            var subPrice = num * c;
            $(this).parent().siblings().children('.sub_total').html(subPrice);

            //計算總價及回饋金
            CountTotal();
        });

        /**  全選核取方塊 **/
        var subItem = document.getElementsByName("subItem"); // 個別的核取方塊
        var all = document.getElementById("checkAll"); //全選核取方塊)

        /* 計算總價及回饋金 */
        // 當 .add 被點擊=>將總金額歸零=>所有的核取方塊進行迴圈=> if 核取方塊有被點擊(checked)=>
        // 被點擊的商品小計金額加進總金額=>印在頁面上
        var CountTotal = function () {
            var total = 0;
            subItem.forEach((element) => {   // subItem是所有的核取方塊
                if ($(element).prop("checked")) {
                    var x = ($(element).parent().siblings().children('.sub_total').html())
                    total += parseInt(x);
                };
                $('.total').html(total);
                $('.gold').html(Math.floor(total * 0.02));
            })
            // $('.sub_total').each(function () {
            //     var price = parseInt($(this).html());
            //     // console.log(price)
            //     total += price;
            //     $('.total').html(total);
            //     // 回饋金
            //     $('.gold').html(Math.floor(total * 0.02));
            // }
            // )
        }

        /** 給每一個subItem添加事件=>change後執行CountTotal跟SubItemSetAll **/
        subItem.forEach((elm) => {
            elm.addEventListener('change', CountTotal)
            elm.addEventListener('change', SubItemSetAll)
        })
        /** 給all添加事件=>change後執行AllSetSubItem和CountTotal **/
        all.addEventListener('change', function () {
            AllSetSubItem();
            CountTotal();
        })

        function AllSetSubItem() {

            for(var i=0;i<$('input[name="subItem"]').length;i++){
                $('input[name="subItem"]')[i].checked=all.checked
            }    
        }

        function SubItemSetAll() {
            if (this.checked == false) {
                all.checked = false;
            }
            /**  subItem三個都勾→All也勾  **/
            var current = subItem.length;
            var check = document.querySelectorAll('input[name="subItem"]:checked').length;
            if (current == check) {
                all.checked = true;
            }
        }

        // 點擊垃圾桶整欄移除
        var deleteOut = $(".operate i")
        $(deleteOut).click(function () {
            if (confirm('請問是否確定刪除?') == true) {
                $(this).parents(".carBody").remove();
            }
        });

        // 前往結帳按鈕判斷
        $('#gotopay').click(function(){
            if ($(".total").text() == 0) {
                alert('請先選擇商品')
            } else {
                window.location = '/CartOrderOk'
            }
        })
    })
    return (
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
            <div className="cartcontainer">
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
            <a href="#" id="gotopay">前往結帳</a>
        </div>

        <div className="continueBtn">
            <a href="">繼續購物
                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </a>
        </div>
        </>
    )
}
export default CartItem