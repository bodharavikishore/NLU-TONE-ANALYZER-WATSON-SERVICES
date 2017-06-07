

var app = angular.module("myApp",['ngRoute']);
console.log('abc');
app.config(function($routeProvider){
$routeProvider
.when('/submit',{
  templateUrl:'login.html',
  controller:'ctrl'
})
.when('/button',{
  templateUrl:'next.html',
  controller:'ctrl1'
})

})
