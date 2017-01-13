//recycling getting url's from previous homework
(function() {
'use strict';
angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('bigurl', "https://davids-restaurant.herokuapp.com");;

MenuDataService.$inject = ['$http', 'bigurl']
function MenuDataService($http, bigurl) {
  var service = this;

  this.getAllCategories = function() {
    return $http({
      method: 'GET',
      url: (bigurl+'/categories.json')
    });
  }

  this.getItemsForCategory = function(categoryShortName) {
    return $http({
      method: 'GET',
      url: (bigurl+'/menu_items.json'),
      params: {category: categoryShortName}
    });
  }
}
})();
