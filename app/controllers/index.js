function doClick(e) {
    alert($.label.text);
}

$.index.open();

var Barcode = require('ti.barcode');
Barcode.addEventListener('success', function(e){
	alert(e.result);
});
Barcode.capture();


