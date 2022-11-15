// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveButton = $('.saveBtn');
var timeDisplayEl = $('#currentDay');
var userInput = $('.description');
var workTodo = [];
// var date = date.gethours();
var timeBox = document.querySelector('.container-lg');
var currentTime = new Date();
var currentHour = currentTime.getHours();
var timeBlock = $(".time-block")
var hour = dayjs().hour();

currentDay();
    setInterval(currentDay, 1000);
// TODO: Add code to display the current date in the header of the page.
function currentDay() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

$(document).ready($(function () {

    saveButton.on('click', function(event) {
        event.preventdefault();
        var workText = userInput.value.trim();
        if (workText === "") {
            return;
    });

    function colorChange() {
        $(timeBlock).each(function(){
          var timeSlot = parseInt($(this).attr('id').split('-')[1]);
          if (timeSlot = hour) {
            timeBlock.classList.add('present')
          } else if (timeSlot > hour) {
            timeBlock.classList.add('future')
          } else {
            timeBlock.classList.add('past')
          }
        })
      }
      
      colorChange()

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
  

        storeText();

        // TODO: Add code to apply the past, present, or future class to each time
        // block by comparing the id to the current hour. HINTS: How can the id
        // attribute of each time-block be used to conditionally add or remove the
        // past, present, and future classes? How can Day.js be used to get the
        // current hour in 24-hour time?
        function init() {
            var storedToDos = JSON.parse(localStorage.getItem(storedToDos));
        

           

        }
    };

function colorChange() {
$('.time-block').each(function(){
    // assign var to each hour //use split
    var timeSlot = 
    if (storedTo !== null) {
        workTodo = storedToDos;
        // add if/else statement to have color code work

    }
    if (___ < currentHour) {
        timeBlock.classList.add("past");
        console.log("working")
    }
    if (___ == currentHour) {

    } else {

    }
    
}); 


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
function storeText() {
            localStorage.setItem("workToDo", JSON.stringify(storedTodos));
        }




    init();

});