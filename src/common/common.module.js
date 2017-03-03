(function() {
    "use strict";

    angular.module('common', [])
        .constant('ApiPath', 'https://my-restaurant-server.herokuapp.com');
        //.config(config);

   /*
    function config($httpProvider) {
      $httpProvider.interceptors.push('loadingHttpInterceptor');
    }
    */

})();
