var aPictures = ["http://www.gstatic.com/webp/gallery/1.jpg", "http://www.gstatic.com/webp/gallery/2.jpg", "http://www.gstatic.com/webp/gallery/3.jpg", "http://www.gstatic.com/webp/gallery/4.jpg"];
var iPosition = 0;

function changeImage() {
	var oImage = document.getElementById("picture");
	
	iPosition++;
	if(iPosition === aPictures.length) {
		iPosition = 0;
	}
	
	var oParent = oImage.parentNode;
	var oClone = oImage.cloneNode(true);
	oClone.src = aPictures[iPosition];
	
	oParent.appendChild(oClone);
	
	console.log("Function changeImage has been called");
}