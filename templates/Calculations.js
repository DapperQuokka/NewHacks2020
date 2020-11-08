function RTCalc(num) {
  var colour1 = document.getElementById("dd1").value;
  var colour2 = document.getElementById("dd2").value;
  var multBand = document.getElementById("dd3").value;
  var tolBand = document.getElementById("dd4").value;

  var colour = [colour1, colour2, multBand, tolBand];

  document.documentElement.style.setProperty("--color" + num, colour[num - 1]);

  bandColours = [];

  for (bandNum = 0; bandNum < 4; bandNum++) {
    if (bandNum == 0 || bandNum == 1) {
      if (colour[bandNum] == "Black") bandColours.push(0);
      else if (colour[bandNum] == "Brown") bandColours.push(1);
      else if (colour[bandNum] == "Red") bandColours.push(2);
      else if (colour[bandNum] == "Orange") bandColours.push(3);
      else if (colour[bandNum] == "Yellow") bandColours.push(4);
      else if (colour[bandNum] == "Green") bandColours.push(5);
      else if (colour[bandNum] == "Blue") bandColours.push(6);
      else if (colour[bandNum] == "Purple") bandColours.push(7);
      else if (colour[bandNum] == "Grey") bandColours.push(8);
      else if (colour[bandNum] == "White") bandColours.push(9);
      else print("Colour not valid");
    } else if (bandNum == 2) {
      if (multBand == "Black") mult = 1;
      else if (multBand == "Brown") mult = 10;
      else if (multBand == "Red") mult = 100;
      else if (multBand == "Orange") mult = 1000;
      else if (multBand == "Yellow") mult = 10000;
      else if (multBand == "Green") mult = 100000;
      else if (multBand == "Blue") mult = 1000000;
      else if (multBand == "Purple") mult = 10000000;
      else if (multBand == "Grey") mult = 100000000;
      else if (multBand == "White") mult = 1000000000;
      else if (multBand == "Gold") mult = 0.1;
      else if (multBand == "Silver") mult = 0.01;
      else print("Colour not valid");
    } else if (bandNum == 3) {
      if (tolBand == "Brown") tolerance = 1;
      else if (tolBand == "Red") tolerance = 2;
      else if (tolBand == "Green") tolerance = 0.5;
      else if (tolBand == "Blue") tolerance = 0.25;
      else if (tolBand == "Purple") tolerance = 0.1;
      else if (tolBand == "Grey") tolerance = 0.05;
      else if (tolBand == "Gold") tolerance = 5;
      else if (tolBand == "Silver") tolerance = 10;
      else print("Colour not valid");
    }
  }

  resistance = (bandColours[0] * 10 + bandColours[1]) * mult;

  var output;

  if (resistance >= 1000000000)
    output = resistance / 1000000000 + "GΩ ± " + tolerance + "%";
  else if (resistance >= 1000000)
    output = resistance / 1000000 + "MΩ ± " + tolerance + "%";
  else if (resistance >= 1000)
    output = resistance / 1000 + "kΩ ± " + tolerance + "%";
  else 
    output = resistance + "Ω ± " + tolerance + "%";

  document.getElementsByTagName("p")[0].innerHTML = output;
}
