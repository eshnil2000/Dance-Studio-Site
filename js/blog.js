function BlogController($scope) {
  $scope.posts = [];
  $scope.addPost = function() {
  	console.log('addPost called');
    var now = new Date();
    var time = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM TT Z");
  $scope.posts.push({ title: $scope.postTitle,
                      content: $scope.postContent,
                      time: time,
                      backgroundColor: $scope.backgroundColor });
  }
}
