// Angular Rails Template
// source: app/assets/javascripts/templates/index.html.erb

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("index.html", "<div class='cal-container'>\n  <div id='calendar'></div>\n</div>\n")
}]);

