import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './toolbar.html';

class Toolbar {
    constructor() {}
}

const name = 'toolbar';

export default angular.module(name, [
  angularMeteor

]).component(name, {
    template,
    controller: Toolbar
}).name;
