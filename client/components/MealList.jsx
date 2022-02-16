import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

class MealList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <DailyMeal day={'Sunday'} />
        <DailyMeal day={'Monday'} />
        <DailyMeal day={'Tuesday'} />
        <DailyMeal day={'Wednesday'} />
        <DailyMeal day={'Thursday'} />
        <DailyMeal day={'Friday'} />
        <DailyMeal day={'Saturday'} />
      </section>
    );
  }
}