import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <p>Add Option Selector</p>
        <form>
          <select>
            <option value=''>-- pick a model --</option>
            {data.map(msgData => 
              <option key={msgData.name} value={msgData.name}>{msgData.name} ({msgData.year})
              </option>
            )}
          </select>
        </form>
      </div>
    );
  }
}

const data = [
  {
    name: 'Ivel Z3',
    manufacturer: 'Ivasim',
    year: 1969,
    origin: 'Croatia'
  },
  {
    name: 'Bally Astrocade',
    manufacturer: 'Bally Consumer Products',
    year: 1977,
    origin: 'USA'
  },
  {
    name: 'Sord M200 Smart Home Computer',
    manufacturer: 'Sord Computer Corporation',
    year: 1971,
    origin: 'Japan'
  },
  {
    name: 'Commodore 64',
    manufacturer: 'Commodore',
    year: 1982,
    origin: 'USA'
  }
];

export default App;
