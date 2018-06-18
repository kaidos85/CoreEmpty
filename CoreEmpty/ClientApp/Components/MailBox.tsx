import * as React from "react";
import * as ReactDOM from "react-dom";

let func = function (input: number, str: string): string {
    return `Some text: ${str} = ${input * 2}`;
}

interface MailProps {
    name: string;
}

export default class MailBox extends React.Component<MailProps, {}> {

    constructor(props: MailProps) {
        super(props);
    }

    render() {        
        return (
            <div className="shopping-list">
                <h1>Shopping List for Mail for {this.props.name}</h1>
                <ul>
                    <li>Instagram {func(4, 'qwer')}</li>
                    <li>WhatsApp {func(5, 'asdf')}</li>
                    <li>Oculus {func(7, 'zxcv')}</li>
                </ul>
            </div>
        );
    }
}