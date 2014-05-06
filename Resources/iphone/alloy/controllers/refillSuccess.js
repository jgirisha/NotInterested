function Controller() {
    function doneClicked() {
        Ti.App.fireEvent("closeView");
        $.refillSuccess.close({
            animated: false
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "refillSuccess";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.refillSuccess = Ti.UI.createWindow({
        backgroundColor: "white",
        barColor: Alloy.Globals.clientColor,
        navTintColor: "White",
        titleAttributes: {
            color: "white"
        },
        id: "refillSuccess",
        title: "Your refill is on the way!"
    });
    $.__views.refillSuccess && $.addTopLevelView($.__views.refillSuccess);
    $.__views.__alloyId7 = Ti.UI.createView({
        top: 0,
        height: Titanium.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId7"
    });
    $.__views.refillSuccess.add($.__views.__alloyId7);
    $.__views.successScrollView = Ti.UI.createScrollView({
        top: 0,
        width: "100%",
        height: Ti.UI.FILL,
        showVerticalScrollIndicator: true,
        showHorizontalScrollIndicator: false,
        backgroundColor: "white",
        id: "successScrollView"
    });
    $.__views.__alloyId7.add($.__views.successScrollView);
    $.__views.detailView = Ti.UI.createView({
        top: "0dp",
        height: "auto",
        left: "0dp",
        right: "0dp",
        width: "100%",
        backgroundColor: "white",
        id: "detailView",
        layout: "vertical"
    });
    $.__views.successScrollView.add($.__views.detailView);
    $.__views.successImage = Ti.UI.createImageView({
        id: "successImage",
        image: "/images/imgRefillSuccess.png"
    });
    $.__views.detailView.add($.__views.successImage);
    $.__views.messageLabel = Ti.UI.createLabel({
        color: "#999",
        width: Ti.UI.FILL,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "30dp",
        left: "10dp",
        right: "10dp",
        height: "auto",
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        font: {
            fontSize: 14
        },
        text: "Your refill order has been sent and will be ready to pickup on:",
        id: "messageLabel"
    });
    $.__views.detailView.add($.__views.messageLabel);
    $.__views.pickupDetails = Ti.UI.createView({
        top: 0,
        height: Titanium.UI.SIZE,
        id: "pickupDetails"
    });
    $.__views.detailView.add($.__views.pickupDetails);
    $.__views.pickupImage = Ti.UI.createImageView({
        left: "30dp",
        top: "15dp",
        width: "60dp",
        height: "60dp",
        bottom: "15dp",
        right: "10dp",
        backgroundColor: "white",
        id: "pickupImage",
        image: "/images/calendar.png"
    });
    $.__views.pickupDetails.add($.__views.pickupImage);
    $.__views.pickupDateDetails = Ti.UI.createView({
        top: "15dp",
        height: Titanium.UI.SIZE,
        left: "110dp",
        right: "30dp",
        id: "pickupDateDetails",
        layout: "vertical"
    });
    $.__views.pickupDetails.add($.__views.pickupDateDetails);
    $.__views.dateLabel = Ti.UI.createLabel({
        color: "#999",
        width: Ti.UI.FILL,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: "5dp",
        left: "10dp",
        right: "10dp",
        height: "auto",
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        font: {
            fontSize: 15,
            fontWeight: "bold"
        },
        text: "Thursday, Sept 17",
        id: "dateLabel"
    });
    $.__views.pickupDateDetails.add($.__views.dateLabel);
    $.__views.timeLabel = Ti.UI.createLabel({
        color: "black",
        width: Ti.UI.FILL,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: "5dp",
        left: "10dp",
        right: "10dp",
        height: "auto",
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        font: {
            fontSize: 17,
            fontWeight: "bold"
        },
        text: "4:30 PM",
        id: "timeLabel"
    });
    $.__views.pickupDateDetails.add($.__views.timeLabel);
    $.__views.doneButton = Ti.UI.createButton({
        top: "5dp",
        left: "5dp",
        width: Ti.UI.FILL,
        height: "40dp",
        right: "5dp",
        bottom: "5dp",
        backgroundColor: Alloy.Globals.clientColor,
        color: "White",
        selectedColor: "black",
        borderRadius: 5,
        title: "Done",
        id: "doneButton"
    });
    $.__views.detailView.add($.__views.doneButton);
    doneClicked ? $.__views.doneButton.addEventListener("click", doneClicked) : __defers["$.__views.doneButton!click!doneClicked"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.refillSuccess.backButtonTitle = "";
    var buttonbar = Ti.UI.createButtonBar({
        width: 10,
        height: 30,
        labels: []
    });
    $.refillSuccess.leftNavButton = buttonbar;
    $.refillSuccess.addEventListener("android:back", function() {
        Ti.App.fireEvent("closeView");
        $.refillSuccess.close();
    });
    __defers["$.__views.doneButton!click!doneClicked"] && $.__views.doneButton.addEventListener("click", doneClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;