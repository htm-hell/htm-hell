
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
            window.location.replace("pag1.html");
        }else {
            window.location.replace("pag4.html");
          }
        },2000);

});

function init() {


    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}
