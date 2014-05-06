function Controller() {
<<<<<<< HEAD
=======
    function orderRefillClicked() {
        $.dialog.message = "Are you sure you want to fill Rx#49303003 at mscripts Test Store?";
        $.dialog.addEventListener("click", function(ev) {
            ev.cancelBubble = true;
            $.dialog.removeEventListener("click", function() {
                $.dialog.hide();
            });
            console.log(ev.index);
            if (0 == ev.index && 0 == loadSuccessPageFlag) {
                loadSuccessPageFlag++;
                loadSuccessPage();
            }
        });
        $.dialog.show();
    }
    function loadSuccessPage() {
        Ti.App.addEventListener("closeView", function() {
            $.refillDetails.close({
                animated: false
            });
        });
        var xpng = require("xpng");
        xpng.openWin(Alloy.CFG.nav, "refillSuccess");
    }
>>>>>>> 5f142d6494ba35b3265d2501a44576ec9d757a47
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "refillDetails";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
<<<<<<< HEAD
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
=======
    var __defers = {};
    $.__views.refillDetails = Ti.UI.createWindow({
        backgroundColor: "white",
        barColor: Alloy.Globals.clientColor,
        navTintColor: "White",
        id: "refillDetails",
        title: "Confirm details"
    });
    $.__views.refillDetails && $.addTopLevelView($.__views.refillDetails);
    $.__views.__alloyId3 = Ti.UI.createView({
        top: 0,
        height: Titanium.UI.SIZE,
        backgroundColor: "white",
        id: "__alloyId3"
    });
    $.__views.refillDetails.add($.__views.__alloyId3);
    $.__views.detailsScrollView = Ti.UI.createScrollView({
        top: 0,
        width: "100%",
        height: Ti.UI.FILL,
        showVerticalScrollIndicator: true,
        showHorizontalScrollIndicator: false,
        backgroundColor: "white",
        id: "detailsScrollView"
    });
    $.__views.__alloyId3.add($.__views.detailsScrollView);
    $.__views.detailView = Ti.UI.createView({
        top: "10dp",
        height: "auto",
        left: "10dp",
        right: "10dp",
        width: "auto",
        backgroundColor: "white",
        id: "detailView",
        layout: "vertical"
    });
    $.__views.detailsScrollView.add($.__views.detailView);
    $.__views.messageLabel = Ti.UI.createLabel({
        color: "#999",
        width: Ti.UI.FILL,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: "5dp",
        left: "10dp",
        right: "10dp",
        height: "auto",
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        font: {
            fontSize: 14
        },
        text: "You're almost done! Just double-check these details before you order your refill.",
        id: "messageLabel"
    });
    $.__views.detailView.add($.__views.messageLabel);
    $.__views.prescriptionView = Ti.UI.createView({
        top: "10dp",
        height: "20dp",
        backgroundColor: "#eeeeee",
        width: "100%",
        id: "prescriptionView"
    });
    $.__views.detailView.add($.__views.prescriptionView);
    $.__views.prescriptionLabel = Ti.UI.createLabel({
        color: "#999",
        width: "100%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        left: "10dp",
        height: "20dp",
        right: "10dp",
        text: "Prescription to refill",
        id: "prescriptionLabel"
    });
    $.__views.prescriptionView.add($.__views.prescriptionLabel);
    $.__views.rxNameLabel = Ti.UI.createLabel({
        color: "black",
        width: Ti.UI.FILL,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: "10dp",
        left: "10dp",
        right: "10dp",
        height: "auto",
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        font: {
            fontSize: 16,
            fontWeight: "bold"
        },
        text: "Atorvastatin, 10mg tablet",
        id: "rxNameLabel"
    });
    $.__views.detailView.add($.__views.rxNameLabel);
    $.__views.rxDetails = Ti.UI.createView({
        top: 0,
        height: Titanium.UI.SIZE,
        id: "rxDetails"
    });
    $.__views.detailView.add($.__views.rxDetails);
    $.__views.rxNumStoreLabel = Ti.UI.createLabel({
        color: "#999",
        width: Ti.UI.FILL,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: "5dp",
        left: "10dp",
        right: "30%",
        height: "auto",
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        font: {
            fontSize: 11
        },
        text: "RX#49303003 at mscripts Test Store",
        id: "rxNumStoreLabel"
    });
    $.__views.rxDetails.add($.__views.rxNumStoreLabel);
    $.__views.expLabel = Ti.UI.createLabel({
        color: "#999",
        width: Ti.UI.FILL,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        top: "5dp",
        left: "10dp",
        right: "10dp",
        height: "auto",
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        font: {
            fontSize: 9
        },
        text: "Exp. 7/13/13",
        id: "expLabel"
    });
    $.__views.rxDetails.add($.__views.expLabel);
    $.__views.storeView = Ti.UI.createView({
        top: "10dp",
        height: "20dp",
        backgroundColor: "#eeeeee",
        width: "100%",
        id: "storeView"
    });
    $.__views.detailView.add($.__views.storeView);
    $.__views.storeLabel = Ti.UI.createLabel({
        color: "#999",
        width: "100%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        left: "10dp",
        height: "20dp",
        right: "10dp",
        text: "Pickup location",
        id: "storeLabel"
    });
    $.__views.storeView.add($.__views.storeLabel);
    $.__views.storeDetails = Ti.UI.createView({
        top: 0,
        height: Titanium.UI.SIZE,
        id: "storeDetails"
    });
    $.__views.detailView.add($.__views.storeDetails);
    $.__views.storeMapImage = Ti.UI.createImageView({
        left: "10dp",
        top: "5dp",
        width: "70dp",
        height: "70dp",
        bottom: "5dp",
        right: "10dp",
        backgroundColor: "white",
        borderColor: "#999",
        borderWidth: "1dp",
        id: "storeMapImage",
        image: "/images/map.png"
    });
    $.__views.storeDetails.add($.__views.storeMapImage);
    $.__views.storeAddressDetails = Ti.UI.createView({
        top: "5dp",
        height: Titanium.UI.SIZE,
        left: "90dp",
        right: "10dp",
        id: "storeAddressDetails",
        layout: "vertical"
    });
    $.__views.storeDetails.add($.__views.storeAddressDetails);
    $.__views.storeAddressLabel = Ti.UI.createLabel({
        color: "#999",
        width: Ti.UI.FILL,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: "5dp",
        left: "10dp",
        right: "10dp",
        height: "auto",
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        text: "789 Mission St.",
        id: "storeAddressLabel"
    });
    $.__views.storeAddressDetails.add($.__views.storeAddressLabel);
    $.__views.cityStateLabel = Ti.UI.createLabel({
        color: "#999",
        width: Ti.UI.FILL,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 0,
        left: "10dp",
        right: "10dp",
        height: "auto",
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        font: {
            fontSize: 12
        },
        text: "San Francisco, CA, 94103",
        id: "cityStateLabel"
    });
    $.__views.storeAddressDetails.add($.__views.cityStateLabel);
    $.__views.pinImage = Ti.UI.createImageView({
        left: "10dp",
        top: "9dp",
        width: "20dp",
        height: "20dp",
        right: "10dp",
        backgroundColor: "white",
        id: "pinImage",
        image: "/images/distancePin.png"
    });
    $.__views.storeAddressDetails.add($.__views.pinImage);
    $.__views.disatanceLabel = Ti.UI.createLabel({
        color: "#999",
        width: Ti.UI.FILL,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: "-17dp",
        left: "30dp",
        right: "10dp",
        height: "auto",
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        font: {
            fontSize: 11
        },
        text: "0.81 mi away",
        id: "disatanceLabel"
    });
    $.__views.storeAddressDetails.add($.__views.disatanceLabel);
    $.__views.contactView = Ti.UI.createView({
        top: "10dp",
        height: "20dp",
        backgroundColor: "#eeeeee",
        width: "100%",
        id: "contactView"
    });
    $.__views.detailView.add($.__views.contactView);
    $.__views.contactLabel = Ti.UI.createLabel({
        color: "#999",
        width: "100%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: 14,
            fontWeight: "bold"
        },
        left: "10dp",
        height: "20dp",
        right: "10dp",
        text: "Contact information",
        id: "contactLabel"
    });
    $.__views.contactView.add($.__views.contactLabel);
    $.__views.contactDetails = Ti.UI.createView({
        top: 0,
        height: Titanium.UI.SIZE,
        id: "contactDetails"
    });
    $.__views.detailView.add($.__views.contactDetails);
    $.__views.contactLabel = Ti.UI.createLabel({
        color: "#999",
        width: Ti.UI.FILL,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: "5dp",
        left: "10dp",
        right: "10dp",
        height: "auto",
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        font: {
            fontSize: 14
        },
        text: "Mobile number",
        id: "contactLabel"
    });
    $.__views.contactDetails.add($.__views.contactLabel);
    $.__views.contactValueLabel = Ti.UI.createLabel({
        color: "#999",
        width: Ti.UI.FILL,
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        top: "5dp",
        left: "10dp",
        right: "10dp",
        height: "auto",
        verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        font: {
            fontSize: 14
        },
        text: "516 910 9301",
        id: "contactValueLabel"
    });
    $.__views.contactDetails.add($.__views.contactValueLabel);
    $.__views.orderRefillButton = Ti.UI.createButton({
        top: "20dp",
        left: "5dp",
        width: Ti.UI.FILL,
        height: "40dp",
        right: "5dp",
        bottom: "5dp",
        backgroundColor: Alloy.Globals.clientColor,
        color: "White",
        selectedColor: "black",
        borderRadius: 5,
        title: "Order refill",
        id: "orderRefillButton"
    });
    $.__views.detailView.add($.__views.orderRefillButton);
    orderRefillClicked ? $.__views.orderRefillButton.addEventListener("click", orderRefillClicked) : __defers["$.__views.orderRefillButton!click!orderRefillClicked"] = true;
    var __alloyId5 = [];
    __alloyId5.push("Yes");
    __alloyId5.push("No");
    $.__views.dialog = Ti.UI.createAlertDialog({
        buttonNames: __alloyId5,
        id: "dialog",
        title: "Confirmation",
        message: "Are you sure you want to fill this prescription?",
        cancel: "1"
    });
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var loadSuccessPageFlag = 0;
    __defers["$.__views.orderRefillButton!click!orderRefillClicked"] && $.__views.orderRefillButton.addEventListener("click", orderRefillClicked);
>>>>>>> 5f142d6494ba35b3265d2501a44576ec9d757a47
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;