const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Couldn't Find User!");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Sorry sir you can not use this command!")
  if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person can't be kicked :frowning:");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("~Banned~")
  .setColor("#00ffcb")
  .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
  .addField("Banned By", `<@${message.author.id}> with ID: ${message.author.id}`)
  .addField("Banned In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason);


  let banchannel = message.guild.channels.find(`name`, "logs");
  if(!banchannel) return message.channel.send("Couldn't find logs channel");


      message.guild.member(bUser).ban(bReason);
      banchannel.send(banEmbed);
  return;
}

module.exports.help = {
  name: "ban"
}
