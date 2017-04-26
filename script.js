$(function () {
  //intialize empty array list that will hold our seat user objects
  var listArr = [];
  var seatNumber = '';
  var found = false;

  function findIfReserved (seatNPar) {
    for(var i = 0; i < listArr.length; i++) {
      if (listArr[i].seatN === seatNPar) {
        found = true;
        break;
      }
    }
  }

    $(".seat").on('click', function() {
      seatNumber = $(this).attr('id');
      findIfReserved(seatNumber);
      if (!found) {
      bringForm(seatNumber);
    }
    found = false;
    });

    function bringForm (seatNumber) {
      $('#form').css('display','block');
      $('#formMsg').text("You have selected seat " + seatNumber);
    }

    //function to add objects to out listArr when form is submitted
    $('#reserveButton').on('click', function() {
      var userName = $('#name').val();
      var userEmail = $('#email').val();
      var newObj = {seatN: seatNumber, name: userName, email: userEmail, reserved: true};
      listArr.push(newObj);
      console.log(newObj);
      alert("You have reserved seat " + seatNumber);
      cancel();

    });

    $("#cancel").on('click', function() {
      cancel();
    });

    function cancel () {
      $('#form').css('display','none');
    }








  });
