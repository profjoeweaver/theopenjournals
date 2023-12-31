//Import our custom CSS
import '../scss/styles.scss'

//Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//Import jQuery
var $ = require('jquery')
var jQuery = require('jquery')


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

    // File Drag to Upload
    const newProject__ImageDropZone = document.getElementById("newProject__ImageDropZone");
    const newProject__ImageUploader = document.getElementById("newProject__ImageUploader");
    const newProject__FileUpload = document.getElementById("newProject__FileUpload");
    const newProject_FileName = document.getElementById("newProject_FileName");

    newProject__ImageDropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        newProject__ImageUploader.classList.add("activeDragDrop");
    });

    newProject__ImageDropZone.addEventListener("drop", (e) => {
        e.preventDefault();
        newProject__ImageUploader.classList.remove("activeDragDrop");
    });

    newProject__ImageDropZone.addEventListener("click", (e) => {
        e.preventDefault();
        var file_input = document.createElement('input');
        file_input.type = 'file';
        file_input.click();
    });

    newProject__FileUpload.addEventListener("change", (e) => {
        var path = newProject__FileUpload.value;
        var filename = path.replace(/^.*\\/,"");
        newProject_FileName.textContent = filename;
    });

});


