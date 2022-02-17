const db = require('../db/db.js');
const pg = require('pg');

const mealsController = {};

//get meals/current meal plan for the week
mealsController.getMeals = (req, res, next) => {
  // const {id} = req.query;
  // const params = [id];
  const queryString = 'SELECT * FROM meal_plans;'
  db.query(queryString, (err, result) => {
    if (err) return next({
      log: `mealsController.getMeals: ERROR: ${err}`,
      message: {err: 'Error occurred in mealsController.getMeals. Check server logs for more details.'}
    });
    //console.log('result:', result);
    res.locals.meals = result.rows[0];
    //console.log('res.locals.meals:', res.locals.meals);
    return next();
  });
};

//create and save a new meal plan item
mealsController.addMeals = (req, res, next) => {
  const queryString = `INSERT INTO meal_plans (sunday) VALUES ('steak');`; //this may have to be `UPDATE meal_plans SET sunday = 'steak' WHERE plan_id = 1;`; INSERT INTO creates a brand new row
  db.query(queryString, (err, result) => {
    if (err) console.log('Error with database insertion!');
    next();
  });
}

//update a meal plan item for a day

//delete a meal plan item for a day

module.exports = mealsController;