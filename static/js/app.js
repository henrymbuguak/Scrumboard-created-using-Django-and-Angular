(function () {
        'use strict';

        angular.module('scrumboard.demo', ['ngRoute']).controller('ScrumboardController', ['$scope','$http',ScrumboardController]);

        function ScrumboardController($scope, $http) {
            $scope.add = function (list, title) {
                var card = {
                    list: list.id,
                    title: title
                };
                $http.post('/scrumboard/cards/', card).then(function (response) {
                   list.cards.push(response.data);
                }, function () {
                    alert('There was a problem creating the card');
                });
            };

            $scope.login = function () {
                $http.post('/auth_api/login/', {username: 'henry', password: '3918km1990km'});
            };

            $scope.data = [];
            $http.get('/scrumboard/lists/').then(function (response) {
                $scope.data = response.data;
            });

           /* $scope.data = [
                {
                    name: 'Django',
                    cards: [
                        {
                            title: 'Create Models'
                        },
                        {
                            title: 'Create View'
                        },
                        {
                            title: 'Migrate database'
                        },
                    ]
                },
                {
                    name: 'Angular Demo',
                    cards: [
                        {
                            title: 'Write html'
                        },
                        {
                            title: 'Write javascript'
                        },
                    ]
                }
            ];*/
        }
    })();