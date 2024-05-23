app.controller('subjectsCtrl', function ($scope, $routeParams, $http, $interval, $window) {
    $scope.id_courses = $routeParams.id_courses; 
    $scope.id_quiz = $routeParams.id_quiz; 

    $scope.course_details = []; 
    $scope.subjects = [];

    $http.get('db/Subjects.js').then(
        function (response) {
            $scope.subjects = response.data;  
            $scope.subjects = $scope.subjects.filter(function (item) {  
                return item.id_kh === $scope.id_courses;
            });
            console.log($scope.subjects);
        },
        function (error) {
            alert('lỗi lấy subjects');
            console.error(error);
        }
    );
    // trang quiz
    $scope.data_chvip = [];
    $scope.so_cau_dung = 0;
    $scope.cau_hien_tai = 0;

    $scope.next = function () { 
        $scope.cau_hien_tai++;
    }
    $scope.back = function () { 
        $scope.cau_hien_tai--
    }

    var timer;
    $scope.diem = 0;

    $scope.start_quiz = function () { 
        console.log('bắt đầu');
        $scope.btn_start = false; 
        $scope.quiz = true;
        $scope.result = false; 
        $scope.get_quiz();
        $scope.startTimer()
    }

    $scope.reset = function () {  
        $scope.btn_start = true; 
        $scope.quiz = false; 
        $scope.result = false;
    }

    $scope.show_resutl = function () {
        $scope.check_dap_an(); 
        $scope.btn_start = false; 
        $scope.quiz = false; 
        $scope.result = true; 
        $scope.stopTimer()
    }

    // thời gian làm bài 
    $scope.minutes = 12;
    $scope.seconds = 15;

    // tính thời gian
    $scope.startTimer = function () {
        timer = $interval(function () { 
            if ($scope.seconds === 0 && $scope.minutes > 0) {
                $scope.minutes -= 1;
                $scope.seconds = 60;
            }
            if ($scope.minutes <= 0 && $scope.seconds <= 0) {
                $interval.cancel(timer);
                alert("Hết thời gian làm bài");
                $scope.show_resutl();
            }
            $scope.seconds--;
        }, 1000);
    };

    // dừng đếm thời gian
    $scope.stopTimer = function () {
        if (angular.isDefined(timer)) {
            $interval.cancel(timer); 
            timer = undefined;
        }
    };

    
    $scope.get_quiz = function () {
        $http.get(`db/Quizs/${$scope.id_quiz}.js`).then( 
            function (response) {
                $scope.data_chvip = response.data.slice(0, 15); 
                $scope.tong_cau_hoi = $scope.data_chvip.length
                console.log($scope.tong_cau_hoi);
            },
            function (error) {
                alert('Ko lấy được khóa học');
                console.error(error);
            }
        );
    }

    // tính điểm
    $scope.check_dap_an = function () {
        $scope.so_cau_dung = 0;
        var test = $('input[value="quiz"]:checked'); 
        test.each(function () { 
             if (this.name === this.id) { 
                $scope.so_cau_dung++;
                $scope.diem++;
                console.log($scope.diem);
            } else {
                console.log($scope.diem);
            }
        });
        // console.log(test);
    }
    $scope.reset();

    // trang Chi tiết khóa học
    $scope.ctmonhoc = [];
    $scope.name_monhoc = '';
    $scope.img_monhoc = ''
    $http.get('db/Subjects.js').then(  
        function (response) {     
            $scope.ctmonhoc = response.data.find(function (item) {  
                return item.Id === $scope.id_quiz;    
            });
            console.log($scope.ctmonhoc);
        },
        function (error) {
            console.error('Lấy data môn học thất bại:', error);
            alert('Lấy data môn học thất bại!');
        }
    );
});