document.addEventListener("DOMContentLoaded", function() {

let start = prompt("Entrez votre prénom :");
alert("Bonjour " + start + "," + " on y va ?");

});

function spawnPlanet() {

  const margin = 20;
  // VISIBILITE BON / MAUVAIS
  const elemType = Math.floor(Math.random()*2); //tirage aléatoire d'un nombre entre 0 et 2
  let newPlanet = document.createElement("img");
  newPlanet.className += "fly"

  if(elemType === 0) {
    newPlanet.src = "solar-system.png";
  } else {
    newPlanet.src = "saturn.png";
  }

  document.getElementById('jeu').appendChild(newPlanet);

  // DEFINITION DES DIRECTIONS
  // 0:top, 1:right, 2:bottom, 3:left
  const side = Math.floor(Math.random() * 4);// tirage aléatoire d'un nombre entre 0 et 4 qui définira le point de départ
  const fromX = Math.floor(Math.random()* (window.innerWidth - 2*margin))+margin;//tirage aléatoire d'un nombre entre 20 (margin) et 980 (largeur de la fenêtre - margin) afin de définir une position horizontale
  const fromY = Math.floor(Math.random()*(window.innerHeight - 2*margin))+margin;
  console.log(side);

  if(side === 0) { // top
    newPlanet.style.top = 0;
    newPlanet.style.left = fromX;
    newPlanet.style.animationName = "fly-from-top";

    console.log('side0 : '+newPlanet);
  } else if (side === 1) { // right
    newPlanet.style.right = 0;
    newPlanet.style.top = fromY;
    newPlanet.style.animationName = "fly-from-right";

    console.log('side1 : '+newPlanet);
  } else if (side === 2) { // bottom
    newPlanet.style.bottom = 0;
    newPlanet.style.left = fromX;
    newPlanet.style.animationName = "fly-from-bottom";

    console.log('side2 : '+newPlanet);
  } else if (side === 3) { // left
    newPlanet.style.left = 0;
    newPlanet.style.top = fromY;
    newPlanet.style.animationName = "fly-from-left";

    console.log('side3 : '+newPlanet);
  }

};

setInterval(spawnPlanet, 2000);

var score = 0;
score.alert("Votre score est de");

switch (score) {
case score < 50 :
    alert("T'es bidon");
    break;
case score > 51 && score < 100:
    alert("Pas mal mais peut mieux faire");
    break;
case score > 100:
    alert("T'es un killer!!!");
    break;
default:
    alert("Je ne comprends pas abruti!");
}
