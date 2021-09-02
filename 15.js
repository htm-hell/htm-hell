/*document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });*/
    function switchLight(num) {
        var sound = document.getElementById("click");
        sound.play();
      output.innerText = output.innerText + num;
    }
    function check() {
      var x = output.innerText;
      if (x === "69420") {
        // ye boi
        window.location.href = "c74d97b01eae257e44aa9d5bade97baf";
      } else {
        output.innerText = output.innerText.substring(output.innerText.length);
      }
    }
    function erase() {
      var length = output.innerText.length;
      output.innerText = output.innerText.substring(0, length - 1);
    }