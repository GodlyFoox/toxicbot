const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the proper perms")
 if(!args[0]) return message.channel.send("no can do");

const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setFooter("React to vote")
.setDescription(args.join(' '))
.setTitle(`Poll created By ${message.author.username}`);


 let msg = await message.channel.send(embed)

await msg.react('✅');

await msg.react('❌')
  .then(console.log)
  .catch(console.error);





}

module.exports.help = {
    name:"poll"
  }
