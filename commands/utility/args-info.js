module.exports = {
	name: 'args-info',
    args: true,
	description: 'Information about the arguments provided.',
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
	},
};