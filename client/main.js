import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';

import Toolbar from '../imports/components/toolbar/toolbar';
import PokeList from '../imports/components/pokeList/pokeList';
import PokeDetails from '../imports/components/pokeDetails/pokeDetails';
import Auth from '../imports/components/auth/auth';
import Pokedex from '../imports/components/pokedex/pokedex';

angular.module('baokemeng', [

    angularMeteor,
    uiRouter,
    ngMaterial,
    ngAnimate,
    Toolbar,
    PokeList,
    PokeDetails,
    Auth,
    Pokedex,
    'accounts.ui'

  ]).config(config);

function config($locationProvider, $urlRouterProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/home');
}
