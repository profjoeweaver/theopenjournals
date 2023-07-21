const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function () {
    $('.toggleSwitch').on("click", function () {
        $(this).find("i").toggleClass("bi-toggle-on bi bi-toggle-off");
    });

    $('.btn_close').on("click", function () {
        $(this).closest('.card').hide( "slow" );
    });

    $('.helpfulLink').on( "click", function (){
        $(this).find("i").toggleClass("bi-hand-thumbs-up bi-hand-thumbs-up-fill")
        $(this).toggleClass("link-secondary link-success")
        if($(this).closest('.list-inline').find(".unhelpfulLink").find("i").hasClass("bi-hand-thumbs-down-fill")){
            $(this).closest('.list-inline').find(".unhelpfulLink").find("i").toggleClass("bi-hand-thumbs-down bi-hand-thumbs-down-fill")
        }
    });

    $('.unhelpfulLink').on( "click", function (){
        $(this).find("i").toggleClass("bi-hand-thumbs-down bi-hand-thumbs-down-fill")
        if($(this).closest('.list-inline').find(".helpfulLink").find("i").hasClass("bi-hand-thumbs-up-fill")){
            $(this).closest('.list-inline').find(".helpfulLink").find("i").toggleClass("bi-hand-thumbs-up bi-hand-thumbs-up-fill")
            $(this).closest('.list-inline').find(".helpfulLink").toggleClass("link-success link-secondary")
        }
    });

    $('.replyLink').on( "click", function (){
        $(this).find("i").toggleClass("bi-reply bi-reply-fill")
        $(this).toggleClass("link-secondary link-primary")
    });

    $('.shareLink').on( "click", function (){
        $(this).find("i").toggleClass("bi-share bi-share-fill")
        $(this).toggleClass("link-secondary link-info")
    });

    $('.reportLink').on( "click", function (){
        $(this).find("i").toggleClass("bi-flag bi-flag-fill")
        $(this).toggleClass("link-secondary link-danger")
    });

    $('.truncate-overflow').on( "click", function(){
        $(this).toggleClass('truncate-overflow')
    })

    $("#clarityValue").text($('#clarity').val());

    $('#clarity').on( "change", function(){
        $('#clarityValue').text($('#clarity').val());
    })

    $("#soundnessValue").text($('#soundness').val());
    $('#soundness').on( "change", function(){
        $('#soundnessValue').text($('#soundness').val());
    })

});

