function setupRecaptcha() {
  var contactFormHost = 'https://reachus-freidae.herokuapp.com/',
      form = $('#form_reach_us'),
      notice = form.find('#notice');

  if (form.length) {
      $.ajax({
        type: 'POST',
        url: contactFormHost + '/send_email',
        data: form.serialize(),
        dataType: 'json',
        success: function(response) {
          switch (response.message) {
            case 'success':
                form.fadeOut(function() {
                form.html('<h4>' + form.data('success') + '</h4>').fadeIn();
              });
              break;

            case 'failure_captcha':
              notice.text(notice.data('captcha-failed')).fadeIn();
              break;

            case 'failure_email':
              notice.text(notice.data('error')).fadeIn();
          }
        },
        error: function(xhr, ajaxOptions, thrownError) {
          notice.text(notice.data('error')).fadeIn();
        }
      });
          
  }
    return false;
}