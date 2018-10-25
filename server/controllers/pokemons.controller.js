const pokemons = require('../models/pokemon.model');

const pokemonsController = {};

pokemonsController.getAll = async function (_, res) {
  res.status(200).send(await pokemons.getAll());
};

pokemonsController.getById = async function (req, res) {
  res.status(200).send(await pokemons.getById(req.params.id));
};

module.exports = pokemonsController;