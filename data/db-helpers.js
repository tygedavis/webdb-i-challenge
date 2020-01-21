const db = require('./dbConfig');

module.exports = {
  find,
  findById
}

//Resolves to an array of cars
function find() {
  return (db('accounts'));
}

//Resolves to a single car (or null)
function findById(id){
  return db('accounts').where({ id }).first();
}