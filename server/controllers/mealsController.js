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
  const { day, meal } = req.body
  //we need params if have a query that is using a variable.. this params array is where our query is taking ($1) from. Order of the array matters (whatever is first will be ($1), etc.)
  const params = [meal];
  const queryString = `UPDATE meal_plans SET ` + day + ` = ($1) WHERE plan_id = 1;`; //will want to customize the day to the id of the input string, and the value to the actual input string
  //console.log('req.body:', req.body);
  //console.log('query string:', queryString);
  db.query(queryString, params, (err, result) => {
    if (err) return next({
      log: `mealsController.addMeals: ERROR: ${err}`,
      message: {err: 'Error occurred in mealsController.addMeals. Check server logs for more details.'}
    });
    res.locals.meals = result.rows[0];
    return next();
  });
}

//update a meal plan item for a day
//this should actually be the same as addMeals --> they would both use the same SQL command to update the existing row/mealplan based on the day and input
//actually just updated the name of addMeals to addUpdateMeals (because either way we want to take the form id to capture which
//day column it should edit, and capture the input )

//delete a meal plan item for a day
mealsController.deleteMeal = (req, res, next) => {
  const { day } = req.body;
  const queryString = `UPDATE meal_plans SET ` + day + ` = null WHERE plan_id = 1;`;
  console.log('req.body:', req.body);
  console.log('query string:', queryString);
  db.query(queryString, (err, result) => {
    if (err)
      return next({
        log: `mealsController.addMeals: ERROR: ${err}`,
        message: {
          err: 'Error occurred in mealsController.addMeals. Check server logs for more details.',
        },
      });
    res.locals.meals = result.rows[0];
    return next();
  });
};

//start new week (this query string starts a new row with unique ID)
//const queryString = `INSERT INTO meal_plans (sunday) VALUES ('steak');`;

module.exports = mealsController;