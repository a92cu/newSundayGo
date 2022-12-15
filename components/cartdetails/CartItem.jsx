import { useEffect, useState} from "react";
import Product from "./CartItem_item.jsx";
// import axios from "axios";

var CartItem = (props) => {
    // console.log(props.shopItemList)
    let itemarray = [];
    // 停止輪迴
    let [stopState, setstopState] = useState(false);
    // 讓getshopitem()可以動作
    const [shoppingcar, setshoppingcar] = useState([]);

    const [totalCash, setTotalCash] = useState(0);  // totalCash預設值為0

    // 還是有小bug
    let calculate = () => {
        let totalPrice=document.querySelectorAll('.itemTotal')
        let total=0;
        totalPrice.forEach((e)=>{
            // console.log(e.parentElement.parentElement.children[0].children[0].checked)
            if(e.parentElement.parentElement.children[0].children[0].checked){
                total += parseInt(e.innerHTML)
            }
        })
        if (totalCash >= 0) {
            setTotalCash(total);   // totalCash =  totalCash + price
        } else {
            setTotalCash(0)
        }
    }
    useEffect(() => {
        const shopcar = JSON.parse(window.localStorage.getItem('shopcar')) || [];
        // console.log(shopcar);

        for (const key in shopcar) {
            getshopitem(shopcar[key].itemId, shopcar[key].date, shopcar[key].count);
        }
        setshoppingcar(itemarray);
        // console.log(itemarray);
        calculate()
        // 停止迴圈
        setstopState(true)
    }, [stopState])

    // 處理撈取的資料
    function getshopitem(id, date, count) {
        var dataint = props.shopItemList.map(x => x.itemId).indexOf(id)
            itemarray.push({
            id: `${id}`, // 不知道為甚麼1號變成數字而不是字串
            date: date,
            count: count,
            itemTitle: props.shopItemList[dataint].itemTitle,
            itemPrice: props.shopItemList[dataint].itemPrice,
            itemImgUrl: props.shopItemList[dataint].itemImgUrl,
        });
        // 如果不用 getStaticProps 的話就要走下面
        // await axios.get("/api/cart/ShopItem")
        //     .then((dataresult) => {
        //         let dataAll = dataresult.data.data
        //         // 找到itemId=id的陣列，並將位置傳出
        //         var dataint = dataAll.map(x => x.itemId).indexOf(parseInt(id))
        //         // console.log(dataAll[dataint])

        //         // 將該位置的圖片轉碼
        //         dataAll[dataint].itemImgUrl = getImgUrl(dataAll[dataint].itemImgUrl);
        //         // console.log(dataAll[dataint].itemImgUrl)

        //         // 將所需資料放進itemarray
        //         itemarray.push({
        //             id: `${id}`, // 不知道為甚麼1號變成數字而不是字串
        //             date: date,
        //             count: count,
        //             itemTitle: dataAll[dataint].itemTitle,
        //             itemPrice: dataAll[dataint].itemPrice,
        //             itemImgUrl: dataAll[dataint].itemImgUrl,
        //         });

        //         // // 因為畫面會無限迴圈,所以設定setcounts讓畫面只更新一次
        //         setcounts(c => c + 1)

        //         // 幫圖片轉碼
        //         function getImgUrl(itemImg) {
        //             var img = Buffer.from(itemImg).toString('base64');
        //             var call = Buffer.from(img, 'base64').toString('ascii');
        //             var replaceCallAll = call.replaceAll('\x00', '');
        //             return replaceCallAll;
        //         }
        //     }
        //     )
    }

    // 做全選框 -- 成功 (用改資料的方式)
    function handleOnChange(e) {
        const { value, checked } = e.target;
        if (value === "on") {
            let doAllCheck = shoppingcar.map((test) => {
                return { ...test, isCheck: checked };
            });
            setshoppingcar(doAllCheck);
        } else {
            let doAllCheck = shoppingcar.map((test) =>
                test.id === value ? { ...test, isCheck: checked } : test
            );
            setshoppingcar(doAllCheck);
        }
        calculate();// 計算全部價錢
    }

    // 將商品丟進localStorage 前往結帳頁面
    function gotopay() {
        if (totalCash == 0) {
            alert("請選擇商品")
        } else {
            var a = document.querySelectorAll('.liCheck')
            a.forEach(element => {
                let Id = parseInt(element.value);
                let date = element.parentElement.nextSibling.nextSibling.children[0].innerHTML;
                let count = parseInt(element.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.children[1].innerHTML);
                let price = parseInt(element.parentElement.nextSibling.nextSibling.nextSibling.children[0].innerHTML);
                if (element.checked) {
                    console.log(element.value) // itemId
                    console.log(element.parentElement.nextSibling.nextSibling.nextSibling.nextSibling.children[1].innerHTML) // count
                    console.log(element.parentElement.nextSibling.nextSibling.children[0].innerHTML) // date
                    console.log(element.parentElement.nextSibling.nextSibling.nextSibling.children[0].innerHTML);// 價錢
                    setshopcaritem(Id, date, count, price);
                }
            })
            window.location = "/cartlist" //前往結帳頁面
        }
        function setshopcaritem(itemId, date, count, price) {
            window.localStorage.setItem(
                "sureshopcar",
                JSON.stringify({
                    ...JSON.parse(window.localStorage.getItem("sureshopcar")),
                    [itemId]: {
                        itemId,
                        date,
                        count: count,
                        price: price,
                    },
                })
            )
        }
    }
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
                    <div className="carChecked">
                        <input type="checkbox"
                            id="checkAll"
                            className="clickAll"
                            onChange={handleOnChange} 
                            checked={shoppingcar.filter((test)=> test?.isCheck !== true).length < 1} /> 全選
                    </div>
                    <div className="carDetail">商品圖片</div>
                    <div className="carDetail">商品名稱</div>
                    <div>單價</div>
                    <div className="count">數量</div>
                    <div className="amount">總計</div>
                    <div className="operate">刪除</div>
                </div>
                {/* <!-- 商品明細 --> */}
                {shoppingcar.map((i, key) =>
                    <Product
                        id={i.id}
                        key={key}
                        date={i.date}
                        count={i.count}
                        check={i?.isCheck || false}
                        itemTitle={i.itemTitle}
                        itemPrice={i.itemPrice}
                        itemImgUrl={i.itemImgUrl}
                        onCalculate={calculate}
                        onHandleOnChange={handleOnChange}
                    />
                )}
            </div>
            <div className="carTotal">
                <div>
                    <div>
                        <span>總金額</span>
                        <span id="allTotal">{totalCash}</span>
                    </div>
                    <div>
                        <span>回饋金</span>
                        <span id="gold">{Math.floor(totalCash * 0.02)}</span>
                    </div>
                </div>
                <a href="#" onClick={gotopay}>前往結帳</a>
            </div>
            <div className="continueBtn">
                <a href="/#">繼續購物
                    <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                </a>
            </div>
        </>
    )
}

export default CartItem