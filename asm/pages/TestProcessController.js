window.TestProcessController = function($scope, $http, $routeParams){
    $scope.apiUrl = "http://localhost:3000";
    $scope.questions = [];
    $scope.countAnswers = 0;
    $scope.score = 0;
    
    $scope.chooseAnswer = function(ev){
        // const question = ev.target.getAttribute("q_id");
        // const answer = ev.target.getAttribute("a_id");

        // console.log(question, answer);
    }

    $http.get(`${$scope.apiUrl}/${$routeParams.subjectId}`)
      .then(response => {
          if(response.statusText == "OK"){
                // response.data - bộ câu hỏi (rất nhiều)
                // lấy random 10 câu hỏi trong bộ này
                while($scope.questions.length < 10){
                    var randomIndex = Math.floor(Math.random() * response.data.length);
                    const tmpQuestion = response.data[randomIndex];
                    // array.indexOf(object) => return -1 nếu object chưa có trong mảng
                    // => return index của phần tử nếu object trùng 1 phần tử nào đó trong mảng
                    if($scope.questions.indexOf(tmpQuestion) == -1){
                        $scope.questions.push(tmpQuestion);
                    }
                }
            
            }
        })
    // $scope.subjects = GlobalSubjects;
    // $scope.quizs = eval($routeParams.subjectId + "Questions");
    console.log($routeParams.subjectId);
}