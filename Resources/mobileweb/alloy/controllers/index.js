function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
<<<<<<< HEAD
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.CFG.nav = $.nav;
    $.nav.open();
=======
    $.__views.indexWeb = Ti.UI.createWindow({
        backgroundColor: "white",
        barColor: Alloy.Globals.clientColor,
        navTintColor: "White",
        id: "indexWeb"
    });
    $.__views.indexWeb && $.addTopLevelView($.__views.indexWeb);
    $.__views.landing = Ti.UI.createWindow({
        backgroundColor: "white",
        barColor: Alloy.Globals.clientColor,
        navTintColor: "White",
        navBarHidden: "true",
        modal: true,
        id: "landing",
        title: "mscripts Pharmacy"
    });
    $.__views.landingView = Ti.UI.createView({
        top: 0,
        height: Titanium.UI.SIZE,
        id: "landingView"
    });
    $.__views.landing.add($.__views.landingView);
    $.__views.navGroup = Ti.UI.MobileWeb.createNavigationGroup({
        window: $.__views.landing,
        id: "navGroup"
    });
    $.__views.indexWeb.add($.__views.navGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.CFG.nav = $.navGroup;
    $.indexWeb.open();
    var profileController = Alloy.createController("landing");
    var myview = profileController.getView();
    $.landingView.add(myview);
>>>>>>> 5f142d6494ba35b3265d2501a44576ec9d757a47
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;