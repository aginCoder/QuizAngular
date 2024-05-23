app.controller('registerCtrl', function ($scope, $http, $window , $rootScope ) {

    $http.get('/db/Students.js').then(     
      function (response) {
        $scope.Students = response.data;     
      }, function (response) {
        alert('Errors');
      }
    );
    
    $scope.register = function () {      
        let data = {                       
            username : $scope.text,
            password : $scope.password,
            fullname : $scope.text,
            email : $scope.email,
            gender: $scope.gender,
            schoolfee: 1500000,
            marks: 0
        }

        if($scope.Students.push(data)) { 
            alert('Đăng ký thành công')
            window.location.href = "#!/login" 
            sessionStorage.setItem('dataSudent',JSON.stringify($scope.Students))  
            $rootScope.studentsData = $scope.Students;
            console.log($rootScope.studentsData);
        }
    }

  });