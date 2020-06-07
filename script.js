//displaying current day
$("#currentDay").text(moment().format("MMM Do YY"));

//save button
$(".saveBtn").on("click", function() {

    var message = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(message);

    localStorage.setItem(time, message);
    
});

function hourUpdater(){

    var currentHour = moment().hour();

    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);

        if(blockHour < currentHour) {
            $(this).addClass("past");
        } else if(blockHour === currentHour){
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }        

        
    });
} hourUpdater();

var interval = setInterval(hourUpdater, 15000)

//local storage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));