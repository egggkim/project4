$(document).ready(function() {
  $('#calendar').fullCalendar({
    googleCalendarApiKey: 'AIzaSyB8FH93RuviMXPFEir_-WUD7yXxkEha0Uc',
    events: {
      googleCalendarId: 'https://www.google.com/calendar/embed?src=karenskimdev%40gmail.com&ctz=America/Los_Angeles'
    }
  });
});
