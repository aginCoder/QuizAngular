app.controller('contactCtrl', function ($scope, $http) {
    $scope.formData = {};

    $scope.submitContactForm = function () {
        if ($scope.contactForm.$valid) {
            $http.post('/submit_contact_form', $scope.formData)
                .then(function (response) {
                    console.log(response.data);
                    alert("Your message has been sent. Thank you!");
                    $scope.formData = {};
                    $scope.contactForm.$setPristine();
                    $scope.contactForm.$setUntouched();
                })
                .catch(function (error) {
                    console.error('Lỗi khi gửi thông điệp: ', error);
                    alert("Đã có lỗi xảy ra. Vui lòng thử lại sau!");
                });
        }
    };
});
