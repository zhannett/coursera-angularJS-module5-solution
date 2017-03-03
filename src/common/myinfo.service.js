(function () {
    "use strict";

    angular.module("common")
        .service("MyinfoService", MyinfoService);

    MyinfoService.$inject = ["$http"];
    function MyinfoService($http) {
        var service = this;
        service.myinfoSaved = {};

        service.postMyInfo = function (myinfo) {
            this.myinfoSaved = myinfo;
            this.myinfoSaved.signedUp = true;
            return true;
        };

        service.getMyInfo = function () {
            return this.myinfoSaved;
        };
    }
})();
