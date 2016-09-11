import angular from 'angular';
import ngResource from 'angular-resource';

class Pokeapi {
    constructor($resource) {
        'ngInject';

        this.pokeapi = $resource('http://pokeapi.co/api/v2/pokemon/:nameEN', {
            nameEN: '@nameEN'
        });

    }
    getPokemonbyName(pokesearch) {

        return this.pokeapi.get({
            nameEN: pokesearch
        });

    }

}

/*
export default angular.module('pokeapi', [ngResource])
    .service('pokeapi', Pokeapi);
*/

export default angular.module('pokeapi', [ngResource])
    .service('pokeapi', Pokeapi)
    .name;
