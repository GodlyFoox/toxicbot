const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var responds = ["Shane, Shane, Shane...You're wearing camouflage pants, that's not a good trick....Why make it even harder for the girls to find your dick?", "Yo, Rasika, you know I get crazy forever...You look like Kumar and Mr. Ed had a baby together...Los, when will you cats really learn?....This *beep* beard looks like Katt Williams perm....Chico, you know I'm the one for real, you're the one I kill....This ain't Fresh Prince why am I battling Uncle Phil"]
  var rand = responds[Math.floor(Math.random() * responds.length)];
  message.channel.send(rand);


    message.delete().catch();
}



module.exports.help = {
  name: "wildnout"
}
