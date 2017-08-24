(function () {
    'use strict';

    var app = angular.module('app', ['ngResource', 'ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider.when('/', {
                templateUrl: 'home.html'
            })
            .when('/admin', {
                templateUrl: 'admin.html',
                controller: 'adminController',
                controllerAs: 'adm'
            })
            .when('/quiz', {
                templateUrl: 'user.html',
                controller: 'quizController',
                controllerAs: 'quiz'
            })
            .otherwise({
                redirectTo: '/'
            });

    });

    app.controller('adminController', ['$http', function ($http) {

        var vm = this;

        vm.post = function () {
            console.log(vm.quiz);
        }

        vm.post = function () {
            var question = {};
            question.question = vm.quiz.question;
            question.a = vm.quiz.a;
            question.b = vm.quiz.b;
            question.c = vm.quiz.c;
            question.answer = vm.quiz.ans;
            console.log(question);
            $http.post('./api/insert.php', question)
                .then(function (res) {
                    console.log(res);
                    // alert("You've successfully posted the question");
                    // window.location.reload();
                }, function (err) {
                    console.log(err)
                })
        };


    }]);
    app.controller('quizController', ['$http', '$route', function ($http,$route) {
        var vm = this;
        vm.name = "Angular JS Quiz"
        vm.questions = null;
        $http.get('./api/db.php').then(function (resp) {
            vm.questions = resp.data;
        }, function (err) {
            console.log(err.data);
        });

        vm.answers = [];
        vm.reset = function(){
            $route.reload();
        }
        vm.check = function () {
            vm.msg = false;
            $http.get('./api/ans.php').then(function (resp) {
                    vm.organs = resp.data;
                    vm.correct = [];
                    vm.incorrect = [];
                    for (var i = 0; i < vm.answers.length; i++) {
                        if (vm.answers[i] == vm.organs[i]) {
                            vm.correct.push(vm.answers[i]);
                        }else{
                            vm.incorrect.push(vm.answers[i]);
                        }
                    }
                    console.log(vm.correct);
                    console.log(vm.incorrect);
                    vm.avg = (vm.correct.length / vm.questions. length) * 100;
                    console.log(vm.avg);
                    vm.msg = true;
                },
                function (err) {
                    console.log(err.data);
                }
            );
        }
    }]);

})();