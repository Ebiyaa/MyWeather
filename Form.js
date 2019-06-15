import React, { Component } from 'react'

class Form extends Component {

  render() {
    return (
      <div>
          <form onSubmit={this.props.getWeather}>
            <input  name="city" type="text" placeholder="City..."></input>
            <input name="country" type="text" placeholder="Country initial"></input>
            <button>Get Weather</button>
          </form>
      </div>
    );
  }
}

export default Form
