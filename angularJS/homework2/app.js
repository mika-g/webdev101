(function () {
  'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var shopping = this;
    shopping.list = ShoppingListCheckOffService.getShoppingList();
    shopping.item = function(itemIndex) {
      try {
        ShoppingListCheckOffService.shoppingItem(itemIndex);
      } catch (err) {
        alert(err);
      }
    };
  }

  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var bought = this;
    bought.list = ShoppingListCheckOffService.getboughtList();
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

    this.getboughtList = function() {
      return bought_list;
    };

    this.shoppingItem = function(itemIndex) {
      var item = shopping_list.splice(itemIndex, 1);
      bought_list.push(item[0]);
    };
  }
})();
