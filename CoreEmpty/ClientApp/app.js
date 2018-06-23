"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var MailBox_1 = require("./Components/MailBox");
var c = 4;
var a = 'a789';
var func = function (input) {
    return input * 2;
};
console.log(func(22));
var d = React.createElement(MailBox_1.default, { name: "aidos" });
ReactDOM.render(d, document.getElementById('app'));
//# sourceMappingURL=app.js.map