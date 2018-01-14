var minutes, seconds, timer, breakTime, sessionTime;

$(document).ready(function() {
  //Holds the current number in session Time and breakTime
  sessionTime = 25;
  breakTime = 5;
  var isPaused = false;

  //Change the session time with the click of the + or -
  $(".session-timeControls-plus").on("click", function() {
    sessionTime += 1;
    $(".session-time").text(sessionTime);
  });
  $(".session-timeControls-minus").on("click", function() {
    sessionTime -= 1;
    $(".session-time").text(sessionTime);
  });

  //Change the break time with the click of the + or -
  $(".break-timeControls-plus").on("click", function() {
    breakTime += 1;
    $(".break-time").text(breakTime);
  });
  $(".break-timeControls-minus").on("click", function() {
    breakTime -= 1;
    $(".break-time").text(breakTime);
  });

  //Start the Timer
  $("#start-pause").on("click", function() {
    $("#start-pause").hide();
    $("#pause").show();
    $("#reset").show();

    if (isPaused) {
      minutes = $(".minute").text();
      seconds = $(".second").text();
    } else {
      $(".minute").text(sessionTime);
    }

    //get the minutes from the clock
    minutes = $(".minute").text();
    seconds = $(".second").text();
    //convert to numbers
    minutes = parseInt(minutes);
    seconds = parseInt(seconds);

    if (isNaN(minutes)) {
      minutes = 00;
    }
    if (isNaN(seconds)) {
      seconds = 00;
    }
    if (minutes == 60) {
      minutes = 59;
    }
    if (seconds == 60) {
      seconds = 59;
    }
    //convert to all seconds
    timer = 60 * minutes + seconds;
    //Start the timer
    t = setTimeout(countdown(), 1000);
  });
  //pause the timer
  $("#pause").on("click", function() {
    $("#start-pause").show();
    $("#pause").hide();
    $("#reset").show();
    isPaused = true;
    cdpause();
  });
  //reset the timer and everything else
  $("#reset").on("click", function() {
    $(".minute").text("25");
    $(".second").text("00");
    $("#start-pause").show();
    $("#pause").hide();
    $("#reset").hide();
    sessionTime = 25;
    $(".session-time").text(sessionTime);
    breakTime = 5;
    $(".break-time").text(breakTime);
    isPaused = false;
    cdreset();
  });
});

//This function will display the numbers on the page
function displayTime() {
  console.log("displayTime started");
  minutes = parseInt(timer / 60, 10);
  seconds = parseInt(timer % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  console.log("minutes " + minutes + " seconds " + seconds);
  // displays time in clock
  $(".minute").text(minutes);
  $(".second").text(seconds);
}

// starts countdown
function countdown() {
  console.log("Countdown started");
  if (minutes <= 00 && seconds <= 00) {
    // time is up
    clearTimeout(t);
    //play sound
    var wav = "http://thecoderpilot.com/slow-spring-board.mp3";
    var audio = new Audio(wav);
    audio.play();
    //Switch to Break or Session
    if ($("#status").text() === "Work")     {
      $("#status").text("Break");
      $(".minute").text(breakTime);
      $(".second").text("00");

    minutes = $(".minute").text();
    seconds = $(".second").text();
    //convert to numbers
    minutes = parseInt(minutes);
    seconds = parseInt(seconds);
      timer = (60 * minutes) + seconds;
      t = setTimeout("countdown()", 1000);
    } else {
      $("#status").text("Work");
      $(".minute").text(sessionTime);
      $(".second").text("00");

    minutes = $(".minute").text();
    seconds = $(".second").text();
    //convert to numbers
    minutes = parseInt(minutes);
    seconds = parseInt(seconds);
      timer = (60 * minutes) + seconds;
      t = setTimeout("countdown()", 1000);
    }
  } else {
    timer--;
    console.log("timer is now" + timer);
    t = setTimeout("countdown()", 1000);
  }
  displayTime();
}

// pauses countdown
function cdpause() {
  clearTimeout(t);
}
// resets countdown
function cdreset() {
  cdpause();
  timer = 1500;
  displayTime();
}
