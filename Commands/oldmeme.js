const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("Whoever threw that paper yo mom a hoe");

    message.delete().catch();
}

module.exports.help = {
  name: "oldmeme"
}
