
        {/* //嘗試將display的none跟block  使用opacity: 0跟1 做切換  --不成功
        //嘗試更改CSS樣式不影響  頂多是美觀問題 --不成功
        //嘗試使用TwoPage 加 ThreePage 的兩種function 切換廠商跟會員會導致紅色框線多跑出來 --不成功
        //嘗試將class name改為其他的名稱 --不成功
        //嘗試只使用TwoPage function切換廠商跟會員  --半成功
        //嘗試將  登入跟註冊內容  放入  廠商跟會員  半成功-- 廠商登入跟註冊的內容會消失 會員正常
        //嘗試將  廠商跟會員 及 登入跟註冊  分開  ---成功切換


        //登入及註冊的切換 */}

        function openPage(pageName, elmnt, color) {
            var i, loginTabContent, tablinks;
            loginTabContent = document.getElementsByClassName("loginTabContent");
            for (i = 0; i < loginTabContent.length; i++) {
                loginTabContent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablink");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].style.backgroundColor = "";
            }
            document.getElementById(pageName).style.display = "block";
            // elmnt.style.backgroundColor = color;
        }
        //最先開啟顯示的頁面
        document.getElementById("defaultOpen").click();


        //會員的切換
        function TwoPage(pageName,  color) {
            var i, loginTabContent, tablinks;
            loginTabContent = document.getElementsByClassName("Twotabcontent");
            for (i = 0; i < loginTabContent.length; i++) {
                loginTabContent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("Twotablink");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].style.backgroundColor = "";
            }
            document.getElementById(pageName).style.display = "block";
            //  elmnt.style.backgroundColor = color;
        }

        //TwoPage最先開啟顯示的頁面
        document.getElementById("TwodefaultOpen").click();


        ////廠商的切換
        function ThreePage(pageName, elmnt, color) {
            var i, loginTabContent, tablinks;
            loginTabContent = document.getElementsByClassName("Threetabcontent");
            for (i = 0; i < loginTabContent.length; i++) {
                loginTabContent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("Threetablink");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].style.backgroundColor = "";
            }
            document.getElementById(pageName).style.display = "block";
            // elmnt.style.backgroundColor = color;
        }
        //ThreePage最先開啟顯示的頁面
        document.getElementById("ThreedefaultOpen").click();

        //忘記密碼的切換
        function ForgetPage(pageName, elmnt, color) {
            //將member以下的所有資訊隱藏
            document.getElementById("member").style.opacity = 0;
            //顯示廠商頁面的html
            document.getElementById("company").innerHTML = "<h3>廠商忘記密碼請聯繫總公司!!</h3>";
            var i, loginTabContent, tablinks;
            loginTabContent = document.getElementsByClassName("ForgetTabcontent");
            for (i = 0; i < loginTabContent.length; i++) {
                loginTabContent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("ForgetTablink");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].style.backgroundColor = "";
            }
            document.getElementById(pageName).style.display = "block";
            // elmnt.style.backgroundColor = color;
        }

        //忘記密碼輸入成功的切換
        function ForgetPageTwo(pageName, elmnt, color) {
            //將forget以下的所有資訊隱藏
            document.getElementById("forget").style.opacity = 0;
            //顯示忘記密碼輸入完成的資料
            document.getElementById("apple").innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; 
            border: solid 1px orange; height: 300px; background-color: aliceblue;">
            <img src="/img/icons/checked.png" alt="">
            <h3>臨時密碼已發送至信箱<br>請至信箱內收取密碼並重新登入</h3>
            </div>`;
            var i, loginTabContent, tablinks;
            loginTabContent = document.getElementsByClassName("ForgetTabcontentTwo");
            for (i = 0; i < loginTabContent.length; i++) {
                loginTabContent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("ForgetTablinkTwo");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].style.backgroundColor = "";
            }
            document.getElementById(pageName).style.display = "block";
            // elmnt.style.backgroundColor = color;
        }

        // 以下是驗證碼的JS
        var w = 190; //畫布的寬
        var h = 50;  //畫布的高
        c1.width = w;
        c1.height = h;
        var ctx = c1.getContext('2d');

        //繪製隨機的背景顏色---填充一個大的矩形
        ctx.fillStyle = rc(180, 230);
        ctx.fillRect(0, 0, w, h);
        //繪製隨機的文字--難點
        ctx.textBaseline = 'top';
        var pool = 'ABCDEFGHJKLMNPQRSTWXY3456789';
        for (var i = 0; i < 4; i++) {
            var txt = pool[rn(0, pool.length)];
            ctx.fillStyle = rc(80, 180);
            ctx.font = rn(10, 20) + 'px Arial';
            var txtWidth = ctx.measureText(txt).width;

            ctx.save();
            //平移原點+旋轉畫筆
            ctx.translate(i * 30 + 15, 15);
            ctx.rotate(rn(-15, 15) * Math.PI / 180);
            ctx.fillText(txt, rn(-15, 15 - txtWidth), rn(-15, 15 - txtWidth));
            ctx.restore();
        }
        //繪製6條隨機干擾線
        // for(var i=0;i<6;i++){
        //   ctx.beginPath();
        //   ctx.moveTo(rn(0,w),rn(0,h));
        //   ctx.lineTo(rn(0,w),rn(0,h));
        //   ctx.strokeStyle=rc(80,180);
        //   ctx.stroke();
        // }
        //繪製50個干擾點--半徑為1的圓
        // for(var i=0;i<50;i++){
        //   ctx.beginPath();
        //   ctx.arc(rn(0,w),rn(0,h),1,0,2*Math.PI);
        //   ctx.fillStyle=rc(80,230);
        //   ctx.fill();
        // }
        // random number:生成指定範圍內的隨機整數
        function rn(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }
        //random color:生成指定範圍內的隨機顏色
        function rc(min, max) {
            var r = rn(min, max);
            var g = rn(min, max);
            var b = rn(min, max);
            return `rgb(${r},${g},${b})`;
        }

// window.openPage=openPage;
// window.TwoPage=TwoPage;
// window.ThreePage=ThreePage;
// window.ForgetPage=ForgetPage;
// window.ForgetPageTwo=ForgetPageTwo;
