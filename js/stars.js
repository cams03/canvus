document.addEventListener("DOMContentLoaded", function () {
	console.log("Script initialisé");
	let canvas = document.getElementById("canvas");
	let Context = canvas.getContext("2d");
	let StarTable = new Array;
	Star(Context, StarTable);
});

/******************************************************Générateur d'étoiles**/
let Star = function (ct, tab) {
	ct.fillStyle = "white";
	for (let i = 0; i != 50; i++) {
		ct.rect(Math.floor(Math.random() * 800), Math.floor(Math.random() * 600), 0.5, 0.5);
		ct.fill();
	} ct.beginPath();
	for (let i = 0; i != 200; i++) {
		ct.rect(Math.floor(Math.random() * 800), Math.floor(Math.random() * 600), 1, 1);
		ct.fill();
	} ct.beginPath();
	for (let i = 0; i != 100; i++) {
		ct.rect(Math.floor(Math.random() * 800), Math.floor(Math.random() * 600), 2, 2);
		ct.fill();
	} ct.beginPath();
	for (let i = 0; i != 5; i++) {
		let x = Math.floor(Math.random() * 800);
		let y = Math.floor(Math.random() * 600);
		tab.push({x, y});
		ct.rect(x, y, 3, 3);
		ct.rect((x + 1), y, 1, -4);
		ct.rect((x + 1), y, 1, 7);
		ct.rect(x, (y + 1), -2, 1);
		ct.rect(x, (y + 1), 5, 1);
		ct.fill();
		ct.beginPath();
	}
};

/****************************************************************************/
