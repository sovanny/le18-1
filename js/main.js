
$("#fun-btn").on('click', function () {
    var win = window.open('https://billetto.se/e/location-east-biljetter-260485', '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
});


$("#navbar-placeholder").load("navbar.html");

