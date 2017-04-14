 const margin = 20;
  let cpt = 0;

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

     let newPlanet = document.createElement("img"); // création d'un élément image

     if (elemType === 0) {
         newPlanet.src = "pics/earth.png"; // élément à toucher pour gagner 5 pts
         newPlanet.className += " goodplanet";
     } else {
         newPlanet.src = "pics/hell.png"; // élément à éviter
         newPlanet.className += " badplanet";
     }
     newPlanet.className += " fly";

     newPlanet.onmouseover = function () {
         mouseOver(this)
     };

     document.getElementById('main').appendChild(newPlanet); //rattache l'objet créé à son parent (#jeu)

     direction(newPlanet);

     newPlanet.addEventListener('animationend', function () {
         this.parentNode.removeChild(this);
     });

 };

 let planetTimer = setInterval(spawnPlanet, 2000);
 document.addEventListener("DOMContentLoaded", spawnPlanet());

 if (cpt > 5 && cpt <10) {
   planetTimer = setInterval(spawnPlanet, 1000);
 } else if (cpt >= 10 && cpt < 15) {
   planetTimer = setInterval(spawnPlanet, 0700);
 } else if (cpt > 15) {
   planetTimer = setInterval(spawnPlanet, 0500);
 }

 function spawnBonus() {

     const margin = 20;

     const elemType = Math.floor(Math.random() * 2);

     let newBonus = document.createElement("img");

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

     newBonus.onmouseover = function () {
         mouseOver(this)
     };

     document.getElementById('main').appendChild(newBonus);

     direction(newBonus);

     newBonus.addEventListener('animationend', function () {
         this.parentNode.removeChild(this);
     });
 };

 let bonusTimer = setInterval(spawnBonus, 9000);
 document.addEventListener("DOMContentLoaded", spawnBonus());

 // TRAINEE
 window.addEventListener("mousemove", function (evenementmousemove) {
     document.getElementById("cursorperso").style.top = evenementmousemove.clientY - 50 + 'px';
     document.getElementById("cursorperso").style.left = evenementmousemove.clientX - 50 + 'px';
 });

 (function batCursor() {

     var width = window.innerWidth;
     var height = window.innerHeight;
     var cursor = {
         x: width / 2,
         y: width / 2
     };

     function init() {
         bindEvents();

         loop();
     }

     function bindEvents() {
         document.addEventListener('mousemove', onMouseMove);
         window.addEventListener('resize', onWindowResize);
     }

     function onWindowResize(e) {
         width = window.innerWidth;
         height = window.innerHeight;
     }

     function onTouchMove(e) {
         if (e.touches.length > 0) {
             for (var i = 0; i < e.touches.length; i++) {
                 //addParticle(e.touches[i].clientX, e.touches[i].clientY);
             }
         }
     }

     function onMouseMove(e) {
         cursor.x = e.clientX;
         cursor.y = e.clientY;

         //addParticle(cursor.x, cursor.y);
     }

     /*function addParticle(x, y) {
         var particle = new Particle();
         particle.init(x, y);
         particles.push(particle);
     }*/

     /*function updateParticles() {
         for (var i = 0; i < particles.length; i++) {
             particles[i].update();
         }

         for (var i = particles.length - 1; i >= 0; i--) {
             if (particles[i].lifeSpan < 0) {
                 particles[i].die();
                 particles.splice(i, 1);
             }
         }

     }*/

     function loop() {
         requestAnimationFrame(loop);

     }

     /*function Particle() {

         this.lifeSpan = 200;

         this.init = function (x, y) {

             this.velocity = {
                 x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 2),
                 y: (-2.5 + (Math.random() * -1))
             };

             this.position = {
                 x: x - 1,
                 y: y - 1
             };

             this.element = document.createElement('span');
             this.element.className = "particle-santa"
             this.update();

             document.body.appendChild(this.element);
         };

         this.update = function () {
             this.position.x += this.velocity.x;
             this.position.y += this.velocity.y;

             this.velocity.x += (Math.random() < 0.5 ? -1 : 1) * 2 / 75;
             this.velocity.y -= Math.random() / 600;
             this.lifeSpan--;

             this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + (0.2 + (250 - this.lifeSpan) / 250) + ")";
         }

         this.die = function () {
             this.element.parentNode.removeChild(this.element);
         }
     }

     function attachInitialParticleStyles() {

         var initialStyles = [
            ".particle-santa {",
            "position: absolute;",
            "display: block;",
            "pointer-events: none;",
            "z-index: 10000000;",
            "width: 20px;",
            "height: 20px;",
            "background-size: contain;",
            "background-image: url(pics/santa.png);",
           "}"].join('');

         var style = document.createElement('style')
         style.type = 'text/css'
         style.innerHTML = initialStyles;
         document.getElementsByTagName('head')[0].appendChild(style)
     };*/

     init();
 })();

 // mouseOver allez salut !



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


 let timeLeft = 30;
 let timer = document.getElementById("timer");
 let popup = document.getElementById("score");
 let cover = document.getElementById("cover");
 let rejouer = document.getElementById("rejouer");

 // compteur de points

 function compteur() {

     let baclette = document.getElementById("baclette");
 }



 //Fenetre score final + chrono


 function countdown() {

     if (timeLeft < 0) {
         clearTimeout(timerId);
         clearTimeout(planetTimer);
         clearTimeout(bonusTimer);
         let paragraph = document.getElementById("result");
         if (cpt < 20) {
             paragraph.innerHTML = "Ton score est de : " + cpt + ". La honte sur toi Maurice !!";
         } else if (cpt < 80) {
             paragraph.innerHTML = "Mouais ton score est de : " + cpt + ". Tu peux faire mieux mon vieux !";
         } else {
             paragraph.innerHTML = "Ton score est de : " + cpt + ". T'es un killer !!";
         }

         document.querySelector("h1").appendChild(paragraph);
         cover.classList.add("visible");
         popup.classList.add("visible");

     } else {
         timer.innerHTML = timeLeft;
         timeLeft--;
    }
 };

 let timerId = setInterval(countdown, 1000);
 document.addEventListener("DOMContentLoaded", countdown());

 rejouer.addEventListener("click", function () {
     cover.classList.remove("visible");
     popup.classList.remove("visible");
     cpt = 0;
     timeLeft = 30;
     countdown();
     timerId = setInterval(countdown, 1000);
     spawnPlanet();
     spawnBonus();
     planetTimer = setInterval(spawnPlanet, 0700);
     bonusTimer = setInterval(spawnBonus, 9000);


 });




 //MUSIC PLAY ON OFF

 document.getElementById('mute').addEventListener("click", function () {
     document.getElementById('music').pause();
     document.getElementById('sound').classList.add('visible');
     document.getElementById('mute').classList.remove('visible');
 });

 document.getElementById('sound').addEventListener("click", function () {
     document.getElementById('music').play();
     document.getElementById('sound').classList.remove('visible');
     document.getElementById('mute').classList.add('visible');
 });
