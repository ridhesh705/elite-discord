const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const e = require('./express/app.js')

//get commandfiles
commandfiles =fs.readdirSync('./commands').filter(file => 
file.endswith('.js'))

for(const file of commandfiles){
    const command = require(`./commands/${file}`);
    client.command.set(command.name, command)
}
//done

client.on('message',(message, client, prefix)=>{
     client.command.get('message').execute(message,args, prefix)
})

client.login(client.token);