'use strict';

/**
 * @ngdoc function
 * @name myWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myWebsiteApp
 */
angular.module('myWebsiteApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      {
        "name": "HTML"
      },
      {
        "name": "CSS"
      },
      {
        "name": "Javascript"
      },
      {
        "name": "Jquery"
      },
      {
        "name": "Mustache"
      },
      {
      	"name": "PHP"
      },
      {
      	"name": "React"
      },
      {
      	"name": "Angular"
      }

    ];
  });
