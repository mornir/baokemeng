class FavoriteListService {
    constructor() {
        'ngInject';

        this.favoriteList = [];

    }



    addToFavorite(pokemon) {
        this.favoriteList.push(pokemon);
    }

    removeFromFavorite(pokemon) {
        let index = this.favoriteList.indexOf(pokemon);
        this.favoriteList.splice(index, 1);
    }


}

export default FavoriteListService;

/*
const name = "favoriteListService";

export default angular.module(name, [])
    .service('FavoriteListService', FavoriteListService);*/
