$(function () {
  // initialize tool tips
  $('[data-toggle="tooltip"]').tooltip();

  //intialize empty array list that will hold our seat user objects
  var listArr = [];
  //create a global seat nuber variable
  var seatNumber = '';

  // create global found variable for findIfReserved function
  var found = false;
  // function that tests if seat is already in array in order to see if it is reserved
  function findIfReserved (seatNPar) {
    for(var i = 0; i < listArr.length; i++) {
      if (listArr[i].seatN === seatNPar) {
        found = true;
        break;
      }
    }
  }

    // On click of car class this function sets the seatNumber variable to the relevent
    // seat and if the seat is not already in the listArr it calls the bringForm function
    // and then resets the found variable to false
    $(".car").on('click', function() {
      console.log('clicked');
      seatNumber = $(this).attr('id');
      findIfReserved(seatNumber);
      if (!found) {
      bringForm(seatNumber);
    }
    found = false;
    });

    // brings the form by setting it's css display to 'block' and shows it with a
    // jquery animation. At the top of the form it displays an H1 with a message
    // and the specific spot selected
    function bringForm (seatNumber) {
      $('#formid').css('display','block');
      $('#formMsg').text("You have selected space " + seatNumber + ".");
       $("#myform").show(275);
    }

    //function to add objects to out listArr when form is submitted
    $('#reserveButton').on('click', function() {
      var fName = $('#fName').val();
      var lName = $('#lName').val();
      var userEmail = $('#userEmail').val();
      var pNumber = $('#pNumber').val();
      var newObj = {seatN: seatNumber,
                    firstName: fName,
                    lastName: lName,
                    phoneNumber: pNumber,
                    email: userEmail};
      listArr.push(newObj);
      // alerts user that their seat is reserved
      alert("You have reserved seat " + seatNumber + ".");
      cancel();
      // changes its background color to red
      $("#" + seatNumber).css('background-color','red');
      // sets attribute in order to display tool tip with user info after seat is
      // reserved
      $("#" + seatNumber).attr('date-toggle','tool-tip');
      $("#" + seatNumber).attr('data-html', 'true');
      $("#" + seatNumber).tooltip({
							title: "Reserved by " + fName + ' ' + lName + '<br>' + userEmail + '<br>' + pNumber
						});


    });
    // cancel function is called when cancel button is clicked
    $("#cancel").on('click', function() {
      cancel();
    });

    // cancel function that hides info form
    function cancel () {
      $('#myform').hide(300);
    }
  });
