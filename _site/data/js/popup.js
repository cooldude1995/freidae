/*(function($){
     popup = function() {*/
        $(document).ajaxSend(function(event, request, settings) {
            $('#popup,#overlay').show();
        });

        $(document).ajaxComplete(function(event, request, settings) {
            $('#popup,#overlay').hide();
        });
    $("body").click(function(){
    $("#overlay, #popup").fadeToggle();
})
  /*   };
})(jQuery);*/