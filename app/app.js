import "angular";
import 'angular-ui-router';
import appComponent from "./app.component";
import AppService from "./app.svc"  
angular.module('app', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
      url: '/',
      template: '<app></app>'
    });
    
    $urlRouterProvider.otherwise('/');
  })
  .directive('app', appComponent)
  .factory('appService', AppService);

angular.element(document).ready(function () {
  angular.bootstrap(document, ['app']);
});
  