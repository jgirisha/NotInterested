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
<<<<<<< HEAD
        barColor: "#ee6e1a",
        id: "winContactInfo",
        title: "Enter your contact info"
    });
    $.__views.winContactInfo && $.addTopLevelView($.__views.winContactInfo);
    $.__views.__alloyId0 = Ti.UI.createView({
        width: Ti.UI.FILL,
=======
        barColor: Alloy.Globals.clientColor,
        navTintColor: "White",
        id: "winContactInfo",
        title: "Enter our contact info"
    });
    $.__views.winContactInfo && $.addTopLevelView($.__views.winContactInfo);
    $.__views.__alloyId0 = Ti.UI.createView({
        top: 0,
        height: Titanium.UI.SIZE,
>>>>>>> 5f142d6494ba35b3265d2501a44576ec9d757a47
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.winContactInfo.add($.__views.__alloyId0);
<<<<<<< HEAD
    $.__views.imgcontactinfo = Ti.UI.createImageView({
        top: 20,
        height: 100,
        id: "imgcontactinfo",
        image: "/images/imgcontact.png",
        width: Ti.UI.SIZE
    });
    $.__views.__alloyId0.add($.__views.imgcontactinfo);
    $.__views.lblcontactinfoinstruction = Ti.UI.createLabel({
        color: "#ee6e1a",
        width: Ti.UI.FILL,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: 10,
        left: 5,
        right: 5,
        id: "lblcontactinfoinstruction",
        text: "Just in case we need to contact you regarding your prescription."
    });
    $.__views.__alloyId0.add($.__views.lblcontactinfoinstruction);
    $.__views.txtmobilenumber = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: 5,
        width: Ti.UI.FILL,
        top: 10,
        left: 5,
        right: 5,
        keyboardType: Titanium.UI.KEYBOARD_PHONE_PAD,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        id: "txtmobilenumber",
        hintText: "Mobile number",
        "return": "btnNextClicked",
        suppressReturn: "false"
    });
    $.__views.__alloyId0.add($.__views.txtmobilenumber);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
=======
    exports.destroy = function() {};
    _.extend($, $.__views);
>>>>>>> 5f142d6494ba35b3265d2501a44576ec9d757a47
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;