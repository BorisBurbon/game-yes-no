'use strict';

<!-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->
<!-- configuration -->
<!-- =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= -->

angular.module('chat').constant( 'config', {
  //
  // Get your PubNub API Keys in the link above.
  //
  "pubnub": {
    "publish-key"   : "YOUR-PUBLISH-KEY",
    "subscribe-key" : "YOUR-SUBSCRIBE-KEY"
  }
} );


angular.module('myApp.view2', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);

//var chat = angular.module( 'BasicChat', ['chat'] );
//chat.controller( 'chat', [ 'Messages', '$scope', function( Messages, $scope ) {
//  // Message Inbox
//  $scope.messages = [];
//  // Receive Messages
//  Messages.receive(function(message){
//    $scope.messages.push(message);
//  });
//  // Send Messages
//  $scope.send = function() {
//    Messages.send({ data : $scope.textbox });
//  };
//} ] );