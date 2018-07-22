if (window.addEventListener) window.addEventListener('click', function(e) {
if (e.which == 2 && e.target.tagName == 'IMG') e.preventDefault();
}, false);
hs.addEventListener(window, "load", function() {
var autoload = /[?&]autoload=([^&#]*)/.exec(window.location.href);
if (autoload) document.getElementById(autoload[1]).onclick();
});
hs.addEventListener(document, "ready", function() {
var autoload = /[?&]autoload=([^&#]*)/.exec(window.location.href);
if (autoload) document.getElementById(autoload[1]).focus();
});
hs.graphicsDir = 'res/graphics/';
hsp.stylesFile = 'res/common.css';
hs.marginBottom = 45;
hs.marginTop = 15;
hs.marginLeft = 15;
hs.marginRight = 15;
hs.minWidth = 200;
hs.dragByHeading = false;
hs.preserveContent = false;
hs.outlineType = '';
hs.lang.loadingTitle = 'Click to cancel';
hs.lang.previousTitle = 'Previous (left arrow)';
hs.lang.playTitle = 'Play slideshow (spacebar)';
hs.lang.pauseTitle = 'Pause slideshow (spacebar)';
hs.lang.nextTitle = 'Next (right arrow)';
hs.lang.moveTitle = 'Click and drag to move';
hs.lang.fullExpandTitle = 'Expand to actual size (up arrow)';
hs.lang.closeTitle = 'Close (ESC)';
hs.lang.previousText = 'Prev';
hs.lang.playText = 'Play';
hs.lang.pauseText = 'Pause';
hs.lang.nextText = 'Next';
hs.lang.fullExpandText = '1:1';
hs.lang.closeText = 'Close';
hs.lang.loadingText = 'Loading &hellip;';
hs.lang.restoreTitle = 'Click for next';
hs.align = 'center';
hs.showCredits = false;
hs.objectLoadTime = 'after';
hs.dimmingOpacity = 0.85;
hs.dimmingDuration = 100;
hs.allowMultipleInstances = false;
hs.allowWidthReduction = true;
hs.numberOfImagesToPreload = 5;
hs.transitions = ['expand', 'crossfade'];
hs.expandDuration = 500;
hs.restoreDuration = 500;
hs.transitionDuration = 500;
hs.easing = 'easeInBack';
hs.easingClose = 'easeOutBack';
hs.restoreCursor = null;
hs.Expander.prototype.onImageClick = function() {
	this.slideshow.pause();
	return hs.next();
}
hs.onKeyDown = function(sender, e) {
	if(e.keyCode == 13 || e.keyCode == 40 || e.keyCode == 70) return false;
	if(e.keyCode == 32) return false;
	if(e.keyCode == 38) return false;
}
hs.addSlideshow({
	repeat: false,
	overlayOptions: {
		className: 'text-controls',
		position: 'bottom center',
		relativeTo: 'viewport',
		offsetY: -10,
		offsetX: 0
	},
	useControls: true
});