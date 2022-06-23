$(document).ready(function(){

    //gets the date and time and throws it wherever
    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY, h:mm:ss A"));




    function settime() {
        var currenthour = moment().hour();
        $(".time-block").each(function () {
            var schedhour = parseInt($(this).attr("id"));
        
            //console.log(schedhour);
            //console.log(currenthour);
    
            if (schedhour < currenthour) {
                $(this).addClass("past");
            } else if (schedhour === currenthour) {
                $(this).addClass("present");
            } else if (schedhour > currenthour) {
                $(this).addClass("future");
            }
    
        })  
    }
    settime();

    $(".saveBtn").on("click", function (){

        var textareahour = $(this).siblings(".description").attr("id");
        var textareatext = $(this).siblings(".description").val();
        
        
        console.log(textareatext);
        console.log(textareahour);



        localStorage.setItem(textareahour,textareatext);






    })

    

    $("#7 .description").val(localStorage.getItem("text7"));
    $("#8 .description").val(localStorage.getItem("text8"));
    $("#9 .description").val(localStorage.getItem("text9"));
    $("#10 .description").val(localStorage.getItem("text10"));
    $("#11 .description").val(localStorage.getItem("text11"));
    $("#12 .description").val(localStorage.getItem("text12"));
    $("#13 .description").val(localStorage.getItem("text13"));
    $("#14 .description").val(localStorage.getItem("text14"));
    $("#15 .description").val(localStorage.getItem("text15"));
    $("#16 .description").val(localStorage.getItem("text16"));
    $("#17 .description").val(localStorage.getItem("text17"));
  








})




