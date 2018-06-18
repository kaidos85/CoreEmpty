import * as React from "react";
import * as ReactDOM from "react-dom";
import MailBox from "./Components/MailBox";

let c: number = 4;
let a: string = 'aasdf';

var func = function (input: number): number {
    return input * 2;
}

console.log(func(22));

let d = <MailBox name="aidos" />;
ReactDOM.render(d, document.getElementById('app'));