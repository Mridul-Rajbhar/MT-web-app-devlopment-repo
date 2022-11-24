var styleElement = document.createElement("style");
styleElement.innerHTML = "body {background-color: green;\
color: white;}\
";
document.head.appendChild(styleElement);
var liElements = document.getElementsByTagName('li');
if (liElements) {
    for (var i = 0; i < liElements.length; i++) {
        // liElements[i].setAttribute("id", "showNumber");
        liElements[i].addEventListener("click", showNumber);
    }
    var pDemo = document.getElementById("demo");
}
var heading = document.createElement("h1");
var ulElement = document.getElementsByTagName("ul");
if (ulElement[0]) {
    heading.textContent = "my heading";
    document.body.insertBefore(heading, ulElement[0]);
}
function showNumber() {
    // let liElement = document.getElementById("showNumber");
    pDemo.innerHTML = this.textContent;
    // liElement.removeAttribute("id");
}
