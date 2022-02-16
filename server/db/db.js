const { Pool } = require('pg');

const PG_URI = 'postgres://knnqcoaa:TqKwPRFom8r75mqdwR6zbJYshTkeOCCw@castor.db.elephantsql.com/knnqcoaa';

const pool = new Pool({connectionString: PG_URI});

//this is our Elephant SQL database; there is one table called 'weeks'
  //within this table, there is a unique week id, as well as a column for each day of the week
    //each day of the week can hold strings (VARCHAR), consisting of the dinner plan/recipe for that day

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};