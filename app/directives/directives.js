'use strict';


app
    .directive("scroll", function ($window) {
        return function(scope, element, attrs) {
            angular.element($window).bind("scroll", function() {
                if (this.pageYOffset >= 10) {
                    element.addClass('bg-black');
                    //console.log('Scrolled below header.');
                } else {
                    element.removeClass('bg-black');
                    //console.log('Header is in view.');
                }
            });
        };
    });