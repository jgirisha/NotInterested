if (OS_ANDROID) {
	$.index.open();
} else if (OS_MOBILEWEB) {
		Alloy.CFG.nav = $.navGroup;
	$.indexWeb.open();
	var profileController = Alloy.createController('landing');
	var myview = profileController.getView();
	$.landingView.add(myview);
} else {
	Alloy.CFG.nav = $.nav;
	$.nav.open();
}
