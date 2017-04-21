document.addEventListener("DOMContentLoaded", function() {
console.log("stat chargé");

//le local STorage
//tableau vide
let results = [];
//valeur à stocker
//let scoreEnd = localStorage.setItem('score', cpt);
//valeur de sortie
let store;
//si fin de la partie (je sais , je me répète)
if(timeLeft>0) {
  let points = localStorage.getItem("score");
  let store = results.push(points);
  return store;
}
console.log(store);
});
