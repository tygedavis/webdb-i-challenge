const db = require('./dbConfig');

module.exports = {
  find,
  findById,
  insert,
  update,
  remove
}

//Resolves to an array of cars
function find() {
  return (db('accounts'));
}

//Resolves to a single car (or null)
function findById(id) {
  return db('accounts').where({ id }).first();
}

function insert(account) {
  return db('accounts').insert(account)
    .then(created => {
      return findById(created[0]);
  })
}

function update(id, change) {
  return db('accounts').where({ id }).update(change)
}

function remove(id) {
  return db('accounts').where(id).del()
}