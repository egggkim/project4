// Angular Rails Template
// source: app/assets/javascripts/templates/event.html.erb

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("event.html", '<h1>All events</h1>\n\n<!-- all events view is rendering all events even without the list below ... needs to be fixed -->\n<div id="event-list" ng-controller="EventsController as events">\n  <ul>\n    <li ng-repeat="event in events.eventList">\n     <p>Address: {{ event.address }}</p>\n     <p>Date: {{ event.date }}</p>\n     <p>Start Time:{{ event.start_time }}</p>\n     <p>End Time:{{ event.end_time }}</p>\n    </li>\n  </ul>\n</div>')
}]);

