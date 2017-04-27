$(function () {
  // initialize tool tips
  $('[data-toggle="tooltip"]').tooltip();

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

    $(".car").on('click', function() {
      console.log('clicked');
      seatNumber = $(this).attr('id');
      findIfReserved(seatNumber);
      if (!found) {
      bringForm(seatNumber);
    }
    found = false;
    });

    function bringForm (seatNumber) {
      $('#formid').css('display','block');
      $('#formMsg').text("You have selected seat " + seatNumber + ".");
       $("#myform").show(500);
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
                    email: userEmail,
                    reserved: true};
      listArr.push(newObj);
      console.log(newObj);
      alert("You have reserved seat " + seatNumber + ".");
      cancel();
      $("#" + seatNumber).css('background-color','red');
      $("#" + seatNumber).attr('date-toggle','tool-tip');
      $("#" + seatNumber).attr('data-html', 'true');
      $("#" + seatNumber).tooltip({
							title: "Reserved by " + fName + ' ' + lName + '<br>' + userEmail + '<br>' + pNumber
						});


    });

    $("#cancel").on('click', function() {
      cancel();
    });

    function cancel () {
      $('#myform').hide(300);
      // $('#myform').css("display","none");
    }

    $(".car").on('hover',function() {
      $(".car").attr('date-toggle','tool-tip');
      $(".car").attr('data-html', 'true');
      var msg = "Reserve this spot!"
      $(".car").tooltip({
							title: msg
						});
    });



  });
