window.onload = function () {
  $("h1").hide();
};

$(document).ready(function () {
  $("#test").click(function () {
    $("h1").show();
  });
});
