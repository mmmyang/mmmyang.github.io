(function() {
    'use strict';
    var app = angular.module('myApp', ['ngMaterial']);

    // bootstrap app
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['myApp']);
    });
}());