﻿document.addEventListener("DOMContentLoaded", function () {
  var countDownDate = new Date("Feb 1, 2023 00:00:00").getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("ngay").innerHTML = days;
    document.getElementById("gio").innerHTML = hours;
    document.getElementById("phut").innerHTML = minutes;
    document.getElementById("giay").innerHTML = seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("ngay").innerHTML = "0";
      document.getElementById("gio").innerHTML = "0";
      document.getElementById("phut").innerHTML = "0";
      document.getElementById("giay").innerHTML = "0";
    }
  }, 1000);

}, false)