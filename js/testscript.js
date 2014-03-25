   
                angular.module('DemoCtrl', [
            'angular-carousel'
        ])

              

        .controller('DemoCtrl', function($scope, $timeout) {
            $scope.setMaster = function($event) {
                //console.log("changing page");
                //console.log("before"+ $scope.hidePictures);
                $scope.hidePictures = "true";
                //console.log("after"+ $scope.hidePictures);
                var checkbox = document.getElementById("picCheckbox");
                checkbox.checked = true;
                //$scope = $scope || angular.element(document).scope();
  
                //$scope.$apply();
                //$scope.apply('hidePictures = true');
            }       
            $scope.$watch("hidePictures", function(){
                console.log("change has occured");
                console.log("hidePictures is :" + $scope.hidePictures);

            });

            //$scope.hidePictures="FALSE";
            //console.log("hidePictures is"+ $scope.hidePictures);

            $scope.colors = ["#fc0003", "#f70008", "#f2000d", "#ed0012", "#e80017", "#e3001c", "#de0021", "#d90026", "#d4002b", "#cf0030", "#c90036", "#c4003b", "#bf0040", "#ba0045", "#b5004a", "#b0004f", "#ab0054", "#a60059", "#a1005e", "#9c0063", "#960069", "#91006e", "#8c0073", "#870078", "#82007d", "#7d0082", "#780087", "#73008c", "#6e0091", "#690096", "#63009c", "#5e00a1", "#5900a6", "#5400ab", "#4f00b0", "#4a00b5", "#4500ba", "#4000bf", "#3b00c4", "#3600c9", "#3000cf", "#2b00d4", "#2600d9", "#2100de", "#1c00e3", "#1700e8", "#1200ed", "#0d00f2", "#0800f7", "#0300fc"];

            function addSlide(target, style) {
                var i = target.length;
                target.push({
                    label: 'slide #' + (i + 1),
                    //img: 'http://lorempixel.com/450/300/' + style + '/' + (i % 10) ,
                    //img: 'http://54.245.107.178/kid1.png',
                    img: 'http://127.0.0.1/Eshu/img/'+ (i+1)+'.png',
                    
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
            addSlides($scope.slides, 'sports', 9);
            //console.log('in DemoCtrl');

            
        });

        var eshuApp = angular.module('eshuApp', ["ngRoute","DemoCtrl"]);
    
        eshuApp.factory('shopFactory', function($http) {
              return {
                getShopAsync: function(callback) {
                    $http.jsonp('http://127.0.0.1:3001/events?callback=JSON_CALLBACK').success(callback)
                }
            };
        });  

    //angular.module('eshuApp',['angular-carousel']);

    //var eshuApp = angular.module('eshuApp', ['ngRoute']);
    //var eshuCarousel= angular.module('eshuCarousel', ['angular-carousel']);
    // configure our routes
    eshuApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'homeController'
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

            .when('/eventsCalendar', {
                templateUrl : 'pages/eventsCalendar.html',
                controller  : 'eventsController'
            });
    });

         eshuApp.controller('homeController', function($scope) {
        $scope.message = 'We seek to develop and strengthen creative skills, build self-esteem, develop a sense of self-importance and individuality, encourage self-expression and stimulate imagination in children.We specialize in Drawing, Painting and Bollywood Dance classes for children 5+, in Folsom, CA. Bring your child over to attend a FREE session, or come by to observe a class in progress.';
        //console.log('in about');

        
    });

        eshuApp.controller('aboutController', function($scope) {
        $scope.message = 'Eshani is versed in Eshani is versed in Eshani is versed in Eshani is versed in Eshani is versed in Eshani is versed in Eshani is versed in Eshani is versed in Eshani is versed in ';
        //console.log('in about');
    });

    eshuApp.controller('contactController', function($scope) {
        $scope.message = 'email:eshanis_1@yahoo.com';
        $scope.tel= 'Tel: +1 (916)-761-3118';
        //console.log('in contact');
        //$scope.hidePictures="true";
        //console.log("hidePictures is: "+ $scope.hidePictures);
    });

    eshuApp.controller('eventsController', function($q,$scope,shopFactory) {

        $scope.message = 'Come join the 2 and 4 week summer workshops starting in June.Both mornings & afternoon sessions will be available';
        $scope.event1=[];
        $scope.evt=[];
        
        var date = new Date();
        var d = date.getDate();
        console.log(date.getFullYear());
        var m = date.getMonth();
        var y = date.getFullYear();
         
        deferred = $q.defer();
        shopFactory.getShopAsync(function(results) {
            
            
            //deferred.resolve(results);
            //console.log($scope.event1);
            $scope.event1=results;
            //return deferred.promise;
        });
        

        setTimeout(function() 
            { 
                $scope.evt=JSON.stringify($scope.event1);
                //console.log(evt); 
                //console.log($scope.event1);
        
        //console.log("evt "+ evt);
        var test= [{"title":"Sansrity","start":"2014-10-15"},{"title":"Gujarati Samaj Show","start":"2014-11-15"},{"title":"Summer WorkShop 1","start":"2014-06-01","end":"2014-06-14"},{"title":"Summer WorkShop 2","start":"2014-06-15","end":"2014-06-30"},{"title":"Summer Enrollment Period- Discounted Rate","start":"2014-03-25","end":"2014-04-25"},{"title":"Summer Enrollment Period- Regular Rate","start":"2014-04-26","end":"2014-05-25"}] 

        $('#calendar').fullCalendar({
            editable: true,
            events:  eval($scope.evt)
            
                
            /*    {
                    title: 'Sansrity',
                    start: new Date(2014, 9, 15)
                },
                {
                    title: 'Gujarati Samaj Show',
                    start: new Date(2014, 10, 15)
                },
                {
                    title: 'Summer WorkShop 1',
                    start: new Date(2014, 5, 1),
                    end: new Date(2014, 5, 14)
                },
                {
                    title: 'Summer WorkShop 2',
                    start: new Date(2014, 5, 15),
                    end: new Date(2014, 5, 30)
                },

                {
                    title: 'Summer Enrollment Period- Discounted Rate',
                    start: new Date(2014, 2, 25),
                    end: new Date(2014, 3, 25)
                },

                {
                    title: 'Summer Enrollment Period- Regular Rate',
                    start: new Date(2014, 3, 26),
                    end: new Date(2014, 4, 25)
                },
                
               {
                    title: 'All Day Event',
                    start: new Date(2014, 0, 1)
                },
                {
                    title: 'All Day Event',
                    start: new Date(2014, 0, 1)
                },



                {
                    title: 'Long Event',
                    start: new Date(y, m, 2),
                    end: new Date(y, m, 3)
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d-3, 16, 0),
                    allDay: false
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: new Date(y, m, d+4, 16, 0),
                    allDay: false
                },
                {
                    title: 'Meeting',
                    start: new Date(y, m, d, 10, 30),
                    allDay: false
                },
                {
                    title: 'Lunch',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false
                },
                {
                    title: 'Birthday Party',
                    start: new Date(y, m, d+1, 19, 0),
                    end: new Date(y, m, d+1, 22, 30),
                    allDay: false
                },
                {
                    title: 'Click for Google',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: 'http://google.com/'
                }
                

            ] */
                });
        
            }, 250);

    });


eshuApp.directive("btnCheckbox", function(){
    return {
        require:"ngModel",
        link: function(scope, element, attr, ngModel){
                scope.$watch(function(){

                    return ngModel.$modelValue;
                }, function(modelValue){
                    //console.log(modelValue);
                    if (modelValue) {
                        element.addClass("active");
                        //console.log('now val is'+ modelValue);
                    }else{
                        element.removeClass("active");
                        //console.log('now val is'+ modelValue);
                    };
                });
                element.bind("click", function(){
                    scope.$apply(function(){
                        //ngModel.$setViewValue(element.hasClass("active") ? false : true);
                        scope.hidePictures='true';
                        scope.$apply('hidePictures = true');
                        scope.$apply();

                    });
                })
            }
    }
});

