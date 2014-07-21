var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var self = require("sdk/self");
var tabs = require("sdk/tabs");
var timer = require('sdk/timers');

tabs.on('ready', function(tab) {
	var url = tab.url;
	if(url.indexOf('topface.com') === -1) {
		button.state('tab', {
			disabled: true
		});
	} else {
		button.state('tab', {
			disabled: false
		});
	}
});

var button = ToggleButton({
  id: "my-button",
  label: "Topface Button",
  icon: {
    "16": "./topface-gear-16.png",
    "32": "./topface-gear-32.png",
    "64": "./topface-gear-64.png"
  },
  disabled: true,
  onChange: handleChange
});

var panel = panels.Panel({
  contentURL: self.data.url("panel.html"),
  onHide: handleHide,
  contentScriptFile: self.data.url("panel.js")
});

var intervalId;
panel.port.on('startLike', function() {
	var worker = tabs.activeTab.attach({
		contentScriptFile: self.data.url('my-script.js')
	});
	intervalId = timer.setInterval(function() {
		console.log('like');
		worker.port.emit('like', '');
	}, 500);
});
panel.port.on('resize', function({width, height}) {
	panel.resize(width, height);
});

panel.port.on('stopLike', function() {
	timer.clearInterval(intervalId);
});

function handleChange(state) {
  if (state.checked) {
    panel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}