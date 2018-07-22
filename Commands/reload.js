const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  if(message.author.id !== `389897515702419467`) return message.channel.reply(`${message.author.id}, you may now use this command`);
  if(!args || args.size < 1) return message.channel.reply("Please provide a valid command");
  delete require.cache[require.resolve(`./${args[0]}.js`)];
message.reply(`The command ${args[0]} has been reloaded!`);
}

module.exports.help = {
  name: "reload"
}
