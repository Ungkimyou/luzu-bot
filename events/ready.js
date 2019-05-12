const Discord = require("discord.js");


exports.run = async (bot) => {
  console.log(`${bot.user.tag} is online`);
  bot.user.setActivity(`This Bot is Coming soon`, {type: "LISTENING"})
  let onlinelogs = bot.channels.get("577154331787132928");
let online = new Discord.RichEmbed()
    .setTitle('Bot is Online')
    .setColor("RANDOM")
    .addField('Bot has restarted,', ` with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`)
    .setFooter(`${bot.user.tag}`) //FOOTER AND ICON
    .setTimestamp(); //SHOWS THAT COOL TIME ON THE FOOTER!
  onlinelogs.send(online);
}