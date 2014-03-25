// script.js

	// create the module and name it scotchApp
    // also include ngRoute for all our routing needs
    angular.module('angular-carousel',[]);
    //angular.module('eshuApp',['ngRoute']);

    var eshuApp = angular.module('eshuApp', ["ngRoute","angular-carousel"]);
	//angular.module('eshuApp',['angular-carousel']);

	//var eshuApp = angular.module('eshuApp', ['ngRoute']);
	//var eshuCarousel= angular.module('eshuCarousel', ['angular-carousel']);
	// configure our routes
	eshuApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})

			.when('/photos', {
				templateUrl : 'pages/photos.html',
				controller  : 'DemoCtrl'
			});
	});

	eshuApp.controller('DemoCtrl',function($scope,$timeout){

            $scope.colors = ["#fc0003", "#f70008", "#f2000d", "#ed0012", "#e80017", "#e3001c", "#de0021", "#d90026", "#d4002b", "#cf0030", "#c90036", "#c4003b", "#bf0040", "#ba0045", "#b5004a", "#b0004f", "#ab0054", "#a60059", "#a1005e", "#9c0063", "#960069", "#91006e", "#8c0073", "#870078", "#82007d", "#7d0082", "#780087", "#73008c", "#6e0091", "#690096", "#63009c", "#5e00a1", "#5900a6", "#5400ab", "#4f00b0", "#4a00b5", "#4500ba", "#4000bf", "#3b00c4", "#3600c9", "#3000cf", "#2b00d4", "#2600d9", "#2100de", "#1c00e3", "#1700e8", "#1200ed", "#0d00f2", "#0800f7", "#0300fc"];

            function addSlide(target, style) {
                var i = target.length;
                target.push({
                    label: 'slide #' + (i + 1),
                    img: 'http://lorempixel.com/450/300/' + style + '/' + (i % 10) ,
                    color: $scope.colors[ (i*10) % $scope.colors.length],
                    odd: (i % 2 === 0)
                });
            };

            function addSlides(target, style, qty) {
                for (var i=0; i < qty; i++) {
                    addSlide(target, style);
                }
            }

            // 1st ngRepeat demo
            $scope.slides = [];
            addSlides($scope.slides, 'sports', 3);
            //console.log('in DemoCtrl');

            
        
	});

	eshuApp.controller('mainController', function($scope) {
		

		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
		// 1st ngRepeat demo
    	//$scope.slides = [];
    	//addSlides($scope.slides, 'sports', 50);
	});
	

	eshuApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	eshuApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});

	

    

