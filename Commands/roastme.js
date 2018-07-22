const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var responds = ["You have a tiny dick", "You're so ugly when you were born you're mom threw you out the window and the window threw you back! :joy:", "You're so ugly, you can't even get a date off the calendar.:sob:", "Your dentist diagnosed you with continental drift", "No need to roast you, your life says enough.", "when life leaves you but your body is thinking its there :thinkgun:", "Do you even fit through the next door?"];
  var rand = responds[Math.floor(Math.random() * responds.length)];
  message.channel.send(rand);


    message.delete().catch();
}



module.exports.help = {
  name: "roastme"
}
