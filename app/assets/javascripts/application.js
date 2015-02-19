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

$(document).ready(function() {

  $('#calendar').fullCalendar({
    // calendar functions below
    
    // calendar options below
    events: function(start, end, timezone, callback) {
      $.ajax({
        url: '/api/events',
        dataType: 'json',
        data: {
          // our hypothetical feed requires UNIX timestamps
          start: start.unix(),
          end: end.unix()
        },
        success: function(data) {
          var events = [];
          // console.log("INSIDE SUCCESS!", data)
          event_arr = data.events;
          for (var i = 0; i < event_arr.length; i++) {
            // console.log("inside for loop");
            events.push(
              event_arr[i]
            )
            // console.log("this is events",events)
          }
          // $(data).find('event').each(function() {
          // data.events.each(function() {
          //   console.log("inside before event push")
          //   events.push({
          //     title: $(this).attr('title'),
          //     date: $(this).attr('date'),
          //     start: $(this).attr('start_time') // will be parsed
          //   });
          // });
          // $("#calendar").fullCalendar('renderEvent', events, 'stick')
          // console.log(data.events[0].date);
          // console.log(data.events[0].title);
          callback(events);
        }
      });
    },
    editable: true,
    eventColor: "#FFBEC0",
    eventStartEditable: true,
    eventDurationEditable: true,
    eventTextColor: "#606060",
    eventLimit: true,
    fixedWeekCount: false,
    header: {
      left:   'prev,today,next',
      center: 'title',
      right:  'month,agendaWeek,agendaDay'
    },
    selectable: true,
    selectHelper: true,
    weekends: true
  });


});
