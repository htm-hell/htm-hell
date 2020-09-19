var ok=0;
function lose() {
  if (ok === 1) {
    ok=0;
  window.location.href = "6512bd43d9caa6e02c990b0a82652dca.html";
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