'use strict';

angular.module('articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles', 'Users',
	function($scope, $stateParams, $location, Authentication, Articles, Users) {
		$scope.authentication = Authentication;

		$scope.formData = {};
		
    $scope.tabs = [{
            title: 'about',
            url: 'one.tpl.html'
        }, {
            title: 'work samples',
            url: 'two.tpl.html'
        }, {
            title: 'questions',
            url: 'three.tpl.html'
    }];

    $scope.currentTab = 'one.tpl.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    };
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    };



		$scope.create = function() {
			var article = new Articles($scope.formData);
			article.$save(function(response) {
				console.log($scope.formData);
				console.log(response);
				$location.path('articles/' + response._id);

				// $scope.title = '';
				// $scope.content = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.remove = function(article) {
			if (article) {
				article.$remove();

				for (var i in $scope.articles) {
					if ($scope.articles[i] === article) {
						$scope.articles.splice(i, 1);
					}
				}
			} else {
				$scope.article.$remove(function() {
					$location.path('articles');
				});
			}
		};

		$scope.update = function() {
			var article = $scope.article;

			article.$update(function() {
				$location.path('articles/' + article._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.articles = Articles.query();
		};

		$scope.findOne = function() {
			$scope.profile = Articles.get({
				articleId: $stateParams.articleId
			});
		};
	}
]);