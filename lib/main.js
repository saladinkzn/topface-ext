var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require("sdk/panel");
var self = require("sdk/self");
var tabs = require("sdk/tabs");
var timer = require('timer');

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
  label: "my button",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  disabled: true,
  onChange: handleChange
});

var panel = panels.Panel({
  contentURL: self.data.url("panel.html"),
  onHide: handleHide,
  contentScriptFile: self.data.url("panel.js"),
  contentStyleFile: self.data.url("panel.css")
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