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

    controller.shoppingitems = ShoppingListCheckOffService.shoppingitems();

    controller.shop = function(index) {
      ShoppingListCheckOffService.shop(index);
    }
  }


  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var bought = this;

    controller.boughtitems = ShoppingListCheckOffService.getboughtitems();

  }

  function ShoppingListCheckOffService() {
    var service = this;

    var shoppingitems = [{ name: "cookies", quantity: 10 },
      { name: "milk", quantity: 10 },
      { name: "tea", quantity: 10 },
      { name: "coffee", quantity: 10 },
      { name: "sugar", quantity: 10 }]
    var boughtitems = [];

    this.shop = function (index) {
      boughtitems.push(toBuyItems[index]);
      shoppingitems.splice(index, 1);
    }

    this.getshoppingitems = function() {
      return toBuyItems;
    }

    this.getboughtitems = function() {
      return boughtItems;
    }
  }

}
)();
