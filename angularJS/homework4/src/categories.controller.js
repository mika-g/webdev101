//copy-paste from L39
(function () {
'use strict';
angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categories']
function CategoriesController(categories) {
  var categoriesCtrl = this;
  this.categories = categories;
}
})();
