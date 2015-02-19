// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require angular
//= require angular-resource
//= require angular-route
//= require angular-rails-templates
//= require moment
//= require fullcalendar
//= require fullcalendar/gcal
//= require_tree .
//= require_tree ./templates

function initialize() {
  document.getElementByTagName('div').style.backgroundColor="red";
}

// $(document).ready(function() {
//     var date = new Date();
//     var d = date.getDate();
//     var m = date.getMonth();
//     var y = date.getFullYear();

//     var calendar = $('#calendar').fullCalendar({
//       header: {
//           left: 'prev,next today',
//           center: 'title',
//           right: 'month,agendaWeek,agendaDay'
//       },
//       selectable: true,
//       selectHelper: true,
//       select: function(start, end, allDay) {
//         var title = prompt('Event Title:');
//         if (title) {
//           calendar.fullCalendar('renderEvent',
//             {
//               title: title,
//               start: start,
//               end: end,
//               allDay: allDay
//             },
//             true // make the event "stick"
//           );
//         }
//         calendar.fullCalendar('unselect');
//       },
//       editable: true,
//     });
// });

$(document).ready(function() {

  $('#calendar').fullCalendar({
    // calendar functions below
    
    // calendar options below
    editable: true,
    // seeded events for testing
    eventSources: '/api/events',
    eventColor: "#FFBEC0",
    eventStartEditable: true,
    eventDurationEditable: true,
    eventTextColor: "#606060",
    // eventLimit option may need to be changed
    eventLimit: true,
    fixedWeekCount: false,
    header: {
      left:   'prev,today,next',
      center: 'title',
      right:  'month,agendaWeek,agendaDay'
    },
    selectable: true,
    selectHelper: true,
      select: function(start, end, allDay) {
        var title = prompt('Event Title:');
        if (title) {
          calendar.fullCalendar('renderEvent',
            {
              title: title,
              start: start,
              end: end,
              allDay: allDay
            },
            true // make the event "stick"
          );
        }
        calendar.fullCalendar('unselect');
      },
    weekends: true
  });


});
