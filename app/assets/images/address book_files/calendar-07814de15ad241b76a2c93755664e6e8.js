// Angular Rails Template
// source: app/assets/javascripts/templates/calendar.html.erb

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("calendar.html", '<div class="users-forms" ng-controller="EventsController as events">\n  <form ng-submit="events.addEvent()" class="add-event">\n    <input placeholder="address" ng-model="events.address">\n    <input placeholder="date" ng-model="events.date">\n    <input placeholder="start time" ng-model="events.start_time">\n    <input placeholder="end time" ng-model="events.end_time">\n    <br><input type="submit">\n    <div id="event-error"></div>\n  </form>\n</div>\n\n<div class=\'cal-container\'>\n  <div id=\'calendar\'></div>\n</div>')
}]);

