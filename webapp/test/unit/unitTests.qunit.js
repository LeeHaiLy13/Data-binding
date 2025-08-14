/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"lethihai/vn/fioritutorial/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
