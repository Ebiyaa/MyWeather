import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const API_KEY = "7d60608c25ac5d93b845fcee5063dc4d";
const URL = 'http://api.openweathermap.org/data/2.5/weather?q=';

class App extends Component {

  state= {
    temp:'',
    humidity:'',
    conditions:'',
  }

  getWeather = async(e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    //api call
    const api_call = await axios.get(`${URL}${city},${country}&APPID=${API_KEY}`);
    const data = api_call.data;
    console.log(data);
    this.setState({
      temp: data.main.temp,
      humidity: data.main.humidity,
      conditions: data.weather[0].description
    })

  }
  render() {
    return (
      <div className="App">

        <div className='title'>
          <h1 style={{fontWeight: 'bold', fontSize: 54}}>Weather Finder</h1>
          <p style={{fontSize: 30}}>Find out about temperature, conditions and more...</p>
          <p className='ter'>Yaaaayyyy I did it!!🤓😉😇</p>
        </div>

        <div className='form'>

          <p>Enter city name and country initial...</p>

          <form onSubmit={this.getWeather}>
            <input  name="city" type="text" placeholder="City..." className='tpt'></input>
            <input name="country" type="text" placeholder="Country initial" className='tpt'></input>
            <button className='btn'>Get Weather</button>
          </form>

          <p>Temperature: {this.state.temp}</p>
          <p>Humidity: {this.state.humidity}</p>
          <p>Conditions: {this.state.conditions}</p>

        </div>

      </div>
     
    );
  }
}

export default App;
