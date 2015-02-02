// Get the hour of the day
var date = new Date();
var current_hour = date.getHours();

console.log(current_hour);



// IF NIGHTTIME,
if ( current_hour >= 11 ) {

// Remove 'day' class
$('body').toggleClass('day');

// Add 'night'class
$('body').toggleClass('night');

};


