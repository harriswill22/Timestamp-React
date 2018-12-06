import React, { Component } from 'react';
import './App.css';
import DateList from './DateList'

// const someDates =[
//   '2018-12-06 09:21:21',
//   '2018-12-06 09:21:21',
//   '2018-12-06 09:21:21'
// ]


class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      dates: [
      '2018-9-06 09:21:21',
      '2019-5-06 09:21:21',
      '2020-12-06 09:21:21']

    };
  }
  render() {
    return (
      <div className="main-component">
        <button onClick={() => {
          const newDate =new Date();
          // someDates.push(newDate);
          this.setState({
            
              // replace the value of dates 
              // with a new array
              dates: [
              // it should contain 
              // all the existing values from this.state
              ...this.state.dates,

              // also new date object as string
              newDate.toLocaleString()
            ]
          });
        }} 
        className="my-button"> Click me </button>
    
      <DateList
      dates={this.state.dates}
      />
      </div>
    );
  }
}

export default App;
