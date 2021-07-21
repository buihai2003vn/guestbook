let zoom = document.getElementById("book");
let coverRight = document.getElementsByClassName("cover_back_right");
let transformLayer = document.getElementsByClassName("layer5");
let fadedLayer = document.getElementsByClassName("layerStatic");
let closePageBook = document.getElementsByClassName("layer5_left");
let flatPageBook = document.getElementsByClassName("layer5_right");
let coverLeft = document.getElementsByClassName("cover_back_left");
let button = document.getElementById("btn");
let leftSide = document.getElementById("left_side");
let mid = document.getElementsByClassName("cover_back_mid");
let rightSide = document.getElementById("right_side");

zoom.onclick = function() {
	zoomOut();
	transformCover();
	staticLayer();
};

let zoomOut = () => {
	zoom.style.transform = "scale(2)";
};

let transformCover = () => {
	coverLeft[0].setAttribute("style", "transform: none;");
	coverRight[0].setAttribute("style", "transform: none;");
};

let staticLayer = () => {
	transformLayer[0].setAttribute(
		"style",
		"transform: translate3d(0px, 0px, 20px) rotateY(0deg); border-right: none; box-shadow: none;"
	);
	transformLayer[1].setAttribute(
		"style",
		"transform: translate3d(0px, 0px, 20px) rotateY(0deg); border-left: none; box-shadow: none;"
	);
	fadedLayer[0].setAttribute(
		"style",
		"transform: translate3d(0px, 0px, 0px) rotateY(0deg)"
	);
	fadedLayer[1].setAttribute(
		"style",
		"transform: translate3d(0px, 0px, 5px) rotateY(0deg)"
	);
	fadedLayer[2].setAttribute(
		"style",
		"transform: translate3d(0px, 0px, 10px) rotateY(0deg)"
	);
	fadedLayer[3].setAttribute(
		"style",
		"transform: translate3d(0px, 0px, 15px) rotateY(0deg)"
	);
	fadedLayer[4].setAttribute(
		"style",
		"transform: translate3d(0px, 0px, 0px) rotateY(0deg)"
	);
	fadedLayer[5].setAttribute(
		"style",
		"transform: translate3d(0px, 0px, 5px) rotateY(0deg)"
	);
	fadedLayer[6].setAttribute(
		"style",
		"transform: translate3d(0px, 0px, 10px) rotateY(0deg)"
	);
	fadedLayer[7].setAttribute(
		"style",
		"transform: translate3d(0px, 0px, 15px) rotateY(0deg)"
	);
	setTimeout(function() { transformLayer[1].classList.add("zoomLayer5");}, 1500);
};

button.onclick = () => close();

let close = () => {
	closePageBook[0].classList.add("zoomOver");
	closeBook();
};

function closeBook() {
	for (let i = 0; i < fadedLayer.length; i++) fadedLayer[i].style.visibility = "hidden";
	leftSide.classList.toggle("turn");
	mid[0].classList.toggle("turn_mid");
	transformLayer[1].classList.toggle("showUp");
	setTimeout(function(){ closePageBook[0].classList.add("return_static");}, 2500);
}