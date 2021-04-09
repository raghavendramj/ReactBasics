import { Component } from "react";

export class Cricket extends Component {
    constructor(props) {
        super(props);
        this.playShot = this.playShot.bind(this);
    }

    playShot() {
        console.log(this);
    }

    render() {
        return (
            <button onClick={this.playShot}> Play the shot!</button>
        );
    }
}