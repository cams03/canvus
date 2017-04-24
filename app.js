const margin = 20;

function direction(el) {

  // DEFINITION DES DIRECTIONS
  // 0:top, 1:right, 2:bottom, 3:left
  const side = Math.floor(Math.random() * 4); // tirage aléatoire d'un nombre entre 0 et 4 qui définira le point de départ

  const fromX = Math.floor(Math.random() * (window.innerWidth - 2 * margin)) + margin; //tirage aléatoire d'un nombre entre 20 (margin) et 980 (largeur de la fenêtre - margin) afin de définir une position horizontale

  const fromY = Math.floor(Math.random() * (window.innerHeight - 2 * margin)) + margin; //tirage aléatoire d'un nombre entre 20 (margin) et 980 (largeur de la fenêtre - margin) afin de définir une position verticale

  if (side === 0) { // top
    el.style.top = 0;
    el.style.left = fromX + "px";
    el.style.animationName = "fly-from-top";

  } else if (side === 1) { // right
    el.style.right = 0;
    el.style.top = fromY + "px";
    el.style.animationName = "fly-from-right"

  } else if (side === 2) { // bottom
    el.style.bottom = 0;
    el.style.left = fromX + "px";
    el.style.animationName = "fly-from-bottom";

  } else if (side === 3) { // left
    el.style.left = 0;
    el.style.top = fromY + "px";
    el.style.animationName = "fly-from-left";
  }
}

function spawnPlanet() {

  // VISIBILITE BON / MAUVAIS
  const elemType = Math.floor(Math.random() * 2); //tirage aléatoire d'un nombre entre 0 et 2 (car 2 éléments 1 bon et 1 mauvais)
  //  console.log("spawning");

  let newPlanet = document.createElement("img"); // création d'un élément image

  if (elemType === 0) {
    newPlanet.src = "pics/earth.png"; // élément à toucher pour gagner 5 pts
    newPlanet.className += " goodplanet";
  } else {
    newPlanet.src = "pics/hell.png"; // élément à éviter
    newPlanet.className += " badplanet";
  }
  newPlanet.className += " fly";

  newPlanet.onmouseover = function() {
    mouseOver(this)
  };

  document.getElementById('main').appendChild(newPlanet); //rattache l'objet créé à son parent (#jeu)

  direction(newPlanet);

  newPlanet.addEventListener('animationend', function() {
    this.parentNode.removeChild(this);
  });
};

 let planetTimer;

 function spawnBonus() {

     const margin = 20;
     const elemType = Math.floor(Math.random() * 2);
     let newBonus =document.createElement('img');

  if (elemType === 0) {
    newBonus.src = "pics/chrono.svg";
    newBonus.className += "chrono";
    newBonus.style.width = 128 + "px";
  } else {
    newBonus.src = "pics/star.svg";
    newBonus.className += "booster";
    newBonus.style.width = 128 + "px";
  }
  newBonus.className += " fly";

  newBonus.onmouseover = function() {
    mouseOver(this)
  };

  document.getElementById('main').appendChild(newBonus);

  direction(newBonus);

  newBonus.addEventListener('animationend', function() {
    this.parentNode.removeChild(this);
  });
})

 let bonusTimer;

 //CURSEUR

 window.addEventListener("mousemove", function(evenementmousemove) {
     document.getElementById("cursorperso").style.top = evenementmousemove.clientY - 50 + 'px';
     document.getElementById("cursorperso").style.left = evenementmousemove.clientX - 50 + 'px';
 });

 function mouseOver(el) {
     if (el.classList.contains("goodplanet")) {
         el.style.display = "none";
         cpt++;
         document.getElementById("baclette").innerHTML = "Score : " + cpt;

     } else if (el.classList.contains("chrono")) {
         el.style.display = "none";
         timeLeft = timeLeft + 9;
         timer.innerHTML = timeLeft;

     } else if (el.classList.contains("booster")) {
         el.style.display = "none";
         cpt = cpt + 5;
         document.getElementById("baclette").innerHTML = "Score : " + cpt;

     } else if (el.classList.contains("badplanet")) {
         if (cpt > 0) {
             el.style.display = "none";
             cpt--;
             document.getElementById("baclette").innerHTML = "Score : " + cpt;
         } else {
             el.style.display = "none";
             document.getElementById("baclette").innerHTML = "Score : 0";
         }
     }
 }

 let cpt = 0;
 let timeLeft = 30;
 //my highscore
 let highscore = 0;
 let timer = document.getElementById("timer");
 let popup = document.getElementById("score");
 let cover = document.getElementById("cover");
 let rejouer = document.getElementById("rejouer");

 // compteur de points
 function compteur() {
     //span où le score est affiché
     let baclette = document.getElementById("baclette");
 }

 //TODO multiple levels
 /*function level() {

   if(!planetTimer) return;

   //planetTimer exists... go ahead
   if (cpt >= 40) {
     clearInterval(planetTimer);
    //  delete planetTimer;
     planetTimer = setInterval(spawnPlanet, 500);
     console.log(1,planetTimer);
   } else if (cpt >= 20) {
     clearInterval(planetTimer);
    //  delete planetTimer;
     planetTimer = setInterval(spawnPlanet, 700);
     console.log(2,planetTimer);
   } else if (cpt >= 5) {
     clearInterval(planetTimer);
    //  delete planetTimer;
     planetTimer = setInterval(spawnPlanet, 1000);
     console.log(3,planetTimer);
   }

 }
level();*/
//var vide
let array = [];
 //Fenetre score final + chrono
 function countdown() {
     //si le temps est �coul�
     if (timeLeft < 0) {
         //clearInterval suspend le timer,le bonus et les planètes
         clearInterval(timerId);
         clearInterval(planetTimer);
         clearInterval(bonusTimer);
         //ranger tous les points dans un tableau
             //stocker la valeur cpt
             let results = array.push(cpt);
             //faire une loop for pour ajouter les points dans le tableau
             for(let i = 0;i < results.length; i++) {
               console.log('score n°', i, ' : ', cpt);
             }
             console.log(array);

         /*Math.max => prendre le plus grand nombre dans le tableau
         .apply => pour l'appliquer dans un tableau sans répéter toutes les valeurs en détail du tableau array
         (null, array) => Si au moins un des arguments ne peut pas être converti en un nombre, le résultat sera NaN donc le null(représente la nullité au sens où aucune valeur pour l'objet n'est présente).*/
             //c'est la fenêtre modale qui apparaît à la fin
             let paragraph = document.getElementById("result");
             //si le cpt (cad les points) est inférieur à 20
             if (cpt < 20) {
               paragraph.innerHTML = "Ton score est de : " + cpt + ". La honte sur toi Maurice !!" + " Highscore :" + Math.max.apply(null, array) + " .";
             } else if (cpt < 80) {
               paragraph.innerHTML = "Mouais ton score est de : " + cpt + ". Tu peux faire mieux mon vieux !" + "High score: " + Math.max.apply(null, array) + " .";
             } else {
               paragraph.innerHTML = "T'es un killer !" + " Ton score est de " + cpt + ". High score : " + Math.max.apply(null, array) + " .";
             }
         //va sur le h1 pour introduire une phrase selon les points reçus
         let gameOver = document.getElementById("over");
         gameOver.appendChild(paragraph);
         //classList pour l'ajouter dans les id cover et score
         cover.classList.add("visible");
         popup.classList.add("visible");
         //dans le localStorage, les points sera enregistrer
         localStorage.setItem('highscore', cpt);

     } else {
         //sinon continue à afficher le temps qui reste
         timer.innerHTML = timeLeft;
         timeLeft--;
    }
 };

 //cr�ation d'une variable pour mettre une intervalle réguliere de chaque seconde
 let timerId;

 //add event listener pour rejouer et recommencer à zéro
 rejouer.addEventListener("click", function() {
     cover.classList.remove("visible");
     popup.classList.remove("visible");
     cpt = 0;
     timeLeft = 30;
     cover2.classList.add("visible");
     levels.classList.add("visible");

 });

let easy = document.getElementById("easy");
let medium = document.getElementById("medium");
let hard = document.getElementById("hard");
let cover2 =document.getElementById("cover2");
let levels = document.getElementById("levels");

document.addEventListener("DOMContentLoaded", function() {
    cover2.classList.add("visible");
    levels.classList.add("visible");

})

easy.addEventListener("click", function(){
    cover2.classList.remove("visible");
    levels.classList.remove("visible");
    timerId = setInterval(countdown, 1000);
    planetTimer=setInterval(spawnPlanet, 1000);
    bonusTimer=setInterval(spawnBonus, 9000);
})

medium.addEventListener("click", function(){
    cover2.classList.remove("visible");
    levels.classList.remove("visible");
    timerId = setInterval(countdown, 1000);
    planetTimer=setInterval(spawnPlanet, 700);
    bonusTimer=setInterval(spawnBonus, 9000);
})

hard.addEventListener("click", function(){
    cover2.classList.remove("visible");
    levels.classList.remove("visible");
    timerId = setInterval(countdown, 1000);
    planetTimer=setInterval(spawnPlanet, 500);
    bonusTimer=setInterval(spawnBonus, 9000);
})


 //MUSIC PLAY ON OFF

 document.getElementById('mute').addEventListener("click", function() {
     document.getElementById('music').pause();
     document.getElementById('sound').classList.add('visible');
     document.getElementById('mute').classList.remove('visible');
 });

 document.getElementById('sound').addEventListener("click", function() {
     document.getElementById('music').play();
     document.getElementById('sound').classList.remove('visible');
     document.getElementById('mute').classList.add('visible');
 });
