
// 變更頭像圖片
document.getElementById("cameraBtn").onclick = function () {
    document.getElementById("chengImgBtn").click(
        document.getElementById("chengImgBtn").onchange = function upload(e) {
            // console.log(chengImgBtn.files);  //FileList {0: File, length: 1}
            var dog = new FileReader();
            dog.onload = function () {
                // console.log(dog.result); // data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtMAA ...
                //  setAttribute("src",更改新圖片的路徑)
                document.getElementById("MemberImgId").setAttribute("src", dog.result);
                fetch(`http://localhost:3000/api/memberCentre/imgTest`, {
                    method: "PUT",
                    body:  dog.result,          
                  });
                
            }
            dog.readAsDataURL(chengImgBtn.files[0]);
        }
    );
}
