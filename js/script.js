// console.log("hello");

var myInterval;
document.getElementById("btn-about").addEventListener("click", function () {
  {
    document.getElementById("about").style.backgroundColor = "#f88ae9";
    document.getElementById("about").style.transition = "all ease-out 3s";
    setTimeout("setToBlack()", 2000);
  }
});
function setToBlack() {
  document.getElementById("about").style.backgroundColor = "white";
}
