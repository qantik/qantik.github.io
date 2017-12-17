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
