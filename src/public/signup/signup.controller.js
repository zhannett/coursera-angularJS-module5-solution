(function () {
    "use strict";

    angular.module("public")
        .controller("SignupController", SignupController);

    SignupController.$inject = ["allMenuItems", "$filter", "MyinfoService"];
    function SignupController(allMenuItems, $filter, MyinfoService) {
        var $ctrl = this;
        var filteredByFavorite = [];
        $ctrl.myinfo = {};
        signupForm.firstName = "";
        signupForm.lastName = "";
        signupForm.email = "";
        signupForm.phone = "";
        signupForm.favorite = "";
        $ctrl.allMenuItems = allMenuItems.menu_items;
        $ctrl.validateFavorite = function() {
            filteredByFavorite = $ctrl.allMenuItems.filter(function (item) {
                return (item.short_name === signupForm.favorite.value);
            });
            filteredByFavorite.length === 0 ? $ctrl.message = true : $ctrl.message = false;
            return $ctrl.message;
        }
        $ctrl.validateFavorite();
        $ctrl.submit = function() {
            $ctrl.myinfo = {
                firstName: signupForm.firstName.value,
                lastName: signupForm.lastName.value,
                email: signupForm.email.value,
                phone: signupForm.phone.value,
                favorite: signupForm.favorite.value,
                signedUp: false
            };
            if (MyinfoService.postMyInfo($ctrl.myinfo)) {
                $ctrl.success = true;
                signupForm.firstName.value = "";
                signupForm.lastName.value = "";
                signupForm.email.value = "";
                signupForm.phone.value = "";
                signupForm.favorite.value = "";
                angular.element(document.getElementById('btnSubmit'))[0].disabled = true;
            }

            MyinfoService.getMyInfo();
            console.log("myinfo =", MyinfoService.getMyInfo());


        };
    }
}());

