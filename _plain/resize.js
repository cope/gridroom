var isResizing = false;
var lastDownY = 0;

var container = document.getElementById('container');
var topPanel = document.getElementById('top_panel');
var bottomPanel = document.getElementById('bottom_panel');
var dragHandle = document.getElementById('drag_handle');

// function resizer() {
dragHandle
	.addEventListener('mousedown', function (e) {
		isResizing = true;
		lastDownY = e.clientY;
	});

window
	.addEventListener('mousemove', function (e) {
		if (!isResizing) return;

		var offsetBottom = container.clientHeight - (e.clientY - container.offsetTop);
		if (offsetBottom < 50) offsetBottom = 50;

		topPanel.style.bottom = offsetBottom + 'px';
		bottomPanel.style.height = offsetBottom + 'px';
	});

window
	.addEventListener('mouseup', function (e) {
		// stop resizing
		isResizing = false;
	});
// }
// resizer();