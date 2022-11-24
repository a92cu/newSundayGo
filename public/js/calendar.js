///日曆的JS

const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month獲取新日期、當前年份和月份
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

// storing full name of all months in array在數組中存儲所有月份的全名
const months = ["1月", "2月", "3月", "4月", "5月", "6月", "7月",
    "8月", "9月", "10月", "11月", "12月"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month得到每個月第一天
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month得到每個月最後一天
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month獲取本月的最後一天
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month獲取上個月的最後日期
    let liTag = "";
    //console.log(16, "firstDayofMonth", firstDayofMonth);

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days創建上個月最後幾天的 li
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month創建當月所有天的 li
        // adding active class to li if the current day, month, and year matched
        //如果當前日期、月份和年份匹配，則將活動類添加到 li
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "active" : "";
        //console.log(30, isToday);
        liTag += `<li class="${isToday}">${i}</li>`;
        //console.log(33, liTag);
    }
    currMonth
    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days創建下個月第一天的 li
        liTag += `<li class="inactive"'>${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text將當前月份和年份作為當前日期文本傳遞
    daysTag.innerHTML = liTag;
    daysTag.querySelectorAll("li");
    //console.log(41, liTag);
    //console.log(42, daysTag);

    ///選到被指定的li
    const dates = daysTag.querySelectorAll("li");
    for (let i = 0; i < dates.length; i++) {
        dates[i].onclick = (e) => {
            const targetDom = e.target;
            const isActive = targetDom.className.indexOf("active") != -1;
            if (isActive) {
                // do nothing;
            } else {
                //清空取消其他的active
                targetDom.className = "active";
                for (let j = 0; j < dates.length; j++) {
                    if (i !== j) dates[j].className = "";
                }
            }
        }
    }

}
renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons獲取上一個和下一個圖標
    icon.addEventListener("click", () => { // adding click event on both icons在兩個圖標上添加點擊事件
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        //如果單擊的圖標是上一個圖標，則將當前月份減 1，否則將其加 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11如果當前月份小於 0 或大於 11
            // creating a new date of current year & month and pass it as date value
            //創建當前年份和月份的新日期並將其作為日期值傳遞
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear(); // updating current year with new date year用新的日期年份更新當前年份
            currMonth = date.getMonth(); // updating current month with new date month用新的日期月份更新當前月份
        } else {
            date = new Date(); // pass the current date as date value將當前日期作為日期值傳遞
        }
        renderCalendar(); // calling renderCalendar function 呼叫 renderCalendar 函數
    });
});