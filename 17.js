var ok=0;
function lose() {
  if (ok === 1) {
    ok=0;
  window.location.href = "11.html";
}
}
function exit(){
  ok=0;
}

function start() {
  ok=1;
}

function end() {
  if ( ok === 1 ){
    window.location.href = "final.html";
  }

}

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});