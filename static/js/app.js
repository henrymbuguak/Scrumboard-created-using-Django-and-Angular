(function () {
        'use strict';

        angular.module('scrumboard.demo', ['ngRoute']).controller('ScrumboardController', ['$scope','$http', 'Login','$location',ScrumboardController]);

        function ScrumboardController($scope, $http, Login, $location) {
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

           /* $scope.logout = function () {
                $http.get('/auth_api/logout/').then(function () {
                    $location.url('/login');
                });
            }*/


            $scope.data = [];
            $http.get('/scrumboard/lists/').then(function (response) {
                $scope.data = response.data;
            });

            Login.redirectIfNotLoggedIn();
            $scope.data=[];
            $scope.logout = Login.logout;

            $scope.sortBy='story_points';
            $scope.reverse=true;
            $scope.showFilters=false;

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