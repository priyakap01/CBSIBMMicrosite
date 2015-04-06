'use strict';
var x;
/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.factory('sharedProperties', function () {
        var property = [];

        return {
            getProperty: function () {
                return property;
            },
            setProperty: function(value1,value2) {
                property[0] = value1;
				property[1] = value2
            }
        };
    });
	
	

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
     $http.get('http://cbsmicrosite.stage1.mybluemix.net/api/allProjects').success(function(data) {
	    var phone,val;
        $scope.phone = data;
	

	});

	$scope.fetch = function(va)
	{

			console.log("HI"+va+"heyyyy"+$scope.phone[0].Name);
			$scope.dt = va;
		    $scope.start();
	};
	
	$scope.start = function(){
         var i = 0;
		 
		 console.log($scope.dt);
		 while(i < $scope.phone.length)
		 {
			 console.log("thereu shd ha"+$scope.phone[i].Name);
			 if($scope.dt == $scope.phone[i].Name)
			 {   
		         console.log("thereu shd ha"+$scope.phone[i].Name+$scope.dt);
				
				 console.log("breaking here");
				 $scope.phones = $scope.phone[i];
				 console.log("acd"+$scope.phones.projectStage.Consulting);
				 break;
			 }
			 i++;
		 }
		 
	
	}
	

}]);

phonecatApp.controller('updateCtrl', ['$scope', '$http','sharedProperties','$window', function($scope, $http, sharedProperties,$window) {
	
 $scope.submit= function()
 {  x= sharedProperties.getProperty()
	console.log("yikeeeeeeeees"+x[0]+"yeeehaaa"+x[1]);
    console.log('http://cbs-ppl.mybluemix.net/update/'+x[0]+'/'+x[1]);
	$window.alert('yaba daba dooooooooo');
	$http.post('http://cbs-ppl.mybluemix.net/update/'+x[0]+'/'+x[1]).success(function(data) {
	console.log("posted");
  })
 };
 }]);
 



phonecatApp.controller('mainCtrl', ['$scope', '$http','sharedProperties','$rootScope', function($scope, $http, sharedProperties,$rootScope) {
  $scope.sub=function()
	{

       // console.log("hi"+$scope.title);
		sharedProperties.setProperty($scope.title,"");
		var y = sharedProperties.getProperty();
		console.log("hi"+y[0]+"hi");
		$rootScope.name = "ypi";
	};
}]);

phonecatApp.controller('bizzCtrl', ['$scope', '$http','sharedProperties', function($scope, $http, sharedProperties) {
   var z = sharedProperties.getProperty();
   console.log("hi"+z[0]+"hi");
   $http.get("https://smp.mybluemix.net/usdata").success(function(data) {
 	$scope.bizz= data;
	
	});
   $scope.change = function()
	{
       sharedProperties.setProperty($scope.bizz[0].Emp_Code,$scope.dob);
  	}
 
}]);

phonecatApp.controller('listCtrl', ['$scope', '$http','sharedProperties', function($scope, $http, sharedProperties) {

   $http.get("http://smp.mybluemix.net/skill").success(function(data) {
 	$scope.list= data;
	
	});
  
 
}]);

phonecatApp.controller('imgCtrl', ['$scope', '$http','sharedProperties', function($scope, $http, sharedProperties) {

   $http.get("http://cbsmicrosite.stage1.mybluemix.net/img/getBanImg").success(function(data) {
 	$scope.img = data;
	console.log("hhhh"+$scope.img[3].Banner);
	
	});
  
 
}]);

phonecatApp.controller('empCtrl', ['$scope', '$http','sharedProperties', function($scope, $http, sharedProperties) {

   $http.get("http://cbsmicrosite.stage1.mybluemix.net/teamimg/getImg").success(function(data) {
 	$scope.emp = data;
	
	});
  
 
}]);

phonecatApp.controller('offCtrl', ['$scope', '$http','sharedProperties', function($scope, $http, sharedProperties) {
    var off;
    $http.get("http://cbsmicrosite.stage1.mybluemix.net/getAll").success(function(data) {
 	$scope.off = data;
	console.log("hi"+$scope.off[1].Lines[0]);
	
	});
  
 
}]);

phonecatApp.controller('offmarketingCtrl', ['$scope', '$http','sharedProperties', function($scope, $http, sharedProperties) {

    $http.get("http://cbsmicrosite.stage1.mybluemix.net/Marketing").success(function(data) {
 	$scope.mar = data;
	$scope.div = ["div1","div2","div3","div4","div5","div6","div7","div8","div9","div10","div11","div12","div13","div14","div15","div16","div17","div18","div19","div20","div21","div22","div23","div24","div25", "div26", "div27"];
	console.log("hi"+$scope.mar[0].Tab1.Name);
	$scope.ind = 0;
	
	});
  
 
}]);

phonecatApp.controller('offoperationCtrl', ['$scope', '$http','sharedProperties', function($scope, $http, sharedProperties) {
	console.log("Inside offoperationCtrl...");
	$http.get("http://cbsmicrosite.stage1.mybluemix.net/Operation").success(function(data) {
 	$scope.op = data;
	$scope.div = ["div1","div2","div3","div4","div5","div6","div7","div8","div9","div10","div11","div12","div13","div14","div15","div16","div17","div18","div19","div20","div21","div22","div23","div24","div25", "div26", "div27"];
	console.log("hi"+$scope.op[0].Tab1.Name);
	$scope.ind = 0;
	});
  
 
}]);

phonecatApp.controller('offfinanceCtrl', ['$scope', '$http','sharedProperties', function($scope, $http, sharedProperties) {

   $http.get("http://cbsmicrosite.stage1.mybluemix.net/Finance").success(function(data) {
 	$scope.fin = data;
	$scope.div = ["div1","div2","div3","div4","div5","div6","div7","div8","div9","div10","div11","div12","div13","div14","div15","div16","div17","div18","div19","div20","div21","div22","div23","div24","div25", "div26", "div27"];
	//console.log("hi"+$scope.op[0].Tab1.Name);
	$scope.ind = 0;
	});
  
 
}]);

phonecatApp.controller('offhrCtrl', ['$scope', '$http','sharedProperties', function($scope, $http, sharedProperties) {

   $http.get("http://cbsmicrosite.stage1.mybluemix.net/HR").success(function(data) {
 	$scope.hr = data;
	$scope.div = ["div1","div2","div3","div4","div5","div6","div7","div8","div9","div10","div11","div12","div13","div14","div15","div16","div17","div18","div19","div20","div21","div22","div23","div24","div25", "div26", "div27"];
	//console.log("hi"+$scope.op[0].Tab1.Name);
	$scope.ind = 0;
	
	});
  
 
}]);

phonecatApp.controller('logoCtrl', ['$scope', '$http','sharedProperties', function($scope, $http, sharedProperties) {

   $http.get("http://cbsmicrosite.stage1.mybluemix.net/logo/getlogo").success(function(data) {
 	$scope.logo = data;
	console.log("heee"+$scope.logo[0].logos[0]);
	});
  
 
}]);


