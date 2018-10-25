const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pokemondb', { useNewUrlParser: true });

const data = require(__dirname + '/pokemon.json').results;
const pokemon = {};

pokemon.Pokemon = mongoose.model( 'Pokemon', {
  pokeID : Number,
  name: String,
  imgURL: String,
  thumbnailURL: String,
});

pokemon.getAll = async function () {
  return await pokemon.Pokemon.find().sort({ pokeID: 'asc' }).exec();
};

pokemon.getById = async function (id) {
  return await pokemon.Pokemon.findOne({pokeID : id})
};

pokemon.seed = async () => {
  await pokemon.Pokemon.deleteMany({});
  data.forEach(async pk => {
    console.log(pk);

    const id = pk.url.match(/\/(\d+)\/$/)[1];
    await pokemon.Pokemon.create({
      pokeID : id,
      name : pk.name,
      imgURL : `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${('000' + id).slice(-3)}.png`,
      thumbnailURL : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    });
  })
}

module.exports = pokemon;