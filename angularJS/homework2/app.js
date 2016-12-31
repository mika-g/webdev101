(function () {
  'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var controller = this;

    this.shopping_list = ShoppingListCheckOffService.getshopping_list();

    this.shoppingItem = function(index) {
      ShoppingListCheckOffService.shoppingItem(index);
    }
  }

  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var bought = this;
    bought.list = ShoppingListCheckOffService.getbought_list();
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

(function() {
  'use strict';
  angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var controller = this;

    controller.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

    controller.doBuy = function(index) {
      ShoppingListCheckOffService.doBuy(index);
    }
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var controller = this;

    controller.boughtItems = ShoppingListCheckOffService.getBoughtItems();

  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [{ name: "cookies", quantity: 10 },
      { name: "milk", quantity: 10 },
      { name: "tea", quantity: 10 },
      { name: "coffee", quantity: 10 },
      { name: "sugar", quantity: 10 }]
    var boughtItems = [];

    this.doBuy = function (index) {
      boughtItems.push(toBuyItems[index]);
      toBuyItems.splice(index, 1);
    }

    this.getToBuyItems = function() {
      return toBuyItems;
    }

    this.getBoughtItems = function() {
      return boughtItems;
    }
  }

}
)();
