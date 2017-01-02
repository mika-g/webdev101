(function() {
  'use strict';
  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    .constant('bigurl', "https://davids-restaurant.herokuapp.com");

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'foundCtrl',
      bindToController: true
    };
    return ddo;
  }
  function FoundItemsDirectiveController() {
    var foundCtrl = this;
    this.isEmpty = function() {
      return this.found != undefined && this.found.length === 0;
    }
  }
  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;
    this.searchTerm = "";
    this.narrowIt = function() {
      if (this.searchTerm === "") {
        this.items = [];
        return;
      }
      var promise = MenuSearchService.getMatchedMenuItems(this.searchTerm);
      promise.then(function(response) {
        ctrl.items = response; //for some reason it only works when ctrl.items and not this.items, no idea why
      })
      .catch(function(error) {});
    };
    this.removeItem = function(index) {
      this.items.splice(index, 1);
    };
  }
  //literally the method from the lectures
  MenuSearchService.$inject = ['$http','bigurl'];
  function MenuSearchService($http,bigurl) {
    var service = this;
    this.getMatchedMenuItems = function(searchTerm) {
        return $http({
          method: 'GET',
          url: (bigurl+"/menu_items.json")})
          .then(function (result) {
        var items = result.data.menu_items;
        var foundItems = [];
//same loop as when looking for cookie keyword in the lectures
        for (var i = 0; i < items.length; i++) {
          if (items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
            foundItems.push(items[i]);
          }
        }
        return foundItems;
      });
    };
  }
}
)();
