document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
  function calculate() {
    var lover1 = document.getElementById("lover1").value;
    var lover2 = document.getElementById("lover2").value;
    if (lover1 === "Love" && lover2 == "Calculator") {
      window.location.href = "8.html";
    } else if (lover1 || lover2) {
      results.innerText = Math.floor(Math.random() * 100 + 1) + "% !";
      var key = Math.floor(Math.random() * 7 + 1);
      var quote = "SDsasdF";
      switch (key) {
        case 1:
          quote = "But you're not really looking for love, are you?";
          break;
        case 2:
          quote =
            "If you're looking for love, forget it. This is just a random number generator!";
          break;
        case 3:
          quote =
            "Seriously, you need a better outlet than entering your names here.";
          break;
        case 4:
          quote = "They're not worth it, yo, you're better than this!";
          break;
        case 5:
          quote = "Love doesn't come easy, my dear!";
          break;
        case 6:
          quote = "Maybe you and me would be better!";
          break;
        default:
          quote = "Wack lmao";
          break;
      }
      message.innerText = quote;
    } else {
      results.innerText = results.innerText.substring(
        results.innerText.length
      );

      message.innerText = "Enter names!";
    }
  }

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });