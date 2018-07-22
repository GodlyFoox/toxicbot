const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#ff0000")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Current Uptime", `${Math.round(bot.uptime)}ms`)
    .addField("Ping", `${Math.round(bot.ping)}ms`)
    .addField("Created On", bot.user.createdAt);

  return message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
};
