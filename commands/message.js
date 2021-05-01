module.exports = {
	event: 'message',
	execute(message, client, prefix) {
    if(!message.content.startswith(prefix)) return;
    if(message.author.bot) return;

    var inviteLinke = ["https://discord.gg/pZcKgTm7BY","https://discord.gg/nYc7VzWCay"],
     n = Math.round(Math.random()),
     inviteLink = inviteLinke[Math.round(Math.random())]

    //sets all the config
     client.config = require('./config/bot');
     client.emotes = client.config.emojis;

     client.commands = new Discord.Collection();
     client.token = process.env['token'];



    //get commandfiles
     commandfiles =fs.readdirSync('./').filter(file => 
     file.endswith('.js'))

     for(const file of commandfiles){
      const command = require(`./${file}`);
      client.command.set(command.name, command)
     }
    //done
    const ar = message.content.slice(prefix.length),
     args = ar.split(/ +/),
     com = args.shift(),
     command = com.tolowercase();


        

        if(command == ''){

        }
        
	},
};