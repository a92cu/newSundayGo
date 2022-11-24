
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

/**  全選核取方塊 **/
var subItem = document.getElementsByName("subItem"); // 個別的核取方塊
var all = document.getElementById("checkAll"); //全選核取方塊

/** 給每一個subItem添加事件=>change後執行CountTotal跟SubItemSetAll **/
subItem.forEach((elm) => {
    elm.addEventListener('change',CountTotal)
    elm.addEventListener('change',SubItemSetAll)
})
/** 給all添加事件=>change後執行AllSetSubItem和CountTotal **/
all.addEventListener('change', function () {
    AllSetSubItem();
    CountTotal();
})

function AllSetSubItem() {
    for (var i = 0; i < subItem.length; i++) {
        this.subItem[i].checked = all.checked;
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

// 貓頭鷹輪播
$(".owl-carousel").owlCarousel({
    loop: true, // 循環播放
    nav: false, // 顯示點點
    autoplay: true, // 自動撥放
    autoplayTimeout: 3000, //每 3 秒滑到一個圖片
    autoplaySpeed: 800, // 滑動速度
    responsive: {
        600: {
            items: 2 // 螢幕大小為 600~1000 顯示 3 個項目
        },
        1000: {
            items: 4 // 螢幕大小為 1000 以上 顯示 4 個項目
        }
    }
});

// 前往結帳按鈕判斷
function goToPay() {
    if ($(".total").text() == 0) {
        alert('請先選擇商品')
    } else {
        window.location = '/CartOrderOk'
    }
}