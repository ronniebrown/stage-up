// 'use strict';

// /**
//  * Module dependencies.
//  */
// var mongoose = require('mongoose'),
//   Schema = mongoose.Schema;

// /**
//  * ZipCode Schema
//  */
// var ZipCodeSchema = new Schema({
//   zip: {
//     type: Number,
//     trim: true,
//     default: ''
//   }
// });

// angular.module('zipcode').controller('ZipCodeController', ['$scope', '$http', '$location', 'Users', 'Authentication',
//   function($scope, $http, $location, Users, Authentication) {
//     // $scope.user = Authentication.user;


//     // Check if there are additional accounts 
//     $scope.checkDistance = function(home, zip) {
//       if (home === zip) return 0;
//       if (typeof home[zip] === 'number') return home[zip];
//       $http.get('https://www.zipcodeapi.com/rest/C45Baf0VUyCtb9tT9tU4PaoEa4EZhLzUQEw0TwWO4yhgILaRe5W4fkIqonqG9ZAZ/distance.json/' + home + '/' + zip + '/mile')
//         .success(function(data, status, headers, config) {
//           console.log(data); // just check it for now. we want to store it in the object for that zip code.

//         })
//         .error(function(data, status, headers, config) {});
//     };
//   }
// ]);


// // http://www.zipcodeapi.com/rest/C45Baf0VUyCtb9tT9tU4PaoEa4EZhLzUQEw0TwWO4yhgILaRe5W4fkIqonqG9ZAZ/distance.json/<zip_code1>/<zip_code2>/mile
