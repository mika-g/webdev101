//copy-paste from categories.component.js
(function() {
'use strict';
angular.module('MenuApp')
  .component('items', {
    templateUrl: 'itemscomponent.template.html',
    bindings: {
      items: '<'
    }
  });
})();
