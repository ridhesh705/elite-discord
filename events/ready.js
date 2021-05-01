module.exports = {
	event: 'ready',
	once: true,
	execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setPresence({
         status: "online",  // You can show online, idle... Do not disturb is dnd
         game: {
            name: "l!ping",  // The message shown
            type: "WATCHING" // PLAYING, WATCHING, LISTENING, STREAMING,
         }
       })
	},
};