let isResizing = false;
let lastDownY = 0;

const container = document.getElementById('container');
const topPanel = document.getElementById('top_panel');
const bottomPanel = document.getElementById('bottom_panel');

const dragHandle = document.getElementById('drag_handle');
dragHandle.addEventListener('mousedown', (e) => {
	isResizing = true;
	lastDownY = e.clientY;
});

window.addEventListener('mousemove', (e) => {
	if (!isResizing) return;

	let offsetBottom = container.clientHeight - (e.clientY - container.offsetTop);
	offsetBottom = offsetBottom < 50 ? 50 : offsetBottom;

	topPanel.style.bottom = offsetBottom + 'px';
	bottomPanel.style.height = offsetBottom + 'px';
});

window.addEventListener('mouseup', (e) => isResizing = false);
