
//Set Variables for Time Slot & Event
var time = 9;
var eventInput = "";

//Array Info for request and response to local storage when called
var currentTime = parseInt(moment().format('H'));
var event = JSON.parse(localStorage.getItem('event')) || [];
var checkStorage = localStorage.getItem('event');

//Set "Current Time" for user display on jumbotron
$('#currentDay').text(moment().format('llll'));

//Set function for .on("click") on save button



//Set functions for css color codes (past, present, future)


//