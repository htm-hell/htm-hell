function myFunctionBoo() {
    document.getElementById("hideaway").style.visibility = "visible";
    var audio = document.getElementById("audio");
    audio.play();
}

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });