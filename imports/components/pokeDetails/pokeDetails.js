import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import {
    Pokemons
}
from '../../api/pokemons';

import FavoriteListService from '../../services/favoriteListService';

import template from './pokeDetails.html';

class PokeTest {
    constructor($stateParams, $scope, $reactive, FavoriteListService, $mdToast) {
        'ngInject';

        $reactive(this).attach($scope);
        this.subscribe('Pokemons');

        this.FavoriteListService = FavoriteListService;
        this.$mdToast = $mdToast;
        this.pokeId = $stateParams.pokeId;

        this.localBool = this.FavoriteListService.favoriteList.includes(this.pokeId);

        this.helpers({
            pokemon() {
                    return Pokemons.findOne({
                        nameCN: this.pokeId
                    });
                },
                isFavorite() {
                    return Meteor.users.find({
                        'profile.favorites': this.pokeId
                    }).count();
                },
                isLoggedIn() {
                    return !!Meteor.userId();
                },
                currentUser() {
                    return Meteor.user();
                }
        });

    }

    toggleFavorite() {
        if (this.isLoggedIn) {

            if (this.isFavorite) {
                Meteor.users.update({
                    _id: Meteor.userId()
                }, {
                    $pull: {
                        'profile.favorites': this.pokeId
                    }
                });
                this.$mdToast.showSimple(this.pokeId + ' has been removed');
            } else {
                Meteor.users.update({
                    _id: Meteor.userId()
                }, {
                    $addToSet: {
                        'profile.favorites': this.pokeId
                    }
                });
                this.$mdToast.showSimple(this.pokeId + ' has been added');
            }

        } else {

            if (this.localBool) {
                this.FavoriteListService.removeFromFavorite(this.pokeId);
                this.$mdToast.showSimple(this.pokeId + ' has been removed');

            } else {
                this.FavoriteListService.addToFavorite(this.pokeId);
                this.$mdToast.showSimple(this.pokeId + ' has been added');

            }
            this.localBool = !this.localBool;
        }

    }
}

const name = 'pokeTest';

export default angular.module(name, [
  angularMeteor,
    uiRouter

]).component(name, {
        template,
        controller: PokeTest
    }).service('FavoriteListService', FavoriteListService)
    .config(config)
    .name;

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('pokedetails', {
            url: '/pokedetails/:pokeId',
            template: '<poke-test flex layout="column"></poke-test>'
        });
}
