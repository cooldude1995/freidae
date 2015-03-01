$("#btn-submit").click(function(){
    $("#overlay, #popup").fadeIn();
    return setupRecaptcha();
});
$(document).ajaxComplete(function(event, request, settings) {
    $('#popup,#overlay').fadeOut();
});