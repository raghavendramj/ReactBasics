import React, { Component } from 'react';

export class Car extends Component {

    constructor(props) {
        super(props);
        this.state = { color: 'red', brand: 'Toyota', model: 'Fortuner', noOfWheels: "Ten" };
        console.log("Lifecycle check! -> 01");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Lifecycle check! -> 02");
        return { color: 'red', brand: 'Toyota', model: 'Fortuner' };
    }

    changeColor = () => {
        this.setState({ color: 'blue' });
    }

    updateBrand = () => {

        console.log(this);
        console.log(this.state);

        // this.state = {color: 'Yellow'}; -> This way is wrong
        this.setState({ brand: this.props.brand });
    }

    updateModel = () => {
        this.setState({ model: this.props.carInfo.model });
    }

    render() {
        console.log("Lifecycle check! -> 03 ");
        return <h2> Hi, I am a {this.state.color} Car!
            <div> Brand of the car {this.state.brand}</div>
            <div> Model of the car {this.state.model}</div>
            <button type="button" class="btn btn-primary" onClick={this.changeColor}> Change color</button>
            <br />
            <button type="button" class="btn btn-primary" onClick={this.updateBrand}> Change Brand</button>
            <br />
            <button type="button" onClick={this.updateModel}> Change Model</button>
        </h2>;
    }
    componentDidMount() {
        setTimeout(() => {
            console.log("Lifecycle check! -> 04 ");
            this.setState({ noOfWheels: this.props.noOfWheels });
            console.log(this.state);
        }, 1000);
    }
}
