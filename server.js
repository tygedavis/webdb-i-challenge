const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

//GET -> General
server.get('/', (req, res) => {
  db('accounts')
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(err => {
      res.status(500).json({ error: "There was an error retrieving the account data" });
    });
});

//POST -> General
server.post('/', (req,res) => {
  db('accounts').insert(req.body)
    .then(newAccount => {
      res.status(201).json(newAccount);
    })
    .catch(err => {
      res.status(500).json({ error: "There was an error posting the new account data" });
    });
});

//PUT -> Update an account
server.put('/:id', (req, res) => {
  db('accounts').where({ id: req.params.id}).update(req.body)
    .then(updated => {
      res.status(200).json(updated)
    })
    .catch(err => {
      res.status(500).json({ error: "There was an error updating the account data" });
    });
});

//DELETE -> Delete an account
server.delete('/:id', (req,res) => {
  db('accounts').where({ id: req.params.id}).del()
    .then(deleted => {
      res.status(200).json(deleted);
    })
    .catch(err => {
      res.status(500).json({ error: "There was an error deleting the account data" });
    });
});

module.exports = server;