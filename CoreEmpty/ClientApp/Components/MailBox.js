"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var func = function (input, str) {
    return "Some text: " + str + " = " + input * 2;
};
var MailBox = /** @class */ (function (_super) {
    __extends(MailBox, _super);
    function MailBox(props) {
        return _super.call(this, props) || this;
    }
    MailBox.prototype.render = function () {
        return (React.createElement("div", { className: "shopping-list" },
            React.createElement("h1", null,
                "Shopping List for Mail for ",
                this.props.name),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Instagram ",
                    func(4, 'qwer')),
                React.createElement("li", null,
                    "WhatsApp ",
                    func(5, 'asdf')),
                React.createElement("li", null,
                    "Oculus ",
                    func(7, 'zxcv')))));
    };
    return MailBox;
}(React.Component));
exports.default = MailBox;
//# sourceMappingURL=MailBox.js.map