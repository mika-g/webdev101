(function () {
  'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var Buy = this;
    this.list = ShoppingListCheckOffService.getShoppingList();
    this.item = function(itemIndex) {
        ShoppingListCheckOffService.buyfunc(itemIndex);
    };
  }

  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var Bought = this;
    this.list = ShoppingListCheckOffService.getBoughtList();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var bought_list = [];
    var shopping_list = [
      {name: "Bread", quantity: 1},
      {name: "Milk", quantity: 1},
      {name: "Eggs", quantity: 12},
      {name: "Butter", quantity: 2},
      {name: "Orange Juice", quantity: 1}
    ];

    this.getShoppingList = function() {
      return shopping_list;
    };

    this.getBoughtList = function() {
      return bought_list;
    };

    this.buyfunc = function(itemIndex) {
      var item = shopping_list.splice(itemIndex, 1);
      bought_list.push(item[0]);
    };
  }
})();
