(function () {
        'use strict';

        angular.module('scrumboard.demo', []).controller('ScrumboardController', ['$scope',ScrumboardController]);

        function ScrumboardController($scope) {
            $scope.add = function (list, title) {
                var card = {
                    title: title
                };
                list.cards.push(card);
            };

            $scope.data = [
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
            ];
        }
    })();