function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "contactInfo";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.winContactInfo = Ti.UI.createWindow({
        backgroundColor: "white",
        barColor: Alloy.Globals.clientColor,
        navTintColor: "White",
        id: "winContactInfo",
        title: "Enter our contact info"
    });
    $.__views.winContactInfo && $.addTopLevelView($.__views.winContactInfo);
    $.__views.__alloyId0 = Ti.UI.createView({
        top: 0,
        height: Titanium.UI.SIZE,
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.winContactInfo.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;