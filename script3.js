/*
function onClick() {
    var btn = document.getElementById("button5");
        btn.style.position = "relative" ;
        btn.style.left = Math.floor((Math.random()*200))+"px",
        btn.style.top =Math.floor((Math.random()*200))+"px",
}
*/
document.getElementById("button5").addEventListener("mouseenter", run);
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
    btn.style.left = Math.floor((Math.random() * 800)) + "px";
   btn.style.top = Math.floor((Math.random() * 600)) + "px";
}
