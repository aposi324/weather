import React, { Component } from 'react';

//api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}


const WeatherDisplay = props => {
        return <div> {props.weather} </div>;
};

export default WeatherDisplay;
