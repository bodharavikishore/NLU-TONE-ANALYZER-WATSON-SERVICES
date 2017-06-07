app.controller('ctrl1',function($scope,$http){
  $scope.validate=function(){

   var res = {
       method : 'POST',
       url : 'http://localhost:8081/login',
       data : {
          email: $scope.email,
         password: $scope.password
       },
        headers: {
                   'Content-Type': 'Application/json'
               },
   };
   $http(res).then(function(response){
       var test = response.data;

   })
}
})
