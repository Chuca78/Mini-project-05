
// displays current day and date in the header
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

// create the textBlock variable
var textBlock = $('.row');
// for loop used to create time, text, and buttons
for (let i = 9; i <= 17; i ++) {

// create time blocks
    var timeBlock = $('<p>');
     // Assign style
    timeBlock.addClass('hour');
    // Display the time
    timeBlock.text([i] + ":00");
     // Attach the time element
    textBlock.append(timeBlock);

// create text blocks
    var textInput = $('<textarea>');
    // Assign style 
    textInput.addClass('textarea style="padding: 20px; line-height: 100%" class="textarea col-9 blockquote text-black" rows="1" onsubmit="false' );
    // Assign the text area to the id attribute
    textInput.attr('id', [i] );
    // Attach the text element
    textBlock.append(textInput);

// create save buttons
    // Create button
    var saveBtn = $('<button>');
    // Assign style to the button
    saveBtn.addClass('saveBtn fas fa-save fa-2x trailing');
    // Attach the button element
    textBlock.append(saveBtn);
}

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
presentHour();

$(".saveBtn").on("click", function() {
    alert('saved');
    var textValue = $(this).siblings(".textarea").val();
    textValue.value = $(this).parent().attr(".textarea")
    localStorage.setItem("comment", textValue);
})
