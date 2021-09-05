/*
function onClick() {
    var btn = document.getElementById("button5");
        btn.style.position = "relative" ;
        btn.style.left = Math.floor((Math.random()*200))+"px",
        btn.style.top =Math.floor((Math.random()*200))+"px",
}
*/

var distance=30;

function onClick(){
  if(distance < 3)
    window.location.href = "a87ff679a2f3e71d9181a67b7542122c";
}

function run() {
    var btn = document.getElementById("button5");
/*
    if (!btn.style.left) {
        // Default to 500 to start
        btn.style.left = "500px";
    } else {
        var posLeft = parseInt(btn.style.left); // parseInt ignores the px on the end
        if (posLeft >= 800) {
            btn.style.left = "200px";
        } else  {
            posLeft += 150;
            btn.style.left = (posLeft + 150) + "px";
        }
    }
    */
    if(distance > 1){
    btn.style.left = Math.floor((Math.random() * 800)) + "px";
   btn.style.top = Math.floor((Math.random() * 600)) + "px";
    distance=20;
    }

}



var x = setInterval(function() {

  // Output the result in an element with id="demo"
  //document.getElementById("demo").innerHTML = distance + "s ";

  // If the count down is over, write some text
  distance -= 1;

  if (distance > 15) {
    document.getElementById("button5").style.background='#8B0000';
    document.getElementById("txt").innerHTML = "Be patient";
  }
  if (distance > 5 && distance <=15 ){
    document.getElementById("button5").style.background='#FFD700';
    document.getElementById("txt").innerHTML = "A little more patient";
  }
  if(distance > 0 && distance <=1 ){
    document.getElementById("button5").style.background='#008000';
    document.getElementById("txt").innerHTML = "GO GO GO GO!!!";
  }
  if(distance < 0){
    distance = 30;
  }
}, 1000);

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});