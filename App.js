import React, { useState } from 'react';
import './App.css';
import { Component } from 'react';

class App extends Component {

updateSelection = () => {};
  
  const data = {
    "Ivel Z3": {
      manufacturer: "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    "Bally Astrocade": {
      manufacturer: "Bally Consumer Products",
      year: 1977,
      origin: "USA"
    },
    "Sord M200 Smart Home Computer": {
      manufacturer: "Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    "Commodore 64": {
      manufacturer: "Commodore",
      year: 1982,
      origin: "USA"
    }
  }

render() {
  return (
    <div className="App">
      <select id="computerType" value={this.state.value} onChange={updateSelection()}>
        <option value= "">-- pick a model --</option>
        <option value= {JSON.stringify(Object.keys(data)[0])}> {Object.keys(data)[0]} ({(data[Object.keys(data)[0]].year)}) </option>
        <option value= {JSON.stringify(Object.keys(data)[1])}> {Object.keys(data)[1]} ({(data[Object.keys(data)[1]].year)}) </option>
        <option value= {JSON.stringify(Object.keys(data)[2])}> {Object.keys(data)[2]} ({(data[Object.keys(data)[2]].year)}) </option>
        <option value= {JSON.stringify(Object.keys(data)[3])}> {Object.keys(data)[3]} ({(data[Object.keys(data)[3]].year)}) </option>
</select >
    </div>
  )  
 };
}

export default App
