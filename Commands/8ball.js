const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


  let tempembed = new Discord.RichEmbed()
  .setTitle("8Ball-help")
  .setDescription("the 8Ball command allows you to ask a question to the bot and it will reply with a basic answer.")
  .addField("Usage: ", "!8ball (question)")
  .addField("Perms: ", "you dont need any special perms to use it.")
  .setColor("RANDOM");

  if (args[0] === "help") {


    message.channel.send(tempembed);
    return;
  }

if(!args[1]) return message.reply("please ask a full question");
let replies = ["Fuck yes", "Hell no","Bitch i dont know", "Fuck off ask again later"];

let result = Math.floor((Math.random()* replies.length));
let question = args.slice(0).join(" ");


let ballembed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor("#ff9900")
.addField("Question", question)
.addField("Answer", replies[result]);

message.channel.send(ballembed);



}

module.exports.help = {
  name:"8ball"
}
