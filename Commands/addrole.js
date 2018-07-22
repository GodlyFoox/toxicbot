const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!role @user Role
    if(args.length !== 2) return message.reply("Incorrect number of arguments");
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry you can not do that! :frowning:");
  let rMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rMember) return message.reply("Couldn't Find User! :weary:");
  let role = args[1];
  if(!role) return message.reply("Sorry you need to specify a role! :slight_smile:");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Sorry that role does not exist! :sob:");

  if(rMember.roles.has(gRole.id)) return message.reply("They already have that role!");
  await(rMember.addRole(gRole.id));

  let roleEmbed = new Discord.RichEmbed()
  .setDescription("~Roled~")
  .setColor("#00ffcb")
  .addField("Roled User", `${rMember} with ID: ${rMember.id}`)
  .addField("Roled By", `<@${message.author.id}> with ID: ${message.author.id}`)
  .addField("Added role In", message.channel)
  .addField("Time", message.createdAt)

  let rolechannel = message.guild.channel.find(`name`, "role-reports");
  if(!rolechannel) return message.channel.send("Couldn't find rolereport channel");



      rolechannel.send(roleEmbed);


  try{
    await rMember.send(`Congrats, you have been given the role ${gRole.name}`);
  }catch(e){
    message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We Tried to DM him/her but their DM's are locked! :sob:`);
  }
}

module.exports.help = {
  name: "addrole"
};
