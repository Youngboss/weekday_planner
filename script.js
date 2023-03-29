
$(document).ready( function() {
// google what the ready method is....

// we are pulling the saved desctiption(s) from the local storage
$(".time-block").each(function(i,this_block){
 var time = $(this_block).attr("id")
  var value = localStorage.getItem(time)
  $(this_block).find(".description").val(value)
  console.log(time, value)
});


// here we are setting the correct color to each block based on the time past present or future
var setHourBlockColor = function(){
  var nowHourFound = false
  $(".time-block").each(function(i,this_block){
    var time = $(this_block).attr("id")

  var hour = $(this_block).find(".hour").text()
  var now = dayjs();
  var thisHour = now.format("hA")
  if (hour == thisHour) {
    nowHourFound = true
    $(this_block).removeClass("past").removeClass("future").addClass("present")
  } else if (nowHourFound){
    $(this_block).removeClass("past").removeClass("present").addClass("future")    
  } else {
    $(this_block).removeClass("future").removeClass("present").addClass("past")
  }

})
}
// we are checking the time every minute to determine the color for the hour
setHourBlockColor()
setInterval(function(){
setHourBlockColor()
},60000);

  // this is a click events on the save button. This code should save the description to local strage 
//  I added a scroll to top also just so it bring the page back out and show the displaed message that everything is saved.
  $(".saveBtn").on("click", function saveOnClick() { window.scrollTo (0, 0);
//Get nearby Value 
 var value = $(this).siblings(".description").val()
 var time = $(this).parent().attr("id")
 localStorage.setItem(time, value) 
 console.log(time, value)
// here we are displaying our calendar saved message after decription(s) has been saved
 $("#saveStatusMessage").text("Calendar Saved!").show()
setTimeout(function(){
  $("#saveStatusMessage").text("").hide()  
},5000);
});

// this displays the date and time for the calendar 
setInterval(function(){
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY hh:mm:ss A'));},1000);
});

// function(

// )
// Object{

// }
// Array = [

// ]
