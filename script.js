
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
     // Assign the number to the data-letter attribute
    timeBlock.attr('data-letter', [i] );
    // Display the time
    timeBlock.text([i] + ":00");
     // Attach the time element
    textBlock.append(timeBlock);

// create text blocks
    var textInput = $('<textarea>');
    // Assign style 
    textInput.addClass('textarea style="padding: 20px; line-height: 100%" class="textarea col-9 blockquote text-black" rows="1" onsubmit="false' );
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

// todo: tie colors to css for text blocks
// todo: remove console logs
// function to find present hour
function presentHour() {
    var hour = moment().hour();
    console.log("The current hour is: " + hour);
    console.log(typeof hour)

    var areaTags = $("textarea");
    // conditional to compare present hour to current hour for text areas for color changes
    for (var i = 0; i < areaTags.length; i++) {
        console.log(i+hour);
        if([i+9] < hour){
            console.log(typeof i)
            console.log(hour)
            areaTags[i].setAttribute("style","background-color: #d3d3d3; font-size: 30px");
        }
        else if([i+8] < hour){
            areaTags[i].setAttribute("style", "background-color:#ff6961; font-size: 30px");
        }
        else{
            areaTags[i].setAttribute("style", "background-color:#77dd77; font-size: 30px");
        }
    }   
}
presentHour();


// todo: fix this - tie save button to local storage
// var item9 = document.getElementById("#nine");

// var word = localStorage.getItem("word");
// console.log(typeof word);
// console.log(word);

// // item9.textContent = word;
// console.log(item9);

// var saveBtn = $('.saveBtn');
// saveBtn.on('click', function () {
//     alert('saved');
 
//     // item9.textContent = word;
//       localStorage.setItem("word", word);
//     //   console.log(word);
//     }
//   );



// var saveBtn = $('.saveBtn');
// saveBtn.on('click', function () {
//     alert('saved');
//     var comment = (document.getElementById("9").value);
//         console.log(comment);
//         console.log(typeof comment);
//         var item = (localStorage.setItem("item1", comment))
//         console.log(item);
        // $( window ).on( "load",function() {
        //     localStorage.getItem("item1",document.getElementById("9").value);
        // }  );
    // $(window).on('beforeunload', function() {
    //     var comment = localStorage.setItem(comment,"item1",document.getElementById("9").value);
    //     console.log(comment);
    // });
    // var comment = localStorage.setItem("item1", document.getElementById("9").value);
    // console.log(comment);
    // });
       