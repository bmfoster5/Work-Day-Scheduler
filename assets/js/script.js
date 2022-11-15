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
function renderInput() {
    var h9 = $('#hour-9 .description').val(localStorage.getItem('hour-9'))
    var h10 = $('#hour-10 .description').val(localStorage.getItem('hour-10'))
    var h11 = $('#hour-11 .description').val(localStorage.getItem('hour-11'))
    var h12 = $('#hour-12 .description').val(localStorage.getItem('hour-12'))
    var h13 = $('#hour-13 .description').val(localStorage.getItem('hour-13'))
    var h14 = $('#hour-14 .description').val(localStorage.getItem('hour-14'))
    var h15 = $('#hour-15 .description').val(localStorage.getItem('hour-15'))
    var h16 = $('#hour-16 .description').val(localStorage.getItem('hour-16'))
    var h17 = $('#hour-17 .description').val(localStorage.getItem('hour-17'))
    window.localStorage.getItem(h9, h10, h11, h12, h13, h14, h15, h16, h17)
}

$(document).ready($(function () {

    saveButton.on('click', function (event) {
        event.preventdefault();
        var workText = userInput.value.trim();
        if (workText === "") {
            return;
        }
    });
    function colorChange() {
        $(timeBlock).each(function () {
            var timeSlot = parseInt($(this).attr('id').split('-')[1]);
            if (timeSlot = hour) {
                $(timeBlock).addClass("present")
                // remove class
            } else if (timeSlot > hour) {
                $(timeBlock).addClass("future")
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
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    function storeText() {
        localStorage.setItem("workToDo", JSON.stringify(workTodo));
    }

    init();
}));



