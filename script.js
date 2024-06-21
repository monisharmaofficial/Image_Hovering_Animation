// var elem1 = document.querySelector("#elem1")
// var elemImage = document.querySelector("#elem1 img")

// // first div
// elem1.addEventListener("mousemove",function(dets){
//     elemImage.style.left = dets.x + "px";
//     elemImage.style.top = dets.y + "px";
// })

// elem1.addEventListener("mouseenter",function(dets){
//     elemImage.style.opacity = 1
// })

// elem1.addEventListener("mouseleave",function(dets){
//     elemImage.style.opacity = 0
// })

// TO EXECUTE THE WHOLE DIV==

var elem1 = document.querySelectorAll(".elem");

elem1.forEach(function (val) {
  val.addEventListener("mouseenter", function () {
    val.childNodes[3].style.opacity = 1;
  });

  val.addEventListener("mouseleave", function () {
    val.childNodes[3].style.opacity = 0;
  });

  val.addEventListener("mousemove", function (dets) {
    val.childNodes[3].style.left = dets.x + "px";
    // val.childNodes[3].style.top = dets.y + "px";
    // img.style.top = "50%"; // Fixed value for the vertical position
    // img.style.transform = "translateY(-50%)"; // Center the image vertically

  });
});