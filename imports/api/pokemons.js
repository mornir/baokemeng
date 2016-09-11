import {
    Mongo
}
from 'meteor/mongo';

export const Pokemons = new Mongo.Collection('Pokemons');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('Pokemons', function pokemonsPublication() {
        return Pokemons.find();
    });
}