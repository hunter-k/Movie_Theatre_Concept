$(function () {
  //intialize empty array list that will hold our seat user objects
  var listArr = [];

  //triggers the form and gets information from seat click
  $('div .seat').on(click(function (event) {
    var seatNumber = event.key;
    bringForm();
  })

  //function to add objects to out listArr when form is submitted
  function addUser (seatNumber) {
    var userName = $('#name').val();
    var userEmail = $('#email').val();
    var newObj = {seatN: seatNumber, name: userName, email: userEmail, reserved: true};
    listArr.push(newObj);
  }

  //TODO bring form function to display and slide down form
  //TODO display alert that confirms the reservation





});
