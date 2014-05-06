function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "refillDetails";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.refillDetails = Ti.UI.createWindow({
        backgroundColor: "white",
        barColor: "#ee6e1a",
        title: "Refill Details",
        id: "refillDetails"
    });
    $.__views.refillDetails && $.addTopLevelView($.__views.refillDetails);
    $.__views.__alloyId4 = Ti.UI.createView({
        width: Ti.UI.FILL,
        backgroundColor: "white",
        id: "__alloyId4"
    });
    $.__views.refillDetails.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        color: "#ee6e1a",
        width: Ti.UI.FILL,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: 10,
        left: 5,
        right: 5,
        text: "Here goes the details about this refill",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;