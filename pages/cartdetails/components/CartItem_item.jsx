import { useEffect, useState} from "react";

function Product({
    id,
    date,
    count,
    check,
    itemTitle,
    itemPrice,
    itemImgUrl,
    doIncrement,
    doDecrement,
    onHandleOnChange, }) {
    const [quantity, setQuantity] = useState(0);  //  quantity 預設值= 0

    useEffect(() => {
        setQuantity(parseInt(count));
    },[])

    let deleteMe = (e) => {
        if(window.confirm("您確定要刪除嗎?")){
            e.target.parentElement.parentElement.remove()
        }
    }

    return (
        <>
            <div className="carHeader carBody">
                <div className="carChecked">
                    {/* <!-- 個別核取方塊 --> */}
                    <input type="checkbox" name="subItem" className="liCheck" onChange={onHandleOnChange} value={id} checked={check}/>
                </div>
                <div className="carDetail">
                    <a href={`/item/${id}`}><img src={itemImgUrl} /></a>
                </div>
                <div className="carDetail">
                    <div className="name" >{date}</div>
                    <div className="title" style={{width:'100%'}}>{itemTitle}</div>
                </div>
                <div>$ <span className="itemPrice">{itemPrice}</span> </div>
                <div className="count">
                    {/* <!-- 商品個別+- --> */}
                    <p className="reduce"><input type="button" value="-" onClick={doDecrement} /></p>
                    <span className="countCar">{quantity}</span>
                    <p className="add"><input type="button" value="+" onClick={doIncrement} /></p>
                </div>
                {/* <!-- 商品個別小計 --> */}
                <div className="amount">
                    <span className="itemTotal">{quantity * itemPrice}</span>
                </div>
                <div className="operate">
                    <i id="deleteOut" className="fa fa-trash-o fa-2x" aria-hidden="true" onClick={deleteMe}></i>
                </div>
            </div>
        </>
    )
};

export default Product