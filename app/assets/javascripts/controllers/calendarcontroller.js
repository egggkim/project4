angular
  .module("app")
  .controller("CalendarController", CalendarController);

  CalendarController.$inject = ['ui-calendar'];

function CalendarController() {
  console.log("hi")
}