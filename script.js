
// displays current day and date in the header
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));


// todo: fix this function to the correct hours
// todo: remove console logs
// todo: 
// function to find present hour
function presentHour() {
    var hour = moment().hour();
    console.log("The current hour is: " + hour);
    console.log(typeof hour)

    var areaTags = document.querySelectorAll("textarea");
    // conditional to compare current hour to text areas for color changes
    for (var i = 0; i < areaTags.length; i++) {
        console.log(i+hour);
        if([i+5] < hour){
            console.log(typeof i)
            console.log(hour)
            areaTags[i].setAttribute("style", "background-color:grey; font-size: 30px");
        }
        else if([i+4] < hour){
            areaTags[i].setAttribute("style", "background-color:red; font-size: 30px");
        }
        else{
            areaTags[i].setAttribute("style", "background-color:green; font-size: 30px");
        }
    }   
}
presentHour();

// todo: tie save button to local storage
// save button tied to local storage


