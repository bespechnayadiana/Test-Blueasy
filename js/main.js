$(document).ready(function() {
	$('.menu-opener').on('click', function(e) {
		e.preventDefault();
		$('body').toggleClass('mobile-menu-active')
	});

	function activateResixeHandler () {
		var win = $(window),
				doc = $('html'),
				resizeClass = 'resize-active',
				flag, timer;
		var removeClassHandler = function () {
				flag = false;
				doc.removeClass(resizeClass);
		};
		var resizeHandler = function () {
				if(!flag) {
					flag = true;
					doc.addClass(resizeClass);
				}
				clearTimeout(timer);
				timer = setTimeout(removeClassHandler, 500);
		};
		win.on('resize orientationchange', resizeHandler);
	}
	activateResixeHandler();
});