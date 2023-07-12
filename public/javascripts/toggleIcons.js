$(document).ready(function(){
    $('.toggleSwitch').on( "click", function() {
        $(this).find("i").toggleClass( "bi-toggle-on bi bi-toggle-off" );
    });
});