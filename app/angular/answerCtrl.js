// app.controller('qaCtrl', function ($scope, $http) {
//     $scope.error = "";
//     $scope.content = '';

//     $scope.submitQuestion = function () {
//         if (!$scope.content) {
//             $scope.error = "Vui lòng nhập nội dung";
//             return;
//         }
//         $http.post('/submit_question', { content: $scope.content })
//             .then(function (response) {
//                 console.log(response.data);
//                 alert("Câu hỏi của bạn đã được gửi đi!");
//                 $scope.content = '';
//                 $scope.error = '';
//             })
//             .catch(function (error) {
//                 console.error('Lỗi khi gửi câu hỏi: ', error);
//                 $scope.error = "Đã có lỗi xảy ra. Vui lòng thử lại sau!";
//             });
//     };
// });
