app.controller('loginCtrl', function ($scope, $http, $window , $rootScope ) {   
    // $scope.error = "";
    // $scope.email = '';
    // $scope.password = ''; 

    $rootScope.studentsData = JSON.parse(sessionStorage.getItem('dataSudent')) 
    console.log($rootScope.studentsData); 

    $scope.login = function () {       
      var found = false;
      angular.forEach($rootScope.studentsData, function (value) { 
        if (value.email === $scope.email && value.password === $scope.password) { 
          found = true;
          $rootScope.statusLogin = true;
          sessionStorage.setItem('student', JSON.stringify(value));  
          alert("Đăng nhập thành công!");
          $window.location.href = '/index.html';
        }
      });
      if (!found) {
        $scope.error = "Sai email hoặc mật khẩu!";
        alert($scope.error); 
      }
    }
  });