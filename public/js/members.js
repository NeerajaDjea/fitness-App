$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-firstName").text(data.firstName);
    $(".member-lastName").text(data.lastName);
    $(".member-email").text(data.email);
    $(".member-id").text(data.id);
    $(".member-age").text(data.age);
    $(".member-gender").text(data.gender);
    $(".member-weight").text(data.weight);
    $(".member-targetWeight").text(data.targetWeight);
  });
});