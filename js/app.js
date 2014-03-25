var app = angular.module("demo", []);

function demoController($scope){
    $scope.message = "from angularjs";
    $scope.options = {
        facebook : false,
        twitter : false,
        google : false
    };
}

app.directive("btnCheckbox", function(){
    return {
        require:"ngModel",
        link: function(scope, element, attr, ngModel){
                scope.$watch(function(){
                    return ngModel.$modelValue;
                }, function(modelValue){
                    //console.log(modelValue);
                    if (modelValue) {
                        element.addClass("active");
                        console.log('now val is'+ modelValue);
                    }else{
                        element.removeClass("active");
                        console.log('now val is'+ modelValue);
                    };
                });
                element.bind("click", function(){
                    scope.$apply(function(){
                        ngModel.$setViewValue(element.hasClass("active") ? false : true);
                    });
                })
            }
    }
});