
// displays current day in the header
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));


// todo: tie this function to the color change function below
// function to find present hour
function presentHour() {
    var hour = moment().hour();
    console.log("The current hour is: " + hour);
}
presentHour();

// todo: fix the color change function this code doesn't work
// function that changes the color os each hour depending on the time of day
function match_color_bytime (){
    // Checking the present hr in consolelog
    console.log('present hr', hour)
    //For each of the elements tagged textarea
    $('textarea').each(function(){
    // Obtain the id, convert to integer and store it into scheduled hr because their id corresponds to the number for the hr of the day that text area is assigned to
        const schedule_hr=parseInt($(this).attr('id'));
        console.log('Schedule hr: ', schedule_hr ,"Present_hr", hour) // shows all the ids converted to integers
        if (schedule_hr===hour){
        $(this).addClass('present-teal');
        // $(this).removeClass('past-blue')
        }// br-close if statement 
    
        else if (schedule_hr>hour) {
        // $(this).removeClass('past-blue')
        $(this).addClass('future-pink');
        }//br-close else if
        else {
            $(this).addClass('past-blue')
        }
    }); // br-close for the for each function for each of the text areas
}; //br-close match_color_bytime function
match_color_bytime()

// todo: tie save button to local storage
// save button tied to local storage

