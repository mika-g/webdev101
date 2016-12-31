(function () {
  'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var Purchase = this;
    Purchase.list = ShoppingListCheckOffService.getShoppingList();
    Purchase.item = function(itemIndex) {
      try {
        ShoppingListCheckOffService.purchaseItem(itemIndex);
      } catch (err) {
        alert(err);
      }
    };
  }

  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var Sold = this;
    Sold.list = ShoppingListCheckOffService.getSoldList();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var sold_list = [];
    var shopping_list = [
      {name: "Bread", quantity: 1},
      {name: "Milk", quantity: 1},
      {name: "Eggs", quantity: 12},
      {name: "Butter", quantity: 2},
      {name: "Orange Juice", quantity: 1}
    ];

    service.getShoppingList = function() {
      return shopping_list;
    };

    service.getSoldList = function() {
      return sold_list;
    };

    service.purchaseItem = function(itemIndex) {
      var item = shopping_list.splice(itemIndex, 1);
      sold_list.push(item[0]);
    };
  }
})();
