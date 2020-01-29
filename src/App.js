import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}

class App extends Component {
  constructor(props){
    
    super(props);
    this.state = {weather: [],
                  temp: -1,
                  API_KEY: '13b5c578eab6ede9ba1437b0998accc7'
                  };
                      
    fetch(`//api.openweathermap.org/data/2.5/weather?zip=18049&APPID=${this.state.API_KEY}`)
    .then( response => response.json() )
    .then( data => {
      console.log(data);
      this.setState({weather: data});
    })
    .catch(console.log)
  }

  componentDidMount() {
    
    fetch(`//api.openweathermap.org/data/2.5/weather?zip=18049&APPID=${this.state.API_KEY}`)
      .then( response => response.json() )
      .then( data => {
        console.log(data);
        this.setState({weather: data,
                      temp: data.main.temp});
      })
      .catch(console.log)
    }
  render() {
    return (null);
    /*
    return (
      <div>
        <div>
          {JSON.stringify( this.state.weather) }
        </div>
        <div>
          <h1>Temperature: </h1>{this.state.temp}
        </div>
      </div>
    );
    */
  }
}

//5188726 - Emmaus city ID
export default App;
