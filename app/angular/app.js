const app = angular.module('myApp', ['ngRoute']);
    app.controller('myCtrl', function ($scope, $rootScope , $http) {
        $rootScope.student = sessionStorage.getItem('student');
        console.log($rootScope.student);

        $scope.logout = function () {
            window.location.href = "#!login";
            window.location.reload();
            sessionStorage.removeItem("student");
            $rootScope.student = '';
        }
        $scope.soucses = [];
        $http.get('db/Sourses.js').then(
            function(response) {
                $scope.soucses = response.data;
                console.log($scope.soucses);
            },
            function(error) {
                alert('lỗi lấy khóa học');
                console.error(error);
            }
        );
    })

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/',
                { templateUrl: 'page/home.html?' + Math.random(), controller: 'myCtrl' }
            )
            .when('/home',
                { templateUrl: 'page/home.html?' + Math.random(), controller: 'myCtrl' }
            )
            .when('/about',
                { templateUrl: 'page/about.html?' + Math.random(), controller: 'myCtrl' }
            )
            .when("/profile", { templateUrl: "page/profile.html", controller: 'infoCtrl' })
            
            // khoa hoc

            .when('/courses',
                { templateUrl: 'page/courses.html?'+Math.random(), controller: 'myCtrl' }
            )
            .when('/courses/:id_courses',
                { templateUrl: 'page/subjects.html?'+Math.random(), controller: 'subjectsCtrl' }
            )
            .when('/courses/:id_courses/:id_quiz',
                { templateUrl: 'page/course-details.html?', controller: 'subjectsCtrl' }
            )
            .when('/courses/:id_courses/:id_quiz/quiz',
                { templateUrl: 'page/test.html?'+Math.random(), controller: 'subjectsCtrl' }
            )
            // end khoa hoc
            .when('/lienHe',
                { templateUrl: 'page/lienHe.html?'+Math.random(), controller: 'myCtrl' }
            )
            .when('/gopY',
                { templateUrl: 'page/gopY.html?'+Math.random(), controller: 'myCtrl' }
            )
            .when('/hoiDap',
                { templateUrl: 'page/hoiDap.html?'+Math.random(), controller: 'myCtrl' }
            )
            .when('/register',
                { templateUrl: 'page/register.html?'+Math.random(), controller: 'registerCtrl' }
            )
            .when('/login',
                { templateUrl: 'page/login.html?'+Math.random(), controller: 'loginCtrl' }
            )
    })