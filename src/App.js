import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import addProduct from './actions/addProduct'


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

class App extends Component {
  state = {};

  handleChange = event => {
    const updatedValue = event.target.value
    this.setState({ selectVal: updatedValue })
    const datas = data.filter(prod => prod.name === updatedValue)
  }

  handleSubmit = event => {
    this.props.dispatch({
      type: 'ADD_PRODUCT',
      payload: this.setState
    })
    event.preventDefault();
    console.log('click')
  };

  render() {
     return (
      <div className='App'>
        <p>Add Option Selector</p>
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange} value={this.state.selectVal}>
            <option value=''>-- pick a model --</option>
            {data.map(msgData => 
              <option key={msgData.name} value={msgData.name}>{msgData.name} ({msgData.year})
              </option>
            )}
          </select>
          <button type="submit" onClick={this.handleSubmit}>Add</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

export default connect(mapStateToProps)(App)