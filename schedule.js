
$(document).ready(function () {

    //Set "Current Time" for user display on jumbotron
    $('#currentDay').text(moment().format('llll'));


    //Set function for event to go into Local Storage
    var nine = localStorage.getItem("09:00 AM");
    $("#nine").text(nine);

    var ten = localStorage.getItem("10:00 AM");
    $("#ten").text(ten);

    var eleven = localStorage.getItem("11:00 AM");
    $("#eleven").text(eleven);

    var twelve = localStorage.getItem("12:00 PM");
    $("#twelve").text(twelve);

    var one = localStorage.getItem("01:00 PM");
    $("#one").text(one);

    var two = localStorage.getItem("02:00 PM");
    $("#two").text(two);

    var three = localStorage.getItem("03:00 PM");
    $("#three").text(three);

    var four = localStorage.getItem("04:00 PM");
    $("#four").text(four);

    var five = localStorage.getItem("05:00 PM");
    $("#five").text(five);


    //Set functions for css color codes (past, present, future)



    //Set function for .on("click") save button
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        setEvent();
    });

    //Set function for event to go into GUI
    function setEvent() {
        localStorage.setItem(
            "09:00 AM",
            $("#nine")
                .val()
                .trim()
        );
        localStorage.setItem(
            "10:00 AM",
            $("#ten")
                .val()
                .trim()
        );
        localStorage.setItem(
            "11:00 AM",
            $("#eleven")
                .val()
                .trim()
        );
        localStorage.setItem(
            "12:00 PM",
            $("#twelve")
                .val()
                .trim()
        );
        localStorage.setItem(
            "1:00 PM",
            $("#one")
                .val()
                .trim()
        );
        localStorage.setItem(
            "2:00 PM",
            $("#two")
                .val()
                .trim()
        );
        localStorage.setItem(
            "3:00 PM",
            $("#three")
                .val()
                .trim()
        );
        localStorage.setItem(
            "4:00 PM",
            $("#four")
                .val()
                .trim()
        );
        localStorage.setItem(
            "5:00 PM",
            $("#five")
                .val()
                .trim()
        );
    }
});