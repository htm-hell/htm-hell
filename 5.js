
//init();
document.querySelector('.btn-roll').addEventListener('click', function() {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        setTimeout(function(){
          if(dice1 + dice2 < 8)
          {
            window.location.replace("a87ff679a2f3e71d9181a67b7542122c");
        }else {
            window.location.replace("1679091c5a880faf6fb5e6087eb1b2dc");
          }
        },2000);

});

function init() {


    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});