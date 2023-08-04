//Import our custom CSS
import '../scss/styles.scss'

//Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//Import jQuery
var $ = require('jquery')
var jQuery = require('jquery')

//File Drag and Drop
function dropHandler(ev) {
    console.log("File(s) dropped");

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    if (ev.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        [...ev.dataTransfer.items].forEach((item, i) => {
            // If dropped items aren't files, reject them
            if (item.kind === "file") {
                const file = item.getAsFile();
                console.log(`… file[${i}].name = ${file.name}`);
            }
        });
    } else {
        // Use DataTransfer interface to access the file(s)
        [...ev.dataTransfer.files].forEach((file, i) => {
            console.log(`… file[${i}].name = ${file.name}`);
        });
    }
}

function dragOverHandler(ev) {
    console.log("File(s) in drop zone");

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
}



// UI 
(function () {

    // Load Tooltip 
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    
    // Toggles for User Dashboard
    $('.toggleSwitch').on("click", function () {
        $(this).find("i").toggleClass("bi-toggle-on bi bi-toggle-off");
    });

    // Close Cards
    $('.btn_close').on("click", function () {
        $(this).closest('.card').hide( "slow" );
    });

    // Review Response Options
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

    // Truncate / untruncate long text
    $('.truncate-overflow').on( "click", function(){
        $(this).toggleClass('truncate-overflow')
    })

    // Sliders for new clarity and soundness ratings
    $("#clarityValue").text($('#clarity').val());

    $('#clarity').on( "change", function(){
        $('#clarityValue').text($('#clarity').val());
    })

    $("#soundnessValue").text($('#soundness').val());

    $('#soundness').on( "change", function(){
        $('#soundnessValue').text($('#soundness').val());
    })

});


