//displaying current day
$("#currentDay").text(moment().format("MMM Do YY"));

//save button
$(".saveBtn").on("click", funtion(),{

    var: message = $(this).siblings(".description").val(),
    var: time = $(this).parent(".description").val(),
    
    localStorage,setItem(time, message)
    
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
}
