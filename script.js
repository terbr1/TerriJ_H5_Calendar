//displaying current day
$("#currentDay").text(moment().format("MMM Do YY"));

//save button
$(".saveBtn").on("click", function() {

    var message = $(this).siblings(".description").val();
    var time = $(this).parent(".description").val();
    console.log(message);

    localStorage.setItem("value", message);
    
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
for(let i = 9; i < 18; i++){
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
};