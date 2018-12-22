  //setup ajax error handling
  $.ajaxSetup({
      error: function(response) {
          var r = jQuery.parseJSON(response.responseText);
          //alert(r.message);
          showSnackbar("danger", r.message)
      }
  });
  // trigger snackbar function
  function showSnackbar(typeOfAlert, alertMessage) {
debugger;
      $("#snackbar").addClass("show alert-" + typeOfAlert).html(alertMessage);
      setTimeout(function() {
          $("#snackbar").removeClass("show alert-"+ typeOfAlert);
      }, 10000);
  }
