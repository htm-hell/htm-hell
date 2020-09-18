var ok=0;
function lose() {
  ok=0;
  window.location.href = "1.html";
}
function exit(){
  ok=0;
}

function start() {
  ok=1;
}

function end() {
  if ( ok === 1 ){
    window.location.href = "1.html";
  }

}
