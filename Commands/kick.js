const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Couldn't Find User!");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGE")) return message.channel.send("Sorry sir you can not use this command!")
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked :frowning:");

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("~Kick~")
  .setColor("#6d00fc")
  .addField("Kicked User", `${kUser} with ID: ${kUser.id}`)
  .addField("Kicked By", `<@${message.author.id}> with ID: ${message.author.id}`)
  .addField("Kicked In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", kReason);


  let kickschannel = message.guild.channels.find(`name`, "logs");
  if(!kickschannel) return message.channel.send("Couldn't find logs channel");

      message.delete().catch(O_o=>{});
      message.guild.member(kUser).kick(kReason);
      kickschannel.send(kickEmbed);

  return;
}

module.exports.help = {
  name: "kick"
}
