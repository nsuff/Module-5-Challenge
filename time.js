$(document).ready(function(){

    //gets the date and time and throws it wherever
    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY, h:mm:ss A"));




    function settime() {
        var currenthour = moment().hour();
        $(".time-block").each(function () {
            var schedhour = parseInt($(this).attr("id"));
        
            console.log(schedhour);
            console.log(currenthour);
    
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



    




















})




