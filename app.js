function loadMarkers() {
	// Get Query Parameters
	const urlParams = new URLSearchParams(window.location.search)
	let imageId = urlParams.get("image")
	let modelId = urlParams.get("model")
	let modelType = urlParams.get("type")
	console.log(imageId);
	console.log(modelId);
	console.log(modelType);



	// Upadate tracking image URL
	// let baseUrl = "https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/trensertest/webar-demo/main/track/";
	// let imageSample = baseUrl + imageId + ".mind;";
	// imageSample = "imageTargetSrc: " + imageSample;
	// console.log(imageSample);

	// var sceneNode = document.getElementById("#scene");
	// sceneNode.setAttribute("mindar-image", imageSample);

	if (modelType == "3d") {
		load3dModles();
	}
	else if (modelType == "2d") {
		loadImages();
	}
	else if (modelType == "text") {
		loadText()
	}
}

function load3dModles() {
	const urlParams = new URLSearchParams(window.location.search)
	let modelId = urlParams.get("model")

	const markerDiv = document.createElement("a-gltf-model");
	//markerDiv.setAttribute("animation","property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate");
	markerDiv.setAttribute("rotation", "0 0 0");
	markerDiv.setAttribute("position", "0 0 0");


	if (modelId == "1") {
		markerDiv.setAttribute("gltf-model", "models/3D/characterlowpoly2c3.glb");
		markerDiv.setAttribute("scale", "0.5 0.5 0.5");
	} else if (modelId == "2") {
		markerDiv.setAttribute("gltf-model", "models/3D/raccoon/scene.gltf");
		markerDiv.setAttribute("scale", "0.05 0.05 0.05");
	} else if (modelId == "3") {
		markerDiv.setAttribute("gltf-model", "models/3D/trex/scene.gltf");
		markerDiv.setAttribute("scale", "0.025 0.025 0.025");
	} else if (modelId == "4") {
		markerDiv.setAttribute("gltf-model", "models/3D/bear/scene.gltf");
		markerDiv.setAttribute("scale", "0.05 0.05 0.05");
	} else if (modelId == "5") {
		markerDiv.setAttribute("gltf-model", "models/3D/cutecat.glb");
		markerDiv.setAttribute("scale", "0.25 0.25 0.25");
	} else {
		markerDiv.setAttribute("gltf-model", "models/3D/skyscraper.gltf");
		markerDiv.setAttribute("scale", "0.05 0.05 0.05");
	}
	var element = document.getElementById("#modelEntity");
	element.appendChild(markerDiv);
}

function loadImages() {
	const urlParams = new URLSearchParams(window.location.search)
	let modelId = urlParams.get("model")
	const markerDiv = document.createElement("canvas");
	markerDiv.setAttribute("rotation", "0 0 0");
	markerDiv.setAttribute("position", "0 0 0");
	markerDiv.setAttribute("class", "example");
	markerDiv.setAttribute("scale", "1 1 1");
	markerDiv.setAttribute("visibility", "hidden");

	// if( modelId == "1"){
	// 	markerDiv.setAttribute("src", "models/Image/Osaka.gif");
	// 	markerDiv.setAttribute("scale", "1 1 1");
	// }
	// else if( modelId == "3"){
	// 	markerDiv.setAttribute("src", "models/Image/butterflies.gif");
	// 	markerDiv.setAttribute("scale", "1 1 1");
	// }
	// else if( modelId == "2"){
	// 	markerDiv.setAttribute("src", "models/Image/love.png");
	// 	markerDiv.setAttribute("scale", "1 1 1");
	// }
	// else if( modelId == "4"){
	// 	markerDiv.setAttribute("src", "models/Image/4.jpg");
	// 	markerDiv.setAttribute("scale", "1 1 1");
	// } else {
	// 	markerDiv.setAttribute("src", "models/Image/5.jpg");
	// 	markerDiv.setAttribute("scale", "1 1 1");
	// }
	// var sceneEl = document.querySelector('a-scene');
	let options = {
		root: document.querySelector('a-scene'),
		rootMargin: '0px',
		threshold: 1.0
	}
	let callBackfun = (entries, observer) => {
		if(entries[0].isVisible){
			console.log('I am ready!');
			console.log(entries);
			console.log(observer);
			document.getElementsByClassName('example')[0].setAttribute('visibility','visible');
			gifler('https://anishjiben.github.io/webar-demo-main/models/Image/butterflies.gif').animate('.example')
		}
	}
	let observer = new IntersectionObserver(callBackfun, options);

	// AFRAME.registerComponent('do-something-once-loaded', {
	// 	init: function () {
	// 		// This will be called after the entity has properly attached and loaded.
	// 		console.log('I am ready!');
	// 		gifler('https://anishjiben.github.io/webar-demo-main/models/Image/butterflies.gif').animate('.example')
	// 	}
	// });
	var entityEl = document.getElementById('#modelEntity');
	entityEl.appendChild(markerDiv);
	observer.observe(entityEl);
	// sceneEl.appendChild(entityEl);
	// entityEl.setAttribute('do-something-once-loaded', '');

	// var element = document.getElementById("#modelEntity");
	// element.setAttribute('do-something-once-loaded', '');
	// element.appendChild(markerDiv);
}


function loadText() {
	const urlParams = new URLSearchParams(window.location.search)
	let modelId = urlParams.get("model")
	const markerDiv = document.createElement("a-text");
	markerDiv.setAttribute("value", modelId);
	markerDiv.setAttribute("scale", "1 1 1");
	markerDiv.setAttribute("color", "black");
	markerDiv.setAttribute("rotation", "0 0 0");
	markerDiv.setAttribute("position", "0 0 0");
	var element = document.getElementById("#modelEntity");
	element.appendChild(markerDiv);
}

