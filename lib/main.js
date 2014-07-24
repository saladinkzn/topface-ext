var self = require("sdk/self");
var tabs = require("sdk/tabs");
var timer = require('sdk/timers');

tabs.on('ready', function(tab) {
	var url = tab.url;
	if(url.indexOf('topface.com/dating') !== -1) {	
		tab.attach({
			contentScriptFile: self.data.url('my-script.js')
		});
	}
});