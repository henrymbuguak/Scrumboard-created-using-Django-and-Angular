(function () {
        'use strict';

        angular.module('scrumboard.demo', []).controller('ScrumboardController', ['$scope','$http',ScrumboardController]);

        function ScrumboardController($scope, $http) {
            $scope.add = function (list, title) {
                var card = {
                    title: title
                };
                list.cards.push(card);
            };

            $scope.data = [];
            $http.get('/scrumboard/lists').then(function (response) {
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