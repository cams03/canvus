//HOMEPAGE INSTRUCTIONS
var container = document.getElementById('rules');
container.addEventListener("click", function () {
    if (!container.classList.contains("visible")) {
    	container.className += "visible";
    } else {
    	container.classList.remove("visible");
    }
});