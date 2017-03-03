(function () {
    "use strict";

    angular.module("public")
        .controller("MyinfoController", MyinfoController);

    MyinfoController.$inject = ["allMenuItems", "$filter", "myinfo", "MenuService"];
    function MyinfoController(allMenuItems, $filter, myinfo, MenuService) {
        var $ctrl = this;
        $ctrl.signedUp = false;
        $ctrl.myinfo = myinfo;
        if ($ctrl.myinfo.signedUp) {
            $ctrl.signedUp = true
        }
        $ctrl.allMenuItems = allMenuItems.menu_items;
        $ctrl.dish = $ctrl.allMenuItems.filter(function (item) {
            if (item.short_name === $ctrl.myinfo.favorite) {
                return item;
            }
        });
        if ($ctrl.myinfo.signedUp) {
            $ctrl.signedUp = true;
            if ($ctrl.dish[0]) {
                $ctrl.signedUp = true;
                $ctrl.dish.name = $ctrl.dish[0].name;
                $ctrl.dish.short_name = $ctrl.dish[0].short_name;
                $ctrl.dish.description = $ctrl.dish[0].description;
                $ctrl.dish.price_large = $ctrl.dish[0].price_large;
                $ctrl.dish.price_small = $ctrl.dish[0].price_small;
                $ctrl.dish.large_portion_name = $ctrl.dish[0].large_portion_name;
                $ctrl.dish.small_portion_name = $ctrl.dish[0].small_portion_name;
                // $('#notSignedUp').hide();
                //$('#signedUp').show();
            }
        }


    }

}());

