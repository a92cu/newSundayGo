
// 變更頭像圖片

// function upload(e) {
//     console.log(chengImgBtn.files);  //FileList {0: File, length: 1}
//     var dog = new FileReader();
//     dog.onload = function () {
//         console.log(dog.result); // data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtMAA ...
//         //  setAttribute("src",更改新圖片的路徑)
//         document.getElementById("MemberImgId").setAttribute("src", dog.result);
//     }
//     dog.readAsDataURL(chengImgBtn.files[0]);
// }

// 我的收藏點集愛心整欄移除 >>>>ＸＸＸＸ
// $(".collectDelete").click(function (e) {
//     // console.log("ok");
//     // console.log(e);
//     if (confirm('是否要從我的珍藏裡移除?') == true) {
//         $(this).parent().parent().parent().remove();
//     } 
//     // $(this).parent().parent().parent().remove();
//     // toastr.warning('已從我的珍藏移除');
// });
// collectDelete.click = function (e){
//     if (confirm('是否要從我的珍藏裡移除?') == true) {
//         $(this).parent().parent().parent().remove();
//     } 
// }

// // 評價星星
var arBox1 = document.getElementsByClassName("box1");
for (let x = 0; x < 5; x++) {
    arBox1[x].onclick = function () {
        for (let y = 0; y < 5; y++) {
            arBox1[y].style.backgroundImage = "url(./images/0.png)"
            for (let z = 0; z <= x; z++) {
                arBox1[z].style.backgroundImage = "url(./images/1.png)"
            }
        }
    }
}




// $(".ImgPick").one("click", function () {
//     alert("恭喜獲得優惠券，詳情請至折扣券列表查看!")
//     $(this).css({
//         filter: "grayscale(100%)"
//     });
// });


