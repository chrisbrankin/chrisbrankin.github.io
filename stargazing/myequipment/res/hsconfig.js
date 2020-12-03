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
hs.marginBottom = 15;
hs.marginTop = 15;
hs.marginLeft = 15;
hs.marginRight = 15;
hs.minWidth = 200;
hs.dragByHeading = false;
hs.preserveContent = false;
hs.outlineType = '';
hs.lang.loadingTitle = 'Click to cancel';
hs.lang.previousTitle = 'Previous (left arrow key)';
hs.lang.playTitle = 'Play slideshow (spacebar)';
hs.lang.pauseTitle = 'Pause slideshow (spacebar)';
hs.lang.nextTitle = 'Next (right arrow key)';
hs.lang.moveTitle = 'Click and drag to move';
hs.lang.fullExpandTitle = 'Expand to actual size (up arrow)';
hs.lang.closeTitle = 'Close (ESC or Enter)';
hs.lang.previousText = 'Prev';
hs.lang.playText = 'Play';
hs.lang.pauseText = 'Pause';
hs.lang.nextText = 'Next';
hs.lang.fullExpandText = '1:1';
hs.lang.closeText = 'Close';
hs.lang.loadingText = 'Loading...';
hs.lang.restoreTitle = 'Click to close';
hs.align = 'center';
hs.showCredits = false;
hs.objectLoadTime = 'after';
hs.dimmingOpacity = 1.0;
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
hs.onKeyDown = function(sender, e) {
	if(e.keyCode == 13 || e.keyCode == 40 || e.keyCode == 70) return false;
	if(e.keyCode == 38) return false;
}
hs.addSlideshow({
	interval: 5000,
	repeat: false,
	overlayOptions: {
		opacity: 0.7,
		position: 'top right',
		offsetY: 0,
		offsetX: 0,
		hideOnMouseOut: true
	},
	fixedControls: false,
	useControls: true
});
hs.Expander.prototype.onAfterExpand = function() {
	if (this.contentType == 'html') {
		this.slideshow.pause();
	}
};