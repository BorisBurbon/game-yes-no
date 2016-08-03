
var courseListApp = angular.module('myApp.edu1', []);

var model = {
    user: "Boris",
    courses: [{ name: "Change fav-icon", priority: "High", passed: true },
        { name: "JavaScript Essential", priority: "Normal", passed: true },
        { name: "JavaScript Advanced", priority: "Low", passed: true },
        { name: "HTML5", priority: "High", passed: false },
        { name: "Created animation", priority: "Normal", passed: false },
        { name: "Change text", priority: "Low", passed: true },
        { name: "Fix bugs slicing", priority: "High", passed: false },
        { name: "Add modal", priority: "Normal", passed: true },
        { name: "Datapicker", priority: "Normal", passed: false },
        { name: "AngularJS", priority: "Normal", passed: true }]
};

var CourseListCtrl = courseListApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/edu1', {
        templateUrl: 'edu1/edu.html',
        controller: 'CourseListCtrl'
    });
}]);

CourseListCtrl.controller('CourseListCtrl', function($scope) {
    $scope.tasks = model;

    $scope.addTask = function (task) {
        //angular.isDefined - функция, которая позволяет проверить наличие свойства объекта.
        if (angular.isDefined(task) &&
            angular.isDefined(task.name) &&
            angular.isDefined(task.priority)) {

            $scope.tasks.courses.push({
                name: task.name,
                priority: task.priority,
                complete: false
            });
        }
    };

    $scope.showText = function (passed) {
        return passed ? "Да" : "Нет";
    };

    $scope.setStyle = function (passed) {
        return passed ? "color:green" : "color:red; font-weight: bold";
    };

    $scope.options =
        [{ display: "Таблица", value: "table" },
            { display: "Список", value: "list" },
            { display: "Список с маркерами", value: "budges" }];

    $scope.mode = $scope.options[0];
});