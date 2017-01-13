//retrieving the module like in L35
(function() {
'use strict';
angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'categoriescomponent.template.html',
    bindings: {
      items: '<'
    }
  });
})();
