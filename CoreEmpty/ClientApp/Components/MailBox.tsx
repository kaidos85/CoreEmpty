import * as React from "react";
import * as ReactDOM from "react-dom";

let func = function (input: number, str: string): string {
    return `${str} = ${input * 2}`;
}

interface MailProps {
    name: string;
}

interface MailState {
    age: number;
}

export default class MailBox extends React.Component<MailProps, MailState> {

    constructor(props: MailProps, state: MailState) {
        super(props, state);
        this.state = {
            age: 16
        };        
    }

    changeName() {
        var num = Math.floor(Math.random() * 100);
        console.log(num);
        this.setState({ age: num });         
    }

    render() {
        return (
            <div className="shopping-list">
                <h1>User Name: {this.props.name} age is: {this.state.age}</h1>
                <ul>
                    <li>Instagram {func(4, 'qwer')}</li>
                    <li>WhatsApp {func(5, 'asdf')}</li>
                    <li>Telegram {func(7, 'zxcv')}</li>
                </ul>
                <button onClick={()=> this.changeName()}>Click me</button>
            </div>
        );
    }
}