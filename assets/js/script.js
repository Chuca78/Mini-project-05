// displays current day and date in the header
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

// sets variables to use in time block creation
var containerEl = $('.container');
var successEl = $('.success-message');

// function to create time, text, and save blocks
for (var i = 9; i <= 17; i++) {
    var row = $('<div>');
    row.addClass('row time-block');
    var hourEl = $('<p>');
    hourEl.addClass('hour col-md-1');
    hourEl.attr("id", "hour" + i);

    // display the times in every block
    hourEl.text([i] + ":00")

    // set up text area
    var eventEl = $('<textarea>');
    eventEl.addClass('description col-md-10');
    eventEl.attr("id", i);

    // set up save buttons
    var saveButton = $('<button>');
    saveButton.addClass('saveBtn');
    // creates save button icon
    var icon = $('<i>');
    icon.addClass('fas fa-save fa-2x trailing');
    saveButton.attr("id", "button" + i);
    // adds icon to save button
    saveButton.append(icon);

    // appends everything into the row div
    row.append(hourEl, eventEl, saveButton);
    // appends the row elements into the container div
    containerEl.append(row);
    // saves the text in each block as the save button is clicked
    saveButton.on('click', saveEvent);
};

// function to find present hour
function presentHour() {
    var hour = moment().hour();
    var areaTags = $("textarea");
    // conditional to compare present hour to current hour for text areas for color changes
    for (var i = 0; i < areaTags.length; i++) {
        if([i+9] < hour){
            areaTags[i].setAttribute("style","padding: 20px; line-height: 100%; background-color: #d3d3d3; font-size: 16px");
        }
        else if([i+8] < hour){
            areaTags[i].setAttribute("style", "padding: 20px; line-height: 100%; background-color:#ff6961; font-size: 16px");
        }
        else{
            areaTags[i].setAttribute("style", "padding: 20px; line-height: 100%; background-color:#77dd77; font-size: 16px");
        }
    }   
}

function saveEvent() {
    var keyToSave = $(this).siblings('textarea').attr('id');
    var valueToSave = $(this).siblings('textarea').val();
    localStorage.setItem(keyToSave, valueToSave);
    var message = $('#successMessage');
    if (message.length === 0) {
        var displayEl = $('<p id=successMessage>');
        successEl.append(displayEl);
    };

};

function renderEvent() {
    $('textarea').each(function () {
        var keyToDisplay = $(this).attr('id');
        var valueToDisplay = localStorage.getItem(keyToDisplay);
        $(this).text(valueToDisplay);
    });
};

presentHour();
renderEvent();
