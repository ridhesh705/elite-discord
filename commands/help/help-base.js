
module.exports = {
    name: 'embed',
    description: 'List all available commands, or info about a specific command.',
    execute(message, args, Discord) {




const { MessageEmbed } = require("discord.js");


const exampleEmbed =  new MessageEmbed()
	.setColor('0xffdd00')
	.setTitle('Rules')
	.setURL('https://discord.com/channels/819569715823378453/819569715823378455')
	.setAuthor('ledgends-elite', 'https://cdn.discordapp.com/icons/819569715823378453/34284b274634ef5219856e502b878f45.png?size=128', 'https://elite-1.anomomusofficia.repl.co')
	.addFields(
        {name:"1", value:"Any of the server member isn't allowed to use rough words without having star(*) at that word ", inline: true},
        {name:"2", value:"No text spamming No bad deals in the server No mic spam/loud noises/unwanted music/voice changers.", inline: true},
        {name:"3", value:"Do not link scam websites, encourage other members to break the rules, or purposely mislead or trick members. ", inline: true},
        {name:"4", value:"No advertising or links to other Discord Servers and YouTube, Twitch, Mixer channel in any channel except #┇・self-promotion.", inline: true},
        {name:"5", value:"Be respectful Do not harm personally", inline: true},
        {name:"6", value:"Do not harm anyone", inline: true}

	)
	.setFooter('plese! listen to this','https://discord.com/channels/819569715823378453/819569715823378455');



console.log(exampleEmbed)
message.channel.send(exampleEmbed)

}
}