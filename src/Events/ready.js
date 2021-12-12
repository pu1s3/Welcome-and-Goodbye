/** @format */

const Event = require("../Structures/Event.js");

module.exports = new Event("ready", client => {
	console.log(client.user.tag + ' has logged in.');
	client.user.setPresence({
		activity: {
		  name: `People Joining :) And Leaving :(.`,
		  type: "WATCHING"
		},
		status: 'dnd'
	  })
});
