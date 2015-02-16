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

$(document).ready(function() {

  // initialize the calendar on document ready 

  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth();
  var y = date.getFullYear();

  $('#button_id').click(function() {
    var newEvent = {
      title: 'NEW EVENT',
      start: new Date(y, m, d)
    };
    $('#calendar').fullCalendar( 'renderEvent', newEvent , 'stick');
  });



  // calendar functions below
  $('#calendar').fullCalendar({
    // calendar functions below
    dayClick: function() {
      console.log('a day has been clicked!');
      // add new event function here
    },

    // calendar options below
    editable: true,
    eventColor: "#000000",
    eventTextColor: "#ffffff",
    // eventLimit option may need to be changed
    eventLimit: true,
    fixedWeekCount: false,
    header: {
      left:   'title',
      center: '',
      right:  'prev,today,next'
    },
    weekends: true
  });


});
