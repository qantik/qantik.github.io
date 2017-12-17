// var options = {
//   useEasing: true,
//   useGrouping: true,
//   separator: ',',
//   decimal: '.',
//   prefix: 'Number of vertices: '
// };
// var demo1 = new CountUp('counter1', 0, 8274991, 0, 5.0, options);
// if (!demo1.error) {
//   demo1.start();
// } else {
//   console.error(demo1.error);
// }

// options.prefix = 'Number of edges: '
// var demo2 = new CountUp('counter2', 0, 86284396, 0, 5.0, options);
// if (!demo2.error) {
//   demo2.start();
// } else {
//   console.error(demo2.error);
// }
let inView = false;

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoView('#counter3')) {
	if (inView) { return; }
	inView = true;
	counter_percentage();
	$('#grid').empty();
	update(9999);
    } else if (isScrolledIntoView('#plot-patents-year')) {
        if (inView) { return; }
        inView = true;
	plotYear();
    } else if (isScrolledIntoView('#plot-patents-months')) {
        if (inView) { return; }
        inView = true;
	plotMonthDay();
    } else if (isScrolledIntoView('#plot-citations-indegree')) {
	if (inView) { return; }
	inView = true;
	plotInDegrees();
    } else {
	console.log('out');
	inView = false;
    }
});
// options.useGrouping = false;
// options.prefix = '';
// options.suffix = '%';
// var demo2 = new CountUp('counter3', 0, 99.999, 3, 5.0, options);
// if (!demo2.error) {
//   demo2.start();
// } else {
//   console.error(demo2.error);
// }
