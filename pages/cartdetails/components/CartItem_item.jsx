import { useEffect, useState } from "react";
import Script from "next/script";

const Product = ({ 
    id,
    date,
    count,
    check,
    itemTitle,
    itemPrice,
    itemImgUrl,
    giveChange,
    onCalculate,
    onDoAllClick}) => {
    const [ wanted , setwanted ]=useState(false)
    const [ quantity, setQuantity] = useState(0);  //  quantity 預設值= 0
    // 當input 被點到會觸發...
    let gotChange=(e)=>{
        if(e.target.checked){
            onDoAllClick(e.target.checked)
            onCalculate(quantity*itemPrice);
        }else{
            onDoAllClick(e.target.checked)
            onCalculate(-quantity*itemPrice);
        }
        setwanted(e.target.checked)
        giveChange(e.target.value)
    }
    ;
    useEffect(()=>{
        setQuantity(parseInt(count));    
    }
    ,[])

    const increment = () => {
        setQuantity(quantity + 1);   // 可以想成 quantity = quantity + 1
        if(wanted){
            onCalculate(itemPrice);
        }
    };
    const decrement = () => {
        if ( quantity > 0 ){
              setQuantity(quantity - 1);    // quantity = quantity - 1
        }
        if(wanted){
            onCalculate(-itemPrice);
        }
    };
    let deleteMe=(e)=>{
        e.target.parentElement.parentElement.remove()
    }

    return (
        <>
            <div className="carHeader carBody">
                <div className="carChecked">
                    {/* <!-- 個別核取方塊 --> */}
                    <input type="checkbox" name="subItem" className="liCheck" onChange={gotChange} value={id} />
                </div>
                <div className="carDetail">
                    <a href={`/item/${id}`}><img src={itemImgUrl} /></a>
                </div>
                <div className="carDetail">
                    <div className="name">{date}</div>
                    <div className="title">{itemTitle}</div>
                </div>
                <div>$ <span className="itemPrice">{itemPrice}</span> </div>
                <div className="count">
                    {/* <!-- 商品個別+- --> */}
                    <p className="reduce"><input type="button" value="-" onClick={decrement} /></p>
                    <span className="countCar">{quantity}</span>
                    <p className="add"><input type="button" value="+" onClick={increment} /></p>
                </div>
                {/* <!-- 商品個別小計 --> */}
                <div className="amount">
                    <span className="itemTotal">{quantity*itemPrice}</span>
                </div>
                <div className="operate">
                    <i id="deleteOut" className="fa fa-trash-o fa-2x" aria-hidden="true" onClick={deleteMe}></i>
                </div>
            </div>
        </>
    )
};

export default Product