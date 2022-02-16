window.TestProcessController = function($scope, $http, $routeParams){
    $scope.apiUrl = "http://localhost:3000";
    $scope.questions = [];
    
    $http.get(`${$scope.apiUrl}/${$routeParams.subjectId}`)
      .then(response => {
          if(response.statusText == "OK"){
            $scope.questions = response.data;
            }
        })
    // $scope.subjects = GlobalSubjects;
    // $scope.quizs = eval($routeParams.subjectId + "Questions");
    console.log($routeParams.subjectId);
}