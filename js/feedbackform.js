$(function () {
    $('.error').hide();
    $('.button').click(function () {
      // validate and process form here
  
      $('.error').hide();
  
      var name = $("input#name").val();
      var hasNumber = /\d/;
      if ((name == "") || (hasNumber.test(name) == true)) {
        $("label#name_error").show();
        $("input#name").focus();
        return false;
      }
    });
  });

 