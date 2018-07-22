const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {
  if(message.author.id !== `389897515702419467`) {
    message.channel.send(`${message.author} Sorry dude! Wrong user!`);
  }else {
    message.channel.send(`__**${bot.user.username} is in the following guilds!**__ \n\n${bot.guilds.map(g => `${g.name} - **${g.memberCount} Members**`).join(`\n`)}`, {split: true});
  }
};

module.exports.help = {
  name: "serverlist"
}
