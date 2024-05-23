app.controller('infoCtrl', function ($scope, $rootScope ) {
    const dataFull = JSON.parse(sessionStorage.getItem('dataSudent'));
    $scope.dataInfo = JSON.parse(sessionStorage.getItem('student'));
    loadlll() 
    
    console.log(dataFull);
    
    $scope.updateData = function() {
        let dataUpdate = {
            fullname: $scope.dataInfo.fullname,
            email: $scope.dataInfo.email, 
            password: $scope.dataInfo.password,
            gender: $scope.dataInfo.gender,
            birthday: $scope.dataInfo.birthday,
            schoolfee: "1500000",
            marks: "0"
        };

        dataFull.forEach(element => {
            if (element.email === $scope.dataInfo.email) {
                Object.assign(element, dataUpdate);
                alert("Cập nhật thành công!");

            }
        });
        sessionStorage.setItem('dataSudent', JSON.stringify(dataFull));
    };

    function loadlll() {
        dataFull.forEach(e => {  
            if (e.email === $scope.dataInfo.email) {
                $scope.dataInfo = e;
                console.log($scope.dataInfo);
            }
        });
    }
});
