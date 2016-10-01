import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import showLogin from '../login/loginModal';

import {
    Pokemons
}
from '../../api/pokemons';

import FavoriteListService from '../../services/favoriteListService';

import template from './pokeList.html';


class PokeList {
    constructor($scope, $reactive, $mdDialog, $mdMedia, FavoriteListService) {
        'ngInject';
        this.showLogin = showLogin;

        this.activeBtn = 0;

        this.$mdDialog = $mdDialog;
        this.$mdMedia = $mdMedia;

        this.FavoriteListService = FavoriteListService;

        this.tags = [{
                id: 0,
                name: '所有的'
        },
            {
                id: 1,
                name: '传说的'
        },
            {
                id: 2,
                name: '最初同伴的'
                },
            {
                id: 3,
                name: '最喜欢的'

        }];

        $reactive(this).attach($scope);
        this.subscribe('Pokemons');
        this.helpers({
            pokemons() {
                    return Pokemons.find({});
                },
                currentUser() {
                    return Meteor.user();
                },
                isLoggedIn() {
                    return !!Meteor.userId();
                }
        });
    }
    toggleTag(index) {

        this.activeBtn = parseInt(index);
        let selector = {};

        switch (this.activeBtn) {
        case 0:
            selector = {};
            break;
        case 3:
            if (this.isLoggedIn) {
                selector = {
                    nameCN: {
                        $in: Meteor.user().profile.favorites
                    }
                };
            } else {
                selector = {
                    nameCN: {
                        $in: this.FavoriteListService.favoriteList
                    }
                };
            }

            break;
        default:
            selector = {
                attribute: this.tags[index].name
            };
        }

        this.helpers({
            pokemons() {
                return Pokemons.find(selector);
            }
        });
    }

}

const name = 'pokeList';

export default angular.module(name, [
  angularMeteor,
    uiRouter

]).component(name, {

    template,
    controller: PokeList

}).service('FavoriteListService', FavoriteListService)

.config(config)
    .name;

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('home', {
            url: '/home',
            template: '<poke-list flex layout="column"></poke-list>'
        });
}
