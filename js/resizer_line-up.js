$(document).ready(
    function () {
        tbaCreator();
        resize();

    }
)

function resize() {

    $('.container').children('.row').each(function () {
        $('.row').children('.artist').each(function () {
            var figureHeight = $(this).find('figure').outerHeight();
            var captionHeight = $(this).find('figcaption').outerHeight();
            var pDescHeight = $(this).find('.description').outerHeight();


            var bottom = (((figureHeight - captionHeight) - pDescHeight) / 2.0) + captionHeight;

            $(this).find('.description').css("bottom", bottom);
        });
    });




//$('.artist-1').find('p.size').remove();
//$('.artist-1').append('<p class="artist-1">' + height + '-' + width + '</p>');
}


function tbaCreator() {

    height = $(".random-color").width();

    $(".random-color").height(height);
    $(".random-color").each(function () {
        i = Math.floor(Math.random() * 6);
        $(this).css({backgroundColor: colors[i][0]});
        if ($(this).has(".tba-text")) {
            $(this).css({color: colors[i][1]});
        }

    })
}