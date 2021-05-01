module.exports = {
    name: 'delete',
    description: 'delete',
    execute(message, Discord) {
     if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

    var deln = commandName[1]
    console.log(deln)

     message.delete(deln);
    }
}