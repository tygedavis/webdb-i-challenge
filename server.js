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

module.exports = server;