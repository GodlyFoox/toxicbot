const Discord = require("discord.js");

  module.exports.run = async (bot, message, args) => {
    if(args.length !== 2) return message.reply("Incorrect number of arguments");
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry you can not do that! :frowning:");
    let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rMember) return message.reply("Couldn't Find User! :weary:");
    let role = args[1];
    if(!role) return message.reply("Sorry you need to specify a role! :slight_smile:");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Sorry that role does not exist! :sob:");

    if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role!");
    await(rMember.removeRole(gRole.id));

    let removeroleEmbed = new Discord.RichEmbed()
    .setDescription("~Removed Role~")
    .setColor("#00ffcb")
    .addField("Unroled User", `${rMember} with ID: ${rMember.id}`)
    .addField("Unroled By", `<@${message.author.id}> with ID: ${message.author.id}`)
    .addField("Unroled In", message.channel)
    .addField("Time", message.createdAt)

    let removerolechannel = message.guild.channels.find(`name`, "role-reports");
    if(!removerolechannel) return message.channel.send("Couldn't find role-reports channel");



        removerolechannel.send(removeroleEmbed);

    try{
      await rMember.send(`RIP, ${gRole.name} has been taken away! `)
    }catch(e){
      message.channel.send(`RIP to <@${rMember.id}>, ${gRole.name} has been taken away from them. We Tried to DM him/her but their DM's are locked! :sob:`);
    }
  }
module.exports.help = {
  name: "removerole"
};
