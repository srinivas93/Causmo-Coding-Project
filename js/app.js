var myApp = angular.module("myApp", []);
myApp.controller('myController', function($scope,$http) {
    $http.get('assignment_blob.json').success(function(response) {
       $scope.content = response.cause;
        
        $scope.campaigns =[];
        $scope.stats = [];
        $scope.recentDonations = [];
        $scope.prof = response.profile;
        angular.forEach(response.cause, function(value,key){
            angular.forEach(value.campaigns,function(value1,key){
                angular.forEach(value1.recentDonations,function(rd,key ) {
                    $scope.recentDonations.push(rd);
                
             });
            //$scope.stats.push(value);   
            
                })          
               
    
        
            
        
            });
        });
        
    

    });

