import React, { Component } from 'react';
import { Car } from "./car";

export class Garage extends React.Component {
    constructor() {
        super();
        this.state = { location: 'Bangalore' };
    }

    render() {
        const carName = "Brezza";
        const carInfo = { name: 'Toyota', model: 'Innova' };
        return (
            <div>
                <h1>Who lives in my garage?</h1>
                <Car noOfWheels="Five" brand="Benz" carName={carName} carInfo={carInfo} location={this.state.location} />
            </div>
        );
    }
}