$('document').ready(function(){
    $("#btn-submit").click(function(){
    $("#overlay, #popup").fadeIn();
    return setupRecaptcha();
    });
    $(document).ajaxComplete(function(event, request, settings) {
        $('#popup,#overlay').fadeOut(6000);
    });
});