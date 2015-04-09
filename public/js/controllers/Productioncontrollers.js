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
	
	phonecatApp.factory('sharedProperties2', function () {
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
	
		phonecatApp.factory('sharedProperties3', function () {
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
		phonecatApp.factory('sharedProperties4', function () {
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
/*
phonecatApp.controller('offCtrl', ['$scope', '$http','sharedProperties', function($scope, $http, sharedProperties) {
    var off;
	console.log("inside all");
    $http.get("http://cbsmicrosite.stage1.mybluemix.net/getAll").success(function(data) {
 	$scope.off = data;
	console.log("hi"+$scope.off[1].Lines[0]);
	console.log("length"+$scope.off.length);
	sharedProperties.setProperty($scope.off.length,"");
	
	});
  
 
*/

phonecatApp.controller('offmarketingCtrl', ['$scope', '$http','sharedProperties', function($scope, $http, sharedProperties) {
    console.log("inside marketing");
    $http.get("http://cbsmicrosite.stage1.mybluemix.net/Marketing").success(function(data) {
 	$scope.mar = data;
	$scope.div = ["div1","div2","div3","div4","div5","div6","div7","div8","div9","div10","div11","div12","div13","div14","div15","div16","div17","div18","div19","div20","div21","div22","div23","div24","div25", "div26", "div27"];
	console.log("hi"+$scope.mar[0].Tab1.Name);
	$scope.ind = 0;
	
	
    sharedProperties.setProperty($scope.mar.length,"");

	});
  
 
}]);

phonecatApp.controller('offoperationCtrl', ['$scope', '$http','sharedProperties','sharedProperties2', function($scope, $http, sharedProperties,sharedProperties2) {
	console.log("Inside offoperationCtrl...");
	$http.get("http://cbsmicrosite.stage1.mybluemix.net/Operation").success(function(data) {
 	$scope.op = data;
	console.log("length"+$scope.op.length);
	
	$scope.oplength = sharedProperties.getProperty();
	console.log("oplength"+$scope.oplength[0]);
	
	$scope.div = ["div1","div2","div3","div4","div5","div6","div7","div8","div9","div10","div11","div12","div13","div14","div15","div16","div17","div18","div19","div20","div21","div22","div23","div24","div25", "div26", "div27"];
	console.log("hi"+$scope.op[0].Tab1.Name);
	$scope.oplensum = $scope.op.length+$scope.oplength[0];
	console.log("sum"+$scope.oplensum);
	$scope.ind = 0;
	sharedProperties2.setProperty($scope.oplensum,"");
	});
  
 
}]);

phonecatApp.controller('offfinanceCtrl', ['$scope', '$http','sharedProperties2','sharedProperties3', function($scope, $http, sharedProperties2,sharedProperties3) {
   console.log("inside finance");
   $http.get("http://cbsmicrosite.stage1.mybluemix.net/Finance").success(function(data) {
 	$scope.fin = data;
	$scope.div = ["div1","div2","div3","div4","div5","div6","div7","div8","div9","div10","div11","div12","div13","div14","div15","div16","div17","div18","div19","div20","div21","div22","div23","div24","div25", "div26", "div27"];
	//console.log("hi"+$scope.op[0].Tab1.Name);
	$scope.ind = 0;
	console.log("fiance data"+$scope.fin.length);
	$scope.finlength = sharedProperties2.getProperty();
	console.log("finlength"+$scope.finlength[0]);
	$scope.finlensum = $scope.fin.length+$scope.finlength[0];
	console.log("finsum"+$scope.finlensum);
	sharedProperties3.setProperty($scope.finlensum,"");
	});
  
 
}]);

phonecatApp.controller('offhrCtrl', ['$scope', '$http','sharedProperties3', function($scope, $http, sharedProperties3) {
   console.log("inside hr");
   $http.get("http://cbsmicrosite.stage1.mybluemix.net/HR").success(function(data) {
 	$scope.hr = data;
	$scope.div = ["div1","div2","div3","div4","div5","div6","div7","div8","div9","div10","div11","div12","div13","div14","div15","div16","div17","div18","div19","div20","div21","div22","div23","div24","div25", "div26", "div27"];
	//console.log("hi"+$scope.op[0].Tab1.Name);
	$scope.ind = 0;
	console.log("hr data"+$scope.hr.length);
	$scope.hrlength = sharedProperties3.getProperty();
	console.log("hrlength"+$scope.hrlength[0]);
	$scope.finlensum = $scope.hr.length+$scope.hrlength[0];
	
	
	});
  
 
}]);

phonecatApp.controller('logoCtrl', ['$scope', '$http','sharedProperties', function($scope, $http, sharedProperties) {

   $http.get("http://cbsmicrosite.stage1.mybluemix.net/logo/getlogo").success(function(data) {
 	$scope.logo = data;
	console.log("heee"+$scope.logo[0].logos[0]);
	});
  
 
}]);

phonecatApp.controller("Bannerctrl", ['$scope', '$http','sharedProperties', function($scope, $http,sharedProperties) {
console.log("cntrl in controller");
$scope.i=1;
$scope.myval = true;
console.log($scope.myval);
$scope.arr = [];

$scope.editit = function()
{   console.log("clicked");
	$scope.myval = false;
}

$scope.test = function()
{
 console.log("Inside finction");	
 console.log($scope.scopenstage);
 console.log($scope.offering);

}

$scope.push11 =  function()
{
	
	
	console.log($scope.stakeholderscolor);
	console.log($scope.businessbenefitscolor);
	console.log($scope.wnscolor);
	console.log($scope.hptcolor);
	console.log($scope.managed);
	console.log($scope.risk);
	console.log($scope.ob);
	console.log($scope.ot);
	console.log($scope.stakecolor);
	console.log($scope.bbrcolor);
	console.log($scope.wnspcolor);
	console.log($scope.hptkcolor);
	console.log($scope.srmkcolor);
	console.log($scope.rmkcolor);
	console.log($scope.obkcolor);
	console.log($scope.cost);
	console.log($scope.schedule);
	console.log($scope.quality);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$scope.i = $scope.i+1;
 console.log("in push");
 console.log($scope.i);
$scope.arr.push(

	{
	'Risk_Issue': $scope.riskr,
	'Mitigation': $scope.mitigationr,
	'Resp':$scope.respr,
	'Dated':$scope.dater,
	'Status' : $scope.statusr,
	'StatusClr' : ""
	}
);
$scope.riskr = "";
$scope.mitigationr = "";
$scope.respr = "";
$scope.dater = "";
$scope.statusr = "";
 
 console.log($scope.arr);
} 


$scope.pushh2 = function(){

console.log("eeeeeeeeeee");
$scope.tableData = {
'index':"",
'Name':$scope.clientname,
'Project_Name':$scope.projectname,
'projectInfo' :{
    'Offering': $scope.offering,
	'Sector': $scope.sector,
	'Industry':$scope.industry,
	'Brands_Involved' : $scope.brandsinvolved,
	'Offering_alignment' : $scope.offeringalignment,
	'Op_model_alignment' : $scope.operationalmodelalignment,
	'GIC_PM' : $scope.projectmanager
	},
'projectStage' : {
	'Consulting':$scope.scopenstage,
    'Personalize':$scope.personalize,
    'Operation':$scope.runnoperate
	},
'projectKpi' : {
   	'Cost' : $scope.costc,
   	'CostClr': $scope.cost,
	'Schedule' : $scope.schedulec,
	'ScheduleClr' : $scope.schedule,
	'Quality' : $scope.qualityc,
	'QualityClr' : $scope.quality
	},
'projectRisk' :$scope.arr,
'Cbs_Delivery_Governance' : "",
'Contract_Status' : "",
'Project_RAG' : "",
'Remarks' : "",
'projectForecast' : {
		'Stakeholders' : $scope.stakeholderscolor,
		'Business_Benefits' : $scope.businessbenefitscolor,
		'Work_Schedule' : $scope.wnscolor,
		'Team' :$scope.hptcolor,
		'Scope' :$scope.managed,
		'Risks' :$scope.risk,
		'Organization_Benefits' :$scope.ob,
		'Overall_Status' : $scope.ot
	},

	'Reasons' : {
		'Stakeholders' : $scope.stakeholdercomment,
		'Business_Benefits' : $scope.bbr,
		'Work_Schedule' : $scope.wnsp,
		'Team' :$scope.hptk,
		'Scope' :$scope.srmk,
		'Risks' :$scope.rmk,
		'Organization_Benefits' :$scope.obk
	},

	'colourForecast': {
		'Stakeholders' : $scope.stakecolor,
		'Business_Benefits' : $scope.bbrcolor,
		'Work_Schedule' : $scope.wnspcolor,
		'Team' : $scope.hptkcolor,
		'Scope' :$scope.srmkcolor,
		'Risks' :$scope.rmkcolor,
		'Organization_Benefits' :$scope.obkcolor

	}

};

console.log($scope.tableData);

var request = $http({
	method: "POST",
	url : 'http://projectdemo.mybluemix.net/api/post  ',
	data: $.param($scope.tableData),
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}

});
request.success(function(data,status,headers){
	$scope.message = data;
	alert( "success message: " + JSON.stringify(data));
	console.log("Success" + $scope.tableData);
	
});
request.error(function(data, status, headers){
	alert( "failure message: " + JSON.stringify(data));
});	

}
}]);




phonecatApp.directive('contenteditable', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ctrl) {
      // view -> model
      element.bind('blur', function() {
        scope.$apply(function() {
          ctrl.$setViewValue(element.html());
        });
      });

      // model -> view
      ctrl.$render = function() {
        element.html(ctrl.$viewValue);
      };

      // load init value from DOM
      ctrl.$render();
    }
  };
});







phonecatApp.controller("editdashboardctrl", ['$scope', '$http','$location','sharedProperties', function($scope, $http,$location,sharedProperties) {
console.log("cntrl dash in controller");
 $http.get('http://dummytest.mybluemix.net/api/allProjects').success(function(data) {
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
		 
	
	console.log("idhar"+$scope.phones.Name);
	$scope.clientname =  $scope.phones.Name;
	$scope.projectname = $scope.phones.Project_Name;
	$scope.scopenstage = $scope.phones.projectInfo.Consulting;	
	$scope.offering = $scope.phones.projectInfo.Offering;
	$scope.industry = $scope.phones.projectInfo.Industry;
	$scope.brandsinvolved = $scope.phones.projectInfo.Brands_Involved;
	$scope.offeringalignment = $scope.phones.projectInfo.Offering_alignment;
	$scope.operationalmodelalignment = $scope.phones.projectInfo.Op_model_alignment;
    $scope.projectmanager = $scope.phones.projectInfo.GIC_PM;	
	$scope.stakeholderscolor=$scope.phones.projectForecast.Stakeholders;
	$scope.businessbenefitscolor=$scope.phones.projectForecast.Business_Benefits;
	$scope.stakeholdercomment=$scope.phones.Reasons.Stakeholders;
	$scope.stakecolor=$scope.phones.colourForecast.Stakeholders;
	$scope.wnscolor=$scope.phones.projectForecast.Work_Schedule;
	$scope.hptcolor=$scope.phones.projectForecast.Team;
	$scope.bbr=$scope.phones.Reasons.Business_Benefits;
	$scope.bbrcolor=$scope.phones.colourForecast.Business_Benefits;
	$scope.managed=$scope.phones.projectForecast.Scope;
	$scope.risk=$scope.phones.projectForecast.Risks;
	$scope.wnsp=$scope.phones.Reasons.Work_Schedule;
	$scope.wnspcolor=$scope.phones.colourForecast.Work_Schedule;
	$scope.ob = $scope.phones.projectForecast.Organization_Benefits;
	$scope.ot = $scope.phones.projectForecast.Overall_Status;
	$scope.hptk = $scope.phones.Reasons.Team;
	$scope.hptkcolor = $scope.phones.colourForecast.Team;
	$scope.srmk = $scope.phones.Reasons.Scope;
	$scope.srmkcolor = $scope.phones.colourForecast.Scope;
	$scope.rmk = $scope.phones.Reasons.Risks;
	$scope.rmkcolor = $scope.phones.colourForecast.Risks;
	$scope.obk = $scope.phones.Reasons.Organization_Benefits;
	$scope.obkcolor = $scope.phones.colourForecast.Organization_Benefits;
	$scope.cost = $scope.phones.projectKpi.CostClr;
	$scope.costc = $scope.phones.projectKpi.Cost;
	$scope.schedule = $scope.phones.projectKpi.ScheduleClr;
	$scope.schedulec = $scope.phones.projectKpi.Schedule;
	$scope.quality = $scope.phones.projectKpi.QualityClr;
	$scope.qualityc = $scope.phones.projectKpi.Quality;
	$scope.arr = $scope.phones.projectRisk;
	console.log("weeeeeeeeeeeeeeeeeeee"+$scope.phones.projectRisk[0]);
	}

$scope.arr = [];

$scope.load = function()
{
	console.log("button clicked");

 	
	
console.log("weeeeeeeeeeeeeeeeeeee"+$scope.arr[0]);
}

$scope.test = function()
{
 console.log("Inside finction");	
 console.log($scope.sector);
 console.log($scope.stakeholderscolor);
 console.log($scope.businessbenefitscolor);
}

$scope.push11 =  function()
{
 console.log("in push");
$scope.arr.push(

	{
	'Risk_Issue': $scope.riskr,
	'Mitigation': $scope.mitigationr,
	'Resp':$scope.respr,
	'Dated':$scope.dater,
	'Status' : $scope.statusr,
	'StatusClr' : ""
	}
);
$scope.riskr = "";
$scope.mitigationr = "";
$scope.respr = "";
$scope.dater = "";
$scope.statusr = "";
 
 console.log($scope.arr);
} 

$scope.myclick= function()
{
	$location.path("./admin.html");
}

$scope.pushh2 = function(){

console.log("eeeeeeeeeee");
$scope.tableData = {
'index':"",
'Name':$scope.clientname,
'Project_Name':$scope.projectname,
'projectInfo' :{
    'Offering': $scope.offering,
	'Sector': $scope.sector,
	'Industry':$scope.industry,
	'Brands_Involved' : $scope.brandsinvolved,
	'Offering_alignment' : $scope.offeringalignment,
	'Op_model_alignment' : $scope.operationalmodelalignment,
	'GIC_PM' : $scope.projectmanager
	},
'projectStage' : {
	'Consulting':$scope.scopenstage,
    'Personalize':$scope.personalize,
    'Operation':$scope.runnoperate
	},
'projectKpi' : {
   	'Cost' : $scope.costc,
   	'CostClr': $scope.cost,
	'Schedule' : $scope.schedulec,
	'ScheduleClr' : $scope.schedule,
	'Quality' : $scope.qualityc,
	'QualityClr' : $scope.quality
	},
'projectRisk' :$scope.arr,
'Cbs_Delivery_Governance' : "",
'Contract_Status' : "",
'Project_RAG' : "",
'Remarks' : "",
'projectForecast' : {
		'Stakeholders' : $scope.stakeholderscolor,
		'Business_Benefits' : $scope.businessbenefitscolor,
		'Work_Schedule' : $scope.wnscolor,
		'Team' :$scope.hptcolor,
		'Scope' :$scope.managed,
		'Risks' :$scope.risk,
		'Organization_Benefits' :$scope.ob,
		'Overall_Status' : $scope.ot
	},

	'Reasons' : {
		'Stakeholders' : $scope.stakeholdercomment,
		'Business_Benefits' : $scope.bbr,
		'Work_Schedule' : $scope.wnsp,
		'Team' :$scope.hptk,
		'Scope' :$scope.srmk,
		'Risks' :$scope.rmk,
		'Organization_Benefits' :$scope.obk
	},

	'colourForecast': {
		'Stakeholders' : $scope.stakecolor,
		'Business_Benefits' : $scope.bbrcolor,
		'Work_Schedule' : $scope.wnspcolor,
		'Team' : $scope.hptkcolor,
		'Scope' :$scope.srmkcolor,
		'Risks' :$scope.rmkcolor,
		'Organization_Benefits' :$scope.obkcolor

	}

};

console.log($scope.tableData);
$scope.tabData = angular.copy($scope.tableData)
//var request = $http.put('http://localhost:3000/img/updateBanImg/'+$scope.pagename+'/'+$scope.srno,);

var request = $http({
	method: "PUT",
	url : 'http://dummytest.mybluemix.net/api/'+$scope.clientname+'/'+$scope.projectname,
	data: $.param($scope.tableData),
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}

});
request.success(function(data,status,headers){
	$scope.message = data;
	alert( "success message: " + JSON.stringify(data));
	console.log("Success" + $scope.tableData);
	
});
request.error(function(data, status, headers){
	alert( "failure message: " + JSON.stringify(data));
});	

}
	

}]);



