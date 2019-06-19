
var app = angular.module('flappernews', ['ui.router']);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider){

        $stateProvider.state('index', {
            url: '/index',
            template: '/index.html',
            controller: 'MainCtrl'
        });

        $urlRouterProvider.otherwise('index');
    }
]);

app.factory('posts', [
    function(){
        var o = {
            posts: [{title: 'hello', link: '', upvotes: 0}]
        };
        return o;
    }
])
.controller('MainCtrl', ['$scope', 'posts', function($scope, posts){
   
    $scope.posts = posts.posts;

    $scope.addPost = function () {
        if(!$scope.title || $scope.title === '') {return;}
        $scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0 });
        $scope.title = '';
        $scope.link = '';
    };

    $scope.increasePost = function (post) {
        post.upvotes += 1;
    }
}]);







