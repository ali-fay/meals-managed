import React, { Component } from 'react';
//import styles from '../styles.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='App'>
        <h1>Meals Managed</h1>
        <h3>A place to curate your weekly meal plan with ease.</h3>
        <input type='text' list='days' name='Day' id='day' />
        <datalist id='days'>
          <option value='Sunday' />
          <option value='Monday' />
          <option value='Tuesday' />
          <option value='Wednesday' />
          <option value='Thursday' />
          <option value='Friday' />
          <option value='Saturday' />
        </datalist>
        <input type='text' name='mealName' />
        <button>Submit</button>
      </div>
    );
  }
}

export default App;