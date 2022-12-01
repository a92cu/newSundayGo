//// 購物車明細+-
  ///加號按鈕
console.log('aaaaa');
  var test;
  
function dotwice(){
  test=document.querySelectorAll(".liCheck");
  console.log(test)
}
for(var i=0;i<10;i++){
  dotwice();
}


function adder(){

  var test=document.querySelector(".liCheck").checked;
  console.log(test)

  var count=document.querySelector(".carBody > .count > .countCar").innerHTML;
  count = parseInt(count) + 1;
  // console.log(count)
  document.querySelector(".carBody > .count > .countCar").innerHTML = count;
  var itemPrice = document.querySelector(".carBody > div > .itemPrice ").innerHTML; // 售價
  var countCar = document.querySelector(".carBody > .count > .countCar").innerHTML; // 數量
  var subTotal = parseInt(itemPrice) * parseInt(countCar); //售價*數量
  document.querySelector(".carBody > .amount > .itemTotal").innerText = subTotal; //總計
}
///減號按鈕
function minuser() {
    var count=document.querySelector(".carBody > .count > .countCar").innerHTML;
    if (count <= 0) {
      count = 0;
    } else {
      count = parseInt(count) - 1;
    }
    document.querySelector(".carBody > .count > .countCar").innerHTML = count;
    var itemPrice = document.querySelector(".carBody > div > .itemPrice ").innerHTML; // 售價
    var countCar = document.querySelector(".carBody > .count > .countCar").innerHTML; // 數量
    var subTotal = parseInt(itemPrice) * parseInt(countCar); //售價*數量
    document.querySelector(".carBody > .amount > .itemTotal").innerText = subTotal; //總計
}
  
// 刪除按鈕
function deleteMe(){
  var deleteMe=document.getElementById("deleteOut");
  if(confirm("請問是否確定刪除?") == true){
    deleteMe.closest(".carBody").remove()  
  }
}

// 確認結帳按鈕
function gotopay(){
  var allTotal=document.getElementById("allTotal").innerText;
  if(allTotal == 0 ){
    alert('請先選擇商品');
  }else{
    window.location = '/CartOrderOk'
  }
}

// -----------------------
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
//------------------------



//------------------需要努力

/**  全選核取方塊觸發後...... **/
function allClick(){
  var subItem = document.querySelector('.liCheck'); // 個別的核取方塊
  var allChecked=document.getElementById("checkAll");
  console.log(allChecked.checked);
  if(allChecked.checked){
    document.querySelector('.liCheck').checked=true;
  }else{
    document.querySelector('.liCheck').checked=false;
  }
  if(subItem.checked){
    var price=document.querySelector(".carBody > .amount > .itemTotal").innerText;
    document.getElementById("allTotal").innerText=price;
  }else{
    document.getElementById("allTotal").innerText=0;
  }
}

// 單選方塊觸發後........
function beClick(){
    var subItem = document.querySelector('.liCheck'); // 個別的核取方塊
    console.log(subItem.checked)
    if(subItem.checked){
      var price=document.querySelector(".carBody > .amount > .itemTotal").innerText;
      document.getElementById("allTotal").innerText=price;
    }else{
      document.getElementById("allTotal").innerText=0;
    }
    if(subItem.checked){
      document.getElementById("checkAll").checked=true;
    }else{
      document.getElementById("checkAll").checked
      =false;
    }
}
    // javascript
/** 給每一個subItem添加事件=>change後執行CountTotal跟SubItemSetAll **/
// for(var i=0;i<subItem.length;i++){
//   subItem.for((elm) => {
//     // console.log(elm,123)
//     elm.addEventListener('change', CountTotal)
//     elm.addEventListener('change', SubItemSetAll)
//   })
// }
/** 給all添加事件=>change後執行AllSetSubItem和CountTotal **/
// all.addEventListener('change', function () {
//   AllSetSubItem();
//   CountTotal();
// })

// function AllSetSubItem() {
//   for (var i = 0; i < $('input[name="subItem"]').length; i++) {
//       $('input[name="subItem"]')[i].checked = all.checked
//   }
// }

// function SubItemSetAll() {
//   console.log(this)
//   if (this.checked == false) {
//       all.checked = false;
//   }
//   /**  subItem三個都勾→All也勾  **/
//   var current = subItem.length;
//   var check = document.querySelectorAll('input[name="subItem"]:checked').length;
//   if (current == check) {
//       all.checked = true;
//   }
// }





// /****點擊增加按钮****/
// $('.add').click(function () {
//   //修改数量
//   var n = $(this).prev().html();
//   var num = parseInt(n) + 1;
//   // console.log(num);
//   $(this).prev().html(num);
//   //計算小計
//   var c = $(this).parent().siblings().children('.price').html();
//   // console.log(parseInt(c)); //1197
//   parseInt(c);
//   var subPrice = num * c;
//   $(this).parent().siblings().children('.sub_total').html(subPrice);

//   //計算總價及回饋金
//   CountTotal();
// });

// /****點擊减少按钮****/

// $('.reduce').click(function () {
//     //修改数量
//     var n = $(this).next().html();
//     var num = parseInt(n) - 1;
//     if (num == 0) { return; }//數量减到0就不能再减了
//     $(this).next().html(num);

//     //計算價格
//     var c = $(this).parent().siblings().children('.price').html();
//     parseInt(c);
//     var subPrice = num * c;
//     $(this).parent().siblings().children('.sub_total').html(subPrice);

//     //計算總價及回饋金
//     CountTotal();
// });


// /* 計算總價及回饋金 */
// // 當 .add 被點擊=>將總金額歸零=>所有的核取方塊進行迴圈=> if 核取方塊有被點擊(checked)=>
// // 被點擊的商品小計金額加進總金額=>印在頁面上
// var CountTotal = function () {
//     var total = 0;
//     subItem.forEach((element) => {   // subItem是所有的核取方塊
//         if ($(element).prop("checked")) {
//             var x = ($(element).parent().siblings().children('.sub_total').html())
//             total += parseInt(x);
//         };
//         $('.total').html(total);
//         $('.gold').html(Math.floor(total * 0.02));
//     })
//     // $('.sub_total').each(function () {
//     //     var price = parseInt($(this).html());
//     //     // console.log(price)
//     //     total += price;
//     //     $('.total').html(total);
//     //     // 回饋金
//     //     $('.gold').html(Math.floor(total * 0.02));
//     // }
//     // )
// }



