(function () {
    'use strict';
    angular.module('scrumboard.demo').config(['$routeProvider', config]).run(['$http', run]);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'static/html/board.html',
                controller: 'ScrumboardController',
            })
            .when('/login', {
                templateUrl: 'static/html/signin.html'
            })
            .otherwise('/');
    }
    
    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }
})();