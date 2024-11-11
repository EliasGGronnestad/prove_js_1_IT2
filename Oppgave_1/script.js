for (let index = 1; index <= 20; index++) {
  if (index % 2 == 0) {
    document.getElementById("melding").innerHTML +=
      "Tallet " + index + " er ett partall" + "<br><br>";
  } else {
    document.getElementById("melding").innerHTML +=
      "Tallet " + index + " er ett oddetall" + "<br><br>";
  }
}
