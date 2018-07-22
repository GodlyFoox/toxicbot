const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //!warn @user <reason>
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return messsage.reply("Sorry not happening! :sob:")
  let wUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!wUser) return message.reply("Can't find user! :frowning:");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("They are too cool :sunglasses:");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if(err) console.log(err);
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("~Warned~")
  .setAuthor(message.author.username)
  .setColor("#560000")
  .addField("Warned User", `${wUser} with ID: ${wUser.id}`)
  .addField("Warned By", `${message.author} with ID: ${message.author.id}`)
  .addField("Warned In", message.channel)
  .addField("Number of warnings", warns[wUser.id].warns)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);

  let warnchannel = message.guild.channels.find(`name`, "incidents");
  if(!warnchannel) return message.channel.send("Couldn't find incidents channel. :weary:");


  message.delete().catch(O_o=>{});
  warnchannel.send(warnEmbed);

  if(warns[wUser.id].warns == 2){
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole) return message.reply('You should create that role!:joy: ');

    let mutetime = "20s";
    await(wUser.addRole(muterole.id));
    message.channel.send(`<@${wUser.id}> has been temporarily muted! :weary:`);

    setTimeout(function(){
      wUser.removeRole(muterole)
      message.reply(`<@${wUser.id}> has been unmuted! :smile:`)
    }, ms(mutetime))
  }

  if(warns[wUser.id].warns == 4){
    message.guild.member(wUser).ban(reason)
    message.reply(`<@${wUser.id}> has been banned! :joy:`)
  }


  return;

}

module.exports.help = {
  name: "warn"
};
