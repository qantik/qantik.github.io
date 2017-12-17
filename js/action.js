let inView = false;

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

plotYear();
plotMonthDay();
plotInDegrees();

$(window).scroll(function() {
    if (isScrolledIntoView('#counter3')) {
	if (inView) { return; }
	inView = true;
	counter_percentage();
	$('#grid').empty();
	update(9999);
    } else if (isScrolledIntoView('#counter1')) {
	if (inView) { return; }
	inView = true;
	counter_ve();
    } else {
	inView = false;
    }
});

$(document).ready(function() {
    $("#o1-11").mouseenter(function() {
        $(this).toggle();
        $("#i1-11").toggle();
    });

    $("#i1-11").mouseleave(function() {
        $("#o1-11").toggle();
        $(this).toggle();
    });

    $("#o1-12").mouseenter(function() {
        $(this).toggle();
        $("#i1-12").toggle();
    });

    $("#i1-12").mouseleave(function() {
        $("#o1-12").toggle();
        $(this).toggle();
    });

    $("#o1-21").mouseenter(function () {
        $(this).toggle();
        $("#i1-21").toggle();
    });

    $("#i1-21").mouseleave(function () {
        $("#o1-21").toggle();
        $(this).toggle();
    });

    $("#o1-22").mouseenter(function () {
        $(this).toggle();
        $("#i1-22").toggle();
    });

    $("#i1-22").mouseleave(function () {
        $("#o1-22").toggle();
        $(this).toggle();
    });

    $("#o1-31").mouseenter(function () {
        $(this).toggle();
        $("#i1-31").toggle();
    });

    $("#i1-31").mouseleave(function () {
        $("#o1-31").toggle();
        $(this).toggle();
    });

    $("#o1-32").mouseenter(function () {
        $(this).toggle();
        $("#i1-32").toggle();
    });

    $("#i1-32").mouseleave(function () {
        $("#o1-32").toggle();
        $(this).toggle();
    });
})
