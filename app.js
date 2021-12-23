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
	const markerDiv = document.createElement("img");
	markerDiv.setAttribute("rotation", "0 0 0");
	markerDiv.setAttribute("position", "0 0 0");
	if (modelId == "1") {
		markerDiv.setAttribute("src", "models/Image/Osaka.gif");
		markerDiv.setAttribute("scale", "1 1 1");
	}
	else if (modelId == "3") {
		markerDiv.setAttribute("src", "models/Image/butterflies.gif");
		markerDiv.setAttribute("scale", "1 1 1");
	}
	else if (modelId == "2") {
		markerDiv.setAttribute("src", "models/Image/love.png");
		markerDiv.setAttribute("scale", "1 1 1");
	}
	else if (modelId == "4") {
		markerDiv.setAttribute("src", "models/Image/4.jpg");
		markerDiv.setAttribute("scale", "1 1 1");
	} else {
		markerDiv.setAttribute("src", "models/Image/5.jpg");
		markerDiv.setAttribute("scale", "1 1 1");
	}
	var element = document.getElementById("#modelEntity");
	element.appendChild(markerDiv);
	setInterval(() => {
		const el = document.getElementsByTagName('img').offsetLeft;
		console.log(el < 0 ? 'hidden' : 'visible');

	}, 500);
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

