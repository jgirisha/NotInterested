var args = arguments[0] || {};
alert(args.rxNumber);

function btnNextClicked() {
	// alert("In Return!!");
	if ((parseInt($.txtmobilenumber.value) != null) || (parseInt($.txtmobilenumber.value) != "")) {
		var xpng = require('xpng');
		xpng.openWin(Alloy.CFG.nav, 'refillDetails', {
        mobileNumber: $.txtmobilenumber.value
    });
	} else {
		alert("Please enter the mobile number.");
	}
}
