const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

 let user = message.mentions.users.first() || message.author;
 let aEmbed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setAuthor(`${user.username}`)
 .setImage(user.displayAvatarURL);



 message.channel.send(aEmbed)
 message.delete().catch();




};

module.exports.help = {
  name: "avatar"
}
