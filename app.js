function digitalClock(){
  var clock = new Date();
  var hr = clock.getHours();
  var min = clock.getMinutes();
  var sec = clock.getSeconds();
  var ap;

  if (hr >= 12) {
    ap = "PM";
  } else {
    ap = "AM";
  }

  hr = hr % 12;
  if (hr == 0) {
    hr = 12;
  }

  document.getElementById('hours').innerHTML = hr;
  document.getElementById('minutes').innerHTML = min;
  document.getElementById('seconds').innerHTML = sec;
  document.getElementById('ampm').innerHTML = ap;
}
digitalClock();
setInterval(digitalClock, 1000);

function dt(){
  var date = new Date();
  var mon = date.getMonth() + 1;
  var day = date.getDate();
  var year = date.getFullYear();
  document.getElementById('month').innerHTML = mon;
  document.getElementById('day').innerHTML = day;
  document.getElementById('year').innerHTML = year;
}
dt();
