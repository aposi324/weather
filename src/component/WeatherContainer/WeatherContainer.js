import React, { Component } from 'react';

import './weatherContainer.css';
import WeatherDisplay from './WeatherDisplay/WeatherDisplay'
//import './App.css';

//api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}

class WeatherContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {temperature: null, weather: null};
    }

    render(){
        return(
            <div className="root">
                <div className = "contentContainer">
                    <div className = "zipContainer">
                        <input className="zipInput" placeholder = "Zip Code"></input>
                        <button className = "zipButton" value="Go!">Go!</button>
                    </div>
                    <WeatherDisplay weather="rain"/>
                </div>
            </div>
        );
    }
}

//5188726 - Emmaus city ID
export default WeatherContainer;
