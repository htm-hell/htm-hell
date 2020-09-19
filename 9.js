var clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    if ( clicks === 16){
      window.location.href = "d3d9446802a44259755d38e6d163e820.html";
    };
};


document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});