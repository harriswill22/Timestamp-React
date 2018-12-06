import React, { Component } from 'react';
import './App.css';
import DateList from './DateList'

const someDates =[
  '2018-12-06 09:21:21',
  '2018-12-06 09:21:21',
  '2018-12-06 09:21:21'
]


class App extends Component {
  render() {

  const datesAsListItems = someDates.map((dateString) => {
      return (<li>{dateString}</li>);
    });
    console.log(datesAsListItems);
    console.log('yep that was the datesAsListItems');
    
    return (
      <div className="main-component">
        <button className="my-button"> Click me </button>
    
      <DateList
      dates={datesAsListItems}
      />
      </div>
    );
  }
}

export default App;
