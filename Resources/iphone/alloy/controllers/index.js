function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.landing = Ti.UI.createWindow({
        backgroundColor: "white",
        barColor: "#ee6e1a",
        id: "landing",
        title: "mscripts Pharmacy"
    });
    $.__views.__alloyId1 = Alloy.createController("landing", {
        id: "__alloyId1",
        __parentSymbol: $.__views.landing
    });
    $.__views.__alloyId1.setParent($.__views.landing);
    $.__views.nav = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.landing,
        id: "nav"
    });
    $.__views.nav && $.addTopLevelView($.__views.nav);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.CFG.nav = $.nav;
    $.nav.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;