import React, { Component } from 'react';
import { render } from 'react-dom';
import Day from './Day.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  //const [sunday, setSundayMeal] = useState('');


  render() {
    return (
      <div className='App'>
        <h1>Meals Managed</h1>
        <h3>A place to curate your weekly meal plan with ease.</h3>
          <input type='text'  />
          <button>Add</button>
          {/* <div>
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
          <Day />
        </div> */}
      </div>
    );
  }
}

export default App;