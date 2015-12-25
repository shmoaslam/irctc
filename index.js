var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var self = require("sdk/self");

var button = buttons.ActionButton({
	id: "irctc-link",
	label: "Visit IRCTC",
	icon: {
		"16": "./icon-16.png",
		"32": "./icon-32.png",
		"64": "./icon-64.png"
	},
	onClick: handleClick
});

function handleClick(state) {
	tabs.open("https://www.irctc.co.in");
	tabs.on('ready', onLoad);
}

function onLoad(tab){
	switch(tab.title){
		case 'IRCTC Next Generation eTicketing System':
			tab.attach({
				contentScriptFile: self.data.url("loginscript.js"),
			});
		break;
		case 'E-Ticketing':
			tab.attach({
				contentScriptFile: self.data.url("homescript.js"),
			});
		break;
		case 'Journey Planner':
			tab.attach({
				contentScriptFile: [self.data.url("jquery.js"), self.data.url("journeyscript.js")]
			});
		break;
		case 'Book Ticket - Passengers Information':
			tab.attach({
				contentScriptFile: [self.data.url("jquery.js"), self.data.url("passenger.js")]
			});
		break;
		default:
		break;
	}
	
}