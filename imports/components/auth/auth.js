import angular from 'angular';
import angularMeteor from 'angular-meteor';
import showLogin from '../login/loginModal';

import {
    Meteor
}
from 'meteor/meteor';
import {
    Accounts
}
from 'meteor/accounts-base';


import template from './auth.html';


class Auth {
    constructor($scope, $reactive, $mdDialog, $mdToast) {
        'ngInject';

        this.$mdDialog = $mdDialog;
        this.$mdToast = $mdToast;

        this.showLogin = showLogin;

        $reactive(this).attach($scope);

        this.helpers({
            isLoggedIn() {
                    return !!Meteor.userId();
                },
                currentUser() {
                    return Meteor.user();
                }
        });
    }

    logout() {
        Accounts.logout();
        this.$mdToast.showSimple('Hope to see you soon ' + this.currentUser.username);
    }
}

const name = 'auth';

export default angular.module(name, [
  angularMeteor

]).component(name, {
    template,
    controller: Auth
}).name;
