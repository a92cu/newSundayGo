function adder() {
  var count = document.getElementById("countCar").innerHTML;
  count = parseInt(count) + 1;
  document.getElementById("countCar").innerHTML = count;
  var itemPrice = document.getElementById("itemPrice").innerText; // 售價
  var countCar = document.getElementById("countCar").innerText; // 數量
  var subTotal = parseInt(itemPrice) * parseInt(countCar); //售價*數量
  document.getElementById("itemTotal").innerText = subTotal; //總計
}
///減號按鈕
function minuser() {
  var count = document.getElementById("countCar").innerHTML;
  if (count <= 0) {
    count = 0;
  } else {
    count = parseInt(count) - 1;
  }
  document.getElementById("countCar").innerHTML = count;
  var itemPrice = document.getElementById("itemPrice").innerText; // 售價
  var countCar = document.getElementById("countCar").innerText; // 數量
  var subTotal = parseInt(itemPrice) * parseInt(countCar); //售價*數量
  document.getElementById("itemTotal").innerText = subTotal; //總計
}

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
  )
  location="http://localhost:3000/cartdetails";
}
window.adder = adder;
window.addToCar = addToCar;
window.minuser = minuser;
