
$(document).ready(function () {

    //Set "Current Time" for user display on jumbotron
    $('#currentDay').text(moment().format('llll'));

    var timeArray = [];


    //Set variables for event to go into Local Storage
    var nine = localStorage.getItem("09:00 AM");
    $("#nine").text(nine);
    timeArray.push($("#nine"));

    var ten = localStorage.getItem("10:00 AM");
    $("#ten").text(ten);
    timeArray.push($("#ten"));

    var eleven = localStorage.getItem("11:00 AM");
    $("#eleven").text(eleven);
    timeArray.push($("#eleven"));

    var twelve = localStorage.getItem("12:00 PM");
    $("#twelve").text(twelve);
    timeArray.push($("#twelve"));

    var one = localStorage.getItem("01:00 PM");
    $("#one").text(one);
    timeArray.push($("#one"));

    var two = localStorage.getItem("02:00 PM");
    $("#two").text(two);
    timeArray.push($("#two"));

    var three = localStorage.getItem("03:00 PM");
    $("#three").text(three);
    timeArray.push($("#three"));

    var four = localStorage.getItem("04:00 PM");
    $("#four").text(four);
    timeArray.push($("#four"));

    var five = localStorage.getItem("05:00 PM");
    $("#five").text(five);
    timeArray.push($("#five"));

    //console.log(timeArray)

    //Set functions for css color codes (past, present, future)
    var divArray = $(".time-block");
    var textArray = $(".description");

    var timeNow = parseInt(moment().format('H'));

    //var timeNow = 12;
    //console.log(divArray);

    for (let i = 0; i < divArray.length; i++) {
        var time = $(divArray[i]).text();
        var timeMilitary = parseInt(moment(time, 'LT').format('H'));
        var text = $(textArray[i]);

        if (timeMilitary < timeNow) {
            text.addClass("past");
        }

        if (timeMilitary === timeNow) {
            text.addClass("present");
        }

        if (timeMilitary > timeNow) {
            text.addClass("future");
        }
    }

    //Set function for .on("click") save button
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        setEvent();
    });

    //Set function for setEvent mentioned above (saves value to the key)
    function setEvent() {
        localStorage.setItem("09:00 AM", $("#nine").val().trim());
        localStorage.setItem("10:00 AM", $("#ten").val().trim());
        localStorage.setItem("11:00 AM", $("#eleven").val().trim());
        localStorage.setItem("12:00 PM", $("#twelve").val().trim());
        localStorage.setItem("1:00 PM", $("#one").val().trim());
        localStorage.setItem("2:00 PM", $("#two").val().trim());
        localStorage.setItem("3:00 PM", $("#three").val().trim());
        localStorage.setItem("4:00 PM", $("#four").val().trim());
        localStorage.setItem("5:00 PM", $("#five").val().trim());
    }
});