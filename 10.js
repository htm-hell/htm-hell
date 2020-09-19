    // random value generated
    var y = Math.floor(Math.random() * 10 + 1);
    // counting the number of guesses
    // made for correct Guess
    var guess = 1;

    document.getElementById("submitguess").onclick = function () {
      // number guessed by user
      var x = document.getElementById("guessField").value;
      if (x == y) {
        alert(
          "CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS "
        );
        window.location.href = "6512bd43d9caa6e02c990b0a82652dca.html";
      } else if (x > y) {
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
      } else {
        alert("OOPS SORRY!! TRY A GREATER NUMBER");
      }
      document.getElementById("guessField").value = "";
      guess++;
      guessDisplay.innerText = guess;
    };

    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });