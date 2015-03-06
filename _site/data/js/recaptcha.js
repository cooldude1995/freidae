function setupRecaptcha() {
  var contactFormHost = 'http://reachus-freidae.herokuapp.com',
      form = $('#form_reach_us'),
      notice = $('#reachus_message');

  if (form.length) {
      $.ajax({
        type: 'POST',
        url: contactFormHost + '/send_email',
        data: form.serialize(),
        dataType: 'json',
        success: function(response) {
          switch (response.message) {
            case 'success':
                 notice.text(notice.data('success')).fadeIn();
                 $('#sndg-msg-rchus,#loading-indicator-rchus').hide();
                 $('#form_reach_us')[0].reset();
                 grecaptcha.reset();
              break;

            case 'failure_captcha':
              notice.text(notice.data('captcha-failed')).fadeIn();
              $('#sndg-msg-rchus,#loading-indicator-rchus').hide();
              grecaptcha.reset();
                  break;

            case 'failure_email':
              notice.text(notice.data('error')).fadeIn();
              $('#sndg-msg-rchus,#loading-indicator-rchus').hide();
              grecaptcha.reset();
          }
        },
        error: function(xhr, ajaxOptions, thrownError) {
          notice.text(notice.data('error')).fadeIn();
        }
      });
          
  }
    return false;
}