$(function () {
    $('.error').hide();
    $('#submit-btn').click(function() {
      // validate and process form here
  
      $('.error').hide();
  
      // username validation
      var username = $('input#username-field').val();
        if (username == '') {
            $('label#username_errorEmpty').show();
            $('input#username-field').focus();
            return false;
        } else if (!(/[a-zA-Z0-9]/.test(username))) {
            $('label#username_errorChars').show();
            $('input#username-field').focus();
            return false;
        } else if (!(/^[a-zA-Z]/.test(username))) {
            $('label#username_errorFirst').show();
            $('input#username-field').focus();
            return false;
        }

       

        // password validation
        var password = $('input#password-field').val();
        if (password == '') {
            $('label#password_errorEmpty').show();
            $('input#password-field').focus();
            return false;
        } else if (password.length < 8) {
            $('label#password_errorShort').show();
            $('input#password-field').focus();
            return false;
        } else if (password.length > 16) {
            $('label#password_errorLong').show();
            $('input#password-field').focus();
            return false;
        } else if (!(/!|\*/.test(password))) {
            $('label#password_errorMissingChars').show();
            $('input#password-field').focus();
            return false;
        } else if (!(/\d/.test(password))) {
            $('label#password_errorMissingNumbers').show();
            $('input#password-field').focus();
            return false;
        } else if (!(/[a-zA-Z0-9]/.test(username))) {
            $('label#username_errorFirst').show();
            $('input#username').focus();
            return false;
        }
      }
    );
  });
 