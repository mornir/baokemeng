import modalTemplate from './login.html';
import FavoriteListService from '../../services/favoriteListService';

export default function showLogin(event, bool) {

    this.$mdDialog.show({
        controller($mdDialog, $scope, $reactive, FavoriteListService, $mdToast) {
                'ngInject';

                this.FavoriteListService = FavoriteListService;

                this.boolLoginRegister = bool;

                $reactive(this).attach($scope);
                this.credentials = {
                    username: '',
                    password: '',
                    profile: {
                        favorites: this.FavoriteListService.favoriteList
                    }
                };

                this.error = '';

                this.login = () => {
                    Meteor.loginWithPassword(this.credentials.username, this.credentials.password,
                        this.$bindToContext((err) => {
                            if (err) {
                                this.error = err.reason;
                                console.log(this.error);
                            } else {
                                this.FavoriteListService.favoriteList = [];
                                this.close();
                                $mdToast.showSimple('Welcome back ' + this.credentials.username + '!');
                            }
                        })
                    );

                };

                this.register = () => {
                    Accounts.createUser(this.credentials,
                        this.$bindToContext((err) => {
                            if (err) {
                                this.error = err;
                                console.log(this.error);
                            } else {
                                this.FavoriteListService.favoriteList = [];
                                this.close();
                                $mdToast.showSimple('Welcome ' + this.credentials.username + '!');
                            }
                        })
                    );

                };

                this.toggle = () => {
                    this.boolLoginRegister = !this.boolLoginRegister;
                };

                this.close = () => {

                    $mdDialog.hide();
                };

            },

            controllerAs: 'loginModal',
            template: modalTemplate,
            targetEvent: event,
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            fullscreen: true
            //this.$mdMedia('sm') || this.$mdMedia('xs')

    });
}
