
function adder() {
    var count = document.getElementById("countCar").innerHTML;
    count = parseInt(count) + 1;
    document.getElementById("countCar").innerHTML = count;
    var itemPrice = document.getElementById("itemPrice").innerText; // 售價
    var countCar = document.getElementById("countCar").innerText; // 數量
    var subTotal = parseInt(itemPrice) * parseInt(countCar); //售價*數量
    document.getElementById("itemTotal").innerText = subTotal; //總計
  
    // console.log(document.getElementById('itemPrice').innerText); // 售價
    // console.log(document.getElementById('countCar').innerText);// 數量
    // console.log(document.getElementById('itemTotal').innerText); // 小計
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
  
  function addToCar(itemId) {
    const daysTag = document.querySelector(".days");
    const date = daysTag.querySelector("li.active");
    const curentDate = document
      .querySelector(".current-date")
      .innerText.replace("月", "")
      .split(" ");
      window.shopcar = {
          total: document.getElementById("itemTotal").innerText,
          count: document.getElementById("countCar").innerText,
          date: curentDate[1] + "-" + curentDate[0] + "-" + date.innerText,
          itemId,
      }
  }
  window.adder = adder;
  window.addToCar = addToCar;
  window.minuser = minuser;