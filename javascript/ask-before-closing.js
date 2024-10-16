onUiLoaded(() => {
	window.onbeforeunload = function () {
		window.event.returnValue = 1;
}
}
);
