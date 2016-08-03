var app = angular.module('myApp.edu2',[
    "ui.bootstrap",
    'btorfs.multiselect'
]);

var model2 = [{ name: "Anton", items: "11" },
        { name: "Igor" , items: "true"},
        { name: "Igor" , items: "true"},
        { name: "Igor" , items: "true"},
        { name: "AngularJS", items: "sss" }];


var appCtrl = app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/edu2', {
        templateUrl: 'edu2/edu.html'
    });
}]);

appCtrl.controller('TableCtrl', function($scope) {
    $scope.items = model2;
});

appCtrl.controller('SelectCtrl', function ($scope) {
    $scope.items = [{ prop1: "item 1", prop2: 1 },
        { prop1: "item 2", prop2: 2 },
        { prop1: "item 3", prop2: 3 }];

    $scope.selected = $scope.items[2];
});

// bootstrap controller
app.controller('DropdownCtrl', function ($scope, $log) {
    $scope.items = [
        'ITEMS - 1',
        'ITEMS - 2',
        'ITEMS - 3'
    ];

    $scope.status = {
        isopen: false
    };

    //$scope.toggled = function(open) {
    //    $log.log('Dropdown is now: ', open);
    //};

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };

    $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));
});

// bootstrap multiselect
var options  = [
    "France",
    "United Kingdom",
    "Germany",
    "Belgium",
    "Netherlands",
    "Spain",
    "Italy",
    "Poland",
    "Austria"
];
app.controller('MultiselectCtrl', function ($scope , $http) {
    $scope.options = options;

    //$http.get("edu2/multiselect.json").success(function(data) {
    //    $scope.options = data.item;
    //});

});