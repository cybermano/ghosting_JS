$(document).ready(function(){
    // AJAX FUNCTION LOADED
    $('#ghostAjax').on('click',function(){
        // AJAX CALL
        $.get("/ajax-path", 
        {
            id: 3582,
            value: 1,
        });
    });
});