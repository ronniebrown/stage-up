// <<<<<<< HEAD
// // 'use strict';

// // /**
// //  * Module dependencies.
// //  */
// // var mongoose = require('mongoose'),
// //   Schema = mongoose.Schema;

// // /**
// //  * ZipCode Schema
// //  */
// // var ZipCodeSchema = new Schema({
// //   zip: {
// //     type: Number,
// //     trim: true,
// //     default: ''
// //   }
// // });
// =======
// 'use strict';

// /**
//  * Module dependencies.
//  */
// var mongoose = require('mongoose'),
//   Schema = mongoose.Schema,
//   http = require('http'),
//   https = require('https');

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

// ZipCodeSchema.methods.checkDistance = function(home, zip) {
//   if (home === zip) {
//     return 0;
//   } else if (typeof home[zip] === 'number') {
//     return home[zip];
//   } else {
//     var request = {
//       host: 'http://www.zipcodeapi.com/rest/GarvURD0HwmooXKVM6JZ4xx0GpxldQwU1YqVQ3VxziVYfGT2ND2RazSRZpdcgJ7h/distance.json/' + home + '/' + zip + '/mile',
      
//     }
//   }
// };
// >>>>>>> c6ab35dafdc20853402bf25eb5507ffa77ac5057

// // angular.module('zipcode').controller('ZipCodeController', ['$scope', '$http', '$location', 'Users', 'Authentication',
// //   function($scope, $http, $location, Users, Authentication) {
// //     // $scope.user = Authentication.user;


// //     // Check if there are additional accounts 
// //     $scope.checkDistance = function(home, zip) {
// //       if (home === zip) return 0;
// //       if (typeof home[zip] === 'number') return home[zip];
// <<<<<<< HEAD
// //       $http.get('https://www.zipcodeapi.com/rest/C45Baf0VUyCtb9tT9tU4PaoEa4EZhLzUQEw0TwWO4yhgILaRe5W4fkIqonqG9ZAZ/distance.json/' + home + '/' + zip + '/mile')
// =======
// //       $http.get('https://www.zipcodeapi.com/rest/GarvURD0HwmooXKVM6JZ4xx0GpxldQwU1YqVQ3VxziVYfGT2ND2RazSRZpdcgJ7h/distance.json/' + home + '/' + zip + '/mile')
// >>>>>>> c6ab35dafdc20853402bf25eb5507ffa77ac5057
// //         .success(function(data, status, headers, config) {
// //           console.log(data); // just check it for now. we want to store it in the object for that zip code.

// //         })
// //         .error(function(data, status, headers, config) {});
// //     };
// //   }
// // ]);


// <<<<<<< HEAD
// // // http://www.zipcodeapi.com/rest/C45Baf0VUyCtb9tT9tU4PaoEa4EZhLzUQEw0TwWO4yhgILaRe5W4fkIqonqG9ZAZ/distance.json/<zip_code1>/<zip_code2>/mile
// =======
// // http://www.zipcodeapi.com/rest/GarvURD0HwmooXKVM6JZ4xx0GpxldQwU1YqVQ3VxziVYfGT2ND2RazSRZpdcgJ7h/distance.json/<zip_code1>/<zip_code2>/mile
// >>>>>>> c6ab35dafdc20853402bf25eb5507ffa77ac5057
