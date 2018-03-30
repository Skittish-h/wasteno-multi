var angle = 0;

var intervalID = window.setInterval(myCallback, 50);

function myCallback() {
  $("#image").rotate(angle);
  angle+=2;
}
