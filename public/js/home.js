var acc =document.getElementsByClassName("cartaccordion");
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
//抓loa抓local資料
function addToCar(itemId, date) {
    window.localStorage.setItem(
      "shopcar",
      JSON.stringify({
        ...JSON.parse(window.localStorage.getItem("shopcar")),
        [itemId]: {
          total: document.getElementById("itemTotal").innerText,
          count: document.getElementById("countCar").innerText,
          date,
          itemId,
        },
      })
    );
  }
// var allbtn =document.getElementsByClassName("allcheck")
// var callbtn =document.getElementsByName('citys')
// allbtn.onClick(function () {
//     if (this.checked) {
//         callbtn.each(function () {
//             $(this).prop("checked", true)
//         });
//     } else {
//         callbtn.each(function () {
//             $(this).prop("checked", false)
//         })
//     }
// })
//商品計算
// 
function additem(){
  
  // var a
  // num = parseInt(num)
   //選取輸入欄位的 DOM 並宣告變數名，用 value 帶出輸入欄的值。
   //商品金額
   var itemmoney = parseInt(document.getElementsByClassName('paybill1').innerText);
//點數折抵
   var itemcoback = parseInt(document.getElementsByClassName('billcount').innerText);
   //再用一個變數儲存金額加總
   var total = itemmoney - itemcoback ;
   //把總金額渲染至網頁上 支付金額
   document.getElementsByClassName('paybill2').innerText = total
}
additem();