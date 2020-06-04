//displaying current day
$("#currentDay").text(moment().format("MMM Do YY"));

//save button
$(".saveBtn").on("click", funtion(),{

    var: message = $(this).siblings(".description").val(),
    var: time = $(this).parent(".description").val(),
    
    localStorage,setItem(time, message)
    
});


