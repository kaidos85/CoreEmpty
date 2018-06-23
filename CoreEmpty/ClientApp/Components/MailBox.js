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
    return str + " = " + input * 2;
};
var MailBox = /** @class */ (function (_super) {
    __extends(MailBox, _super);
    function MailBox(props, state) {
        var _this = _super.call(this, props, state) || this;
        _this.state = {
            age: 16
        };
        return _this;
    }
    MailBox.prototype.changeName = function () {
        var num = Math.floor(Math.random() * 100);
        console.log(num);
        this.setState({ age: num });
    };
    MailBox.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "shopping-list" },
            React.createElement("h1", null,
                "User Name: ",
                this.props.name,
                " age is: ",
                this.state.age),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Instagram ",
                    func(4, 'qwer')),
                React.createElement("li", null,
                    "WhatsApp ",
                    func(5, 'asdf')),
                React.createElement("li", null,
                    " ",
                    func(7, 'zxcv'))),
            React.createElement("button", { onClick: function () { return _this.changeName(); } }, "Click me")));
    };
    return MailBox;
}(React.Component));
exports.default = MailBox;
//# sourceMappingURL=MailBox.js.map