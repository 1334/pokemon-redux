const express = require('express');
const app = new express();
const pokemonsController = require('./controllers/pokemons.controller');

app
  .get('/pokemons', pokemonsController.getAll)
  .get('/pokemons/:id', pokemonsController.getById)
  .listen(4000);