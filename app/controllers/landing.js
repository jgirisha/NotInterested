var args = arguments[0] || {};

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
        /*,
        acceptedFormats: [
            Barcode.FORMAT_QR_CODE
        ]*/
    });

}


var Barcode = require('ti.barcode');
Barcode.allowRotation = true;
Barcode.displayedMessage = "Center the bar code within the rectangle. Hold the phone still from 6-8 inches away until it's scanned.";
Barcode.allowMenu = false;
Barcode.allowInstructions = true;
Barcode.useLED = false;




var overlay = Ti.UI.createView({
    backgroundColor: 'transparent',
    top: 0, right: 0, bottom: 0, left: 0
});

var lblInsruction = Ti.UI.createLabel({
    title: 'Show us the prescription you want to refill.', textAlign: 'center',
    color: '#fff', backgroundColor: 'transparent',
    font: { fontWeight: 'bold', fontSize: 16 },
    borderColor: '#000', borderRadius: 10, borderWidth: 1,
    opacity: 0.5,
    width: 600, height: 30,
    top: 10
});

overlay.add(lblInsruction);

Barcode.addEventListener('success', function(e){
		Barcode.cancel();

	Ti.API.info('Success called with barcode: ' + e.result);
	alert('Success called with barcode: ' + e.result);
	loadNextPage();
});

function loadNextPage(){
		var xpng=require('xpng');
	xpng.openWin(Alloy.CFG.nav,'refillDetails');

}
