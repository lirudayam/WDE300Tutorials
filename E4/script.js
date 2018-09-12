var bPicture1Shown = true;

function changeImage() {
	var oImage = document.getElementById("picture");
	
	if (bPicture1Shown === true) {
		oImage.src = "http://www.gstatic.com/webp/gallery/2.jpg";
		bPicture1Shown = false;
	}
	else {
		oImage.src = "http://www.gstatic.com/webp/gallery/1.jpg";
		bPicture1Shown = true;
	}
	
	console.log("Function changeImage has been called");
}