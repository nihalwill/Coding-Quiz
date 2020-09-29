function loadScores() {
  var highScores = [];

  if (JSON.parse(localStorage.getItem("scores")) !== null) {
    highScores = JSON.parse(localStorage.getItem("scores"));
  }

  var colEl = document.querySelector("#highscore-table");
  for (i = 0; i < highScores.length; i++) {
    var rowEl = document.createElement("div");
    rowEl.setAttribute("class", "row mb-1");
    colEl.append(rowEl);

    var colEl2 = document.createElement("div");
    colEl2.setAttribute("class", "col-12 text-center");
    rowEl.append(colEl2);

    var parEl = document.createElement("div");
    parEl.innerHTML =
      "Initials: " +
      highScores[i].initials +
      "   Score: " +
      highScores[i].highScore;
    colEl2.append(parEl);
  }

  home.addEventListener("click", function () {
    window.location.replace("./index.html");
  });
}
loadScores();
