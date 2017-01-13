//pretty much identical to routes.js in L37
(function () {
'use strict';
angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'home.template.html'
  })
  //resolve as in L38
  .state('categories', {
    url: '/categories',
    templateUrl: 'categories.template.html',
    controller: 'CategoriesController as categoriesCtrl',
    resolve: {
      categories: ['MenuDataService', function(MenuDataService) {
        return MenuDataService.getAllCategories().then(function(response) {
          return response.data;
        });
      }]
    }
  })
  .state('items', {
    url: '/items/{category}',
    templateUrl: 'items.template.html',
    controller: 'ItemsController as itemsCtrl',
    resolve: {
      items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.category).then(function(response) {
          return response.data.menu_items;
        });
      }]
    }
  });
}
})();
