import React, { Component } from 'react';

//import '../styles.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='App'>
        <h1>Meals Managed</h1>
        <h3>A place to curate your weekly meal plan with ease.</h3>
        <div className='mealInputs'>
          <label>Sunday</label>
          <input type='text' name='day' id='sunday' />
          {/* <label>Monday</label>
          <input type='text' name='day' id='monday' />
          <label>Tuesday</label>
          <input type='text' name='day' id='tuesday' />
          <label>Wednesday</label>
          <input type='text' name='day' id='wednesday' />
          <label>Thursday</label>
          <input type='text' name='day' id='thursday' />
          <label>Friday</label>
          <input type='text' name='day' id='friday' />
          <label>Saturday</label>
          <input type='text' name='day' id='saturday' /> */}
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;