
var courseListApp = angular.module('myApp.edu1', []);

var model = {
    user: "Boris",
    courses: [{ name: "HTML, CSS", passed: true },
        { name: "JavaScript Essential", passed: true },
        { name: "JavaScript Advanced", passed: true },
        { name: "HTML5 &amp; CSS3", passed: false },
        { name: "AngularJS", passed: false }]
};

var CourseListCtrl = courseListApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/edu1', {
        templateUrl: 'edu1/edu.html',
        controller: 'CourseListCtrl'
    });
}]);

CourseListCtrl.controller('CourseListCtrl', function($scope) {
    $scope.data = model;

    //Обработчик нажатия по кнопке
    $scope.addNewCourse = function () {

        $scope.data.courses.push({
            name: $scope.courseName,
            passed: false
        });

        $scope.courseName = "";
    };

    $scope.showText = function (passed) {
        return passed ? "Да" : "Нет";
    };

    $scope.setStyle = function (passed) {
        return passed ? "color:green" : "color:red; font-weight: bold";
    }
});