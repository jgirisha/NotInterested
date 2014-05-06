var args = arguments[0] || {};

if(OS_IOS){
$.refillSuccess.backButtonTitle = "";
 var buttonbar = Ti.UI.createButtonBar({ width:10, height:30, labels:[] }); 
 $.refillSuccess.leftNavButton = buttonbar;
}

function doneClicked(){
	 
	 Ti.App.fireEvent('closeView');
	 $.refillSuccess.close({
	 	animated: false
	 });
	 
}

$.refillSuccess.addEventListener('android:back',function(ev){
	Ti.App.fireEvent('closeView');
	 $.refillSuccess.close();

});