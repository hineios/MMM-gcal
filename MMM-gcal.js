Module.register("MMM-gcal",{
	// Default module config.
	defaults: {
		text: "Google Calendar!"
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	}
});
