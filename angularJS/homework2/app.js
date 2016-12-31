(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController);
    .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController);
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyShoppingController(ShoppingListCheckOffService) {
        this.itemsList = ShoppingListCheckOffService.getToBuyItemsList();
        this.checkOffItem = function (itemIndex) {
            ShoppingListCheckOffService.checkOffItem(itemIndex);
        };
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
        this.itemsList = ShoppingListCheckOffService.getBoughtItemsList();
        this.cancelCheckOff = function (itemIndex) {
            ShoppingListCheckOffService.cancelCheckOff(itemIndex);
        };
    }

    function ShoppingListCheckOffService() {
        var toBuyItemsList = [
                { name: 'cookies', quantity: 10 },
                { name: 'milk', quantity: 1 },
                { name: 'butter', quantity: 1 },
                { name: 'bread', quantity: 2 },
                { name: 'sugar', quantity: 2 }
            ],
            boughtItemsList = [];

        this.checkOffItem = function (itemIndex) {
            boughtItemsList.push(toBuyItemsList.splice(itemIndex, 1)[0]);
        };

        this.cancelCheckOff = function (itemIndex) {
            toBuyItemsList.push(boughtItemsList.splice(itemIndex, 1)[0]);
        };

        this.getBoughtItemsList = function() {
            return boughtItemsList;
        };

        this.getToBuyItemsList = function() {
            return toBuyItemsList;
        };
    }

})();
