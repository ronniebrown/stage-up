'use strict';

// Setting up route
angular.module('articles').config(['$stateProvider',
  function($stateProvider) {
    // Articles state routing
    $stateProvider.
    state('listArticles', {
        url: '/articles',
        templateUrl: 'modules/articles/views/list-articles.client.view.html'
      }).
      // state('createArticle', {
      //   url: '/articles/create',
      //   templateUrl: 'modules/articles/views/create-article.client.view.html'
      // }).
    state('viewArticle', {
      url: '/articles/:articleId',
      templateUrl: 'modules/articles/views/profile.html',
      controller: 'ArticlesController'
    }).
    state('form', {
      url: '/form',
      templateUrl: 'modules/articles/views/questions.html',
      controller: 'ArticlesController'
    }).
    state('form.quest1', {
      url: '/quest1',
      templateUrl: 'modules/articles/views/quest1.html'
    }).
    state('form.quest2', {
      url: '/quest2',
      templateUrl: 'modules/articles/views/quest2.html'
    }).
    state('form.quest3', {
      url: '/quest3',
      templateUrl: 'modules/articles/views/quest3.html'
    }).
    state('editArticle', {
      url: '/articles/:articleId/edit',
      templateUrl: 'modules/articles/views/edit-article.client.view.html'
    }).
    state('ratingVisualizer', {
      url: '/ratingVisualizer',
      templateUrl: 'modules/articles/views/ratingVisualizer.html'
    });
  }
]);
