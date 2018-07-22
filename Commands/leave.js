const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
if(message.author.id !== `412686680772837379`) {
message.channel.send(`${message.author} Sorry dude! Wrong user!`);
}else {
message.guild.leave()
.then(g => console.log(`Left the guild ${g}`))
.catch(console.error);
}
}

module.exports.help = {
name: "fleave"
}
