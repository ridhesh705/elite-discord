module.exports = {
	name: 'beep',
    cooldown: 5,
	description: 'beep!',
	execute(message, args) {
        console.log('boop');
        message.reply('boop!');
    }
}