var args = arguments[0] || {};
var loadSuccessPageFlag = 0;


function orderRefillClicked(){
	
	$.dialog.message = "Are you sure you want to fill Rx#49303003 at mscripts Test Store?";
	
		$.dialog.addEventListener('click',function(ev){
			ev.cancelBubble = true;
			$.dialog.removeEventListener('click',function(){
						$.dialog.hide();
			});
		console.log(ev.index);
		if(ev.index == 0 && loadSuccessPageFlag == 0){
			loadSuccessPageFlag ++;
			loadSuccessPage();
		}
			
		
	});
	$.dialog.show();

	
}


function loadSuccessPage(){
	
	Ti.App.addEventListener('closeView',function(ev){
		$.refillDetails.close({
			animated: false
		});
	});

	
	var xpng=require('xpng');
	xpng.openWin(Alloy.CFG.nav,'refillSuccess');

}
