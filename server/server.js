const express = require('express');
const app = express();
const path = require('path');
//const apiRouter = require('./routes/api.js')     --might not use the routes folder/api.js
const mealsController = require('./controllers/mealsController');
const PORT = 3000;

//these two are our body parsers
//this parses requests of content-type json & content-type application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//if i un-comment this, I do get 'hello there' on my 3000/ landing page
app.get('/', mealsController.getMeals, (req, res) => {
  return res.status(200).send(res.locals);
})

//handles requests for static files
app.use(express.static(path.resolve(__dirname, '../client')));

//route to serve the html file  --> I don't think we actually need this because we don't need to serve an html file to our express server?
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../index.html'))
// })

//define route handlers  --  commented out because I am likely just going to use my server page to serve my routes
// app.use('/', apiRouter);
// app.use('/api', apiRouter);

//catch-all route handler for unknown endpoints
app.use((req, res) => res.status(404).send(`Sorry, this page doesn't exist.`));

//global error handler:
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;