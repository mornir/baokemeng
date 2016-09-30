import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './pokedex.html';

import pokeapi from '../../services/pokeapi';

class Pokedex {
    constructor(pokeapi) {
        'ngInject';
        this.searchPokemon = '';
        this.result = '';
        this.Pokeapi = pokeapi;
    }

    searchPokedex() {

        this.result = this.Pokeapi.getPokemonbyName(this.searchPokemon.toLowerCase());
    }


}

export default angular.module('pokedex', [
  angularMeteor,
    uiRouter,
    pokeapi

]).component('pokedex', {
        template,
        controller: Pokedex

    })
    .config(config)
    .name;

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('pokedex', {
            url: '/pokedex',
            template: '<pokedex flex layout="column"></pokedex>'
        });
}
