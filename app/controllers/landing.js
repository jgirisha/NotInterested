var args = arguments[0] || {};

$.logoImage.image =  "/images/"+Alloy.Globals.clientName+"/image_HeaderLogo.png";

function switchClient(){
	

	if(Alloy.Globals.clientName === "mscripts"){
		Alloy.Globals.clientName = "meijer";
		Alloy.Globals.clientColor = "#0062A5";
		
	}
	else{
		Alloy.Globals.clientName = "mscripts";
		Alloy.Globals.clientColor = "#ee6e1a";
	}
	
	$.logoImage.image =  "/images/"+Alloy.Globals.clientName+"/image_HeaderLogo.png";
	$.rbs.color = Alloy.Globals.clientColor;
	$.rbs.borderColor = Alloy.Globals.clientColor;
	
	$.scan.color = Alloy.Globals.clientColor;
		$.scan.borderColor = Alloy.Globals.clientColor;
		
			$.switchClient.color = Alloy.Globals.clientColor;

	$.footerLabel.backgroundColor = Alloy.Globals.clientColor;


}

function rbsClicked(){
	var xpng=require('xpng');
	xpng.openWin(Alloy.CFG.nav,'refillDetails');
}

function scanClicked(){
	    Barcode.capture({
        animate: true,
        overlay: overlay,
        showCancel: true,
        showRectangle: true,
        keepOpen: true
    });

}
if(!OS_MOBILEWEB){
var Barcode = require('ti.barcode');
Barcode.allowRotation = true;
Barcode.displayedMessage = '';
Barcode.allowMenu = false;
Barcode.allowInstructions = true;
Barcode.useLED = false;

var overlay = Ti.UI.createView({
    backgroundColor: 'transparent',
    top: 0, right: 0, bottom: 0, left: 0
});

var lblInsructionTop = Ti.UI.createLabel({
    text: 'Show us the prescription you want to refill.', textAlign: 'center',
    color: '#fff', backgroundColor: 'transparent',
    font: { fontWeight: 'bold', fontSize: 16 },
    borderColor: 'transparent',
    opacity: 1,
    width: 400, height: 30,
    top: 10
});
overlay.add(lblInsructionTop);

var lblInsructionBottom = Ti.UI.createLabel({
    text: "Center the bar code within the rectangle. Hold the phone still from 6-8 inches away until it's scanned.", textAlign: 'center',
    color: '#fff', backgroundColor: 'transparent',
    font: {fontSize: 14 },
    borderColor: 'transparent', 
    opacity: 1,
    width: 450, height: 40,
    bottom: 0
});
overlay.add(lblInsructionBottom);

Barcode.addEventListener('success', function(e){
	Barcode.cancel();
	alert('Success called with barcode: ' + e.result);
	loadNextPage();
});

Barcode.addEventListener('error', function(e){
	Barcode.cancel();
	alert('No valid barcode found. Please scan again.');
});

function loadNextPage(){
	var xpng=require('xpng');
	xpng.openWin(Alloy.CFG.nav,'refillDetails');

}
}
