const express = require('express');
const { route } = require('../server');
const router = express.Router();
//const mealsController = require('../controllers/mealsController');


//test test
// router.get('/', (req, res) => {
//   return res.status(200).send('hello, there!');
// });

// //get current meals in meal plan list
// router.get('/', mealsController.getMeals, (req, res) => {
//   res.status(200).json(res.locals);
// })

// //add a meal
// router.post('/', mealsController.addMeal, (req, res) => {
//   res.status(200).json(req.body);
// });

// //edit a meal   (maybe put instead of patch, idk)
// router.patch('/',)

// //delete a meal
// router.delete('/',)

module.exports = router;