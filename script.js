var toggle = document.querySelector(".toggle")
var sidebar = document.querySelector(".sidebar")

var scroll = new SmoothScroll('a[href*="#"]');

sidebar.style.right = "-250px"
toggle.onclick = function() {
    if (sidebar.style.right == "-250px") {
        sidebar.style.right = "0px"
    } else {
        sidebar.style.right = "-250px"
    }
}