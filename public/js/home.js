var acc =document.getElementsByClassName("accordion");
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
var allbtn =document.getElementsByClassName("allcheck")
var callbtn =document.getElementsByName('citys')
allbtn.onClick(function () {
    if (this.checked) {
        callbtn.each(function () {
            $(this).prop("checked", true)
        });
    } else {
        callbtn.each(function () {
            $(this).prop("checked", false)
        })
    }
})