
app.controller('ctrl',function($scope,$http){
  $scope.adduser=function(){

   var res = {
       method : 'POST',
       url : 'http://localhost:8081/register',
       data : {
         fname:$scope.fname,
         lname:$scope.lname,
        email: $scope.email,
         password: $scope.password
       },
        headers: {
                   'Content-Type': 'Application/json'
               },
   };
   $http(res).then(function(response){
       var test = response.data;
       alert(test);
   })
}
})
