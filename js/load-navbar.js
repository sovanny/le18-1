$("#navbar-placeholder").load("navbar.html");

$(document).ready(function(){

        var navHeight = $('nav').outerHeight();
        $('body').css("padding-top", navHeight);    //makes the content not get hidden under navbar (an effect of loading the navbar with js)


});