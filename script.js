$(document).ready(function() {
  //Holds the current number in session Time and breakTime
  var sessionTime = 25;
  var breakTime = 5;
  var startPause = true;

  //Change the session time with the click of the + or -
  $('.session-timeControls-plus').on('click', function() {
    sessionTime += 1;
    $('.session-time').text(sessionTime);
  });
  $('.session-timeControls-minus').on('click', function() {
    sessionTime -= 1;
    $('.session-time').text(sessionTime);
  });

  //Change the break time with the click of the + or -
  $('.break-timeControls-plus').on('click', function() {
    breakTime += 1;
    $('.break-time').text(breakTime);
  });
  $('.break-timeControls-minus').on('click', function() {
    breakTime -= 1;
    $('.break-time').text(breakTime);
  });

  //Start the Timer and change the button to "pause"
  $('#start-pause').on('click', function() {
    if(startPause) {
      $('#start-pause').text("Pause");
      $('#timer').text(sessionTime + ":00");
      startPause = false;
      $('#reset').show();
    } else {
      $('#start-pause').text("Start");
      startPause = true;
      $('#reset').hide();
    }
  });

  //reset the timer and everything ele
  $('#reset').on('click', function() {
    $('#timer').text("25:00");
    $('#reset').hide();
    sessionTime = 25;
    $('.session-time').text(sessionTime);
    breakTime = 5;
    $('.break-time').text(breakTime);
    startPause = true;
    $('#start-pause').text("Start");
  });


});
