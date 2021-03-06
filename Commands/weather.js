const Discord = require("discord.js");
const weather = require("weather-js");

module.exports.run = async (bot, message, args) => {
weather.find({search: args.join(" "), degreeType: `c`}, function(err, result) {
    if (err) message.channel.send(err)
    if(result.length === 0) {
        return message.channel.send("**please enter a valid location.**")
    }
    var current = result[0].current;
    var location = result[0].location;

    let embed = new Discord.RichEmbed()
    .setDescription(`**${current.skytext}**`)
    .setAuthor(`Weather for ${current.observationpoint}`)
    .setThumbnail(current.imageUrl)
    .setColor(0x00AE86)
    .addField(`Timezone`,`UTC${location.timezone}`, true)
    .addField(`Degree Type`,location.degreetype, true)
    .addField(`Temperature`,`${current.temperature} Degrees`, true)
    .addField(`Feels Like`,`${current.feelslike} Degrees`, true)
    .addField(`Winds`,current.winddisplay, true)
    .addField(`Humidity`, `${current.humidity}%`, true)
    .setFooter("You need a C to F convertor to get the accurate weahter to most places");

    message.channel.send({embed});

});

}






module.exports.help = {
    name: "weather"
  }
