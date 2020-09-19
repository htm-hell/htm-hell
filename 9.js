var clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    if ( clicks === 16){
      window.location.href = "10.html";
    };
};


document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});