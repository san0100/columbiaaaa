document.addEventListener("DOMContentLoaded", function() {
  function fadeInOut(element, delay, duration) {
    setTimeout(function() {
      element.style.opacity = 1;
      setTimeout(function() {
        element.style.opacity = 0;
        setTimeout(function() {
          element.style.display = "none";
        }, 500);
      }, duration - 500);
    }, delay);
  }

  var loveForColumbia = document.getElementById("loveForColumbia");
  fadeInOut(loveForColumbia, 1000, 8000);

  var invitationText = document.getElementById("invitationText");
  setTimeout(function() {
    invitationText.style.display = "block";
    fadeInOut(invitationText, 1000, 5000);
  }, 9000);

  var columbiaText = document.getElementById("columbiaText");
  setTimeout(function() {
    columbiaText.style.display = "block";
    fadeInOut(columbiaText, 1000, 5000);
  }, 15000);

  var codedBy = document.getElementById("codedBy");
  setTimeout(function() {
    codedBy.style.display = "block";
    fadeInOut(codedBy, 1000, 90000);
  }, 23000);
});
